from flask import Flask, Blueprint, request
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from flask_restplus import Api, Resource, fields
from gevent.pywsgi import WSGIServer
from models import User, Poll, Response, db
import random
import json
import logging

app = Flask(__name__)

api = Api(app, version='1.0', title='Polly API',
    description='Polly API',
)

CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres:///polly'
db.init_app(app)

@app.route('/')
def test():
    return "Hello World!"

@api.route('/user')
class UserCollection(Resource):
    def get(self):
        print("TEST")
        asdf = User.query.all()
        for user in asdf:
            print(user)
        return "Working!"
    @api.expect(api.model('Register_User', {'email': fields.String}))
    def post(self):
        try:
            req_data = request.get_json()

            email = req_data['email']
            user = User(email=email)
            db.session.add(user)

            db.session.commit()
            return "success"
        except Exception as e:
            print(e)
        return "failure"

resp_struct_fields = api.model('Response_Struct', {
    'low': fields.String,
    'high': fields.String,
    'options': fields.List(fields.String),
})
create_poll_fields = api.model('Create_Poll_Fields', {
	'owner_id': fields.Integer,
	'prompt': fields.String,
	'form_type': fields.String,
	'resp_struct': fields.Nested(resp_struct_fields),
})
poll_fields = api.model('Poll_Fields', {
    'id': fields.Integer,
	'owner_id': fields.Integer,
	'prompt': fields.String,
	'form_type': fields.String,
	'resp_struct': fields.Nested(resp_struct_fields),
})

@app.route('/get_answers',methods=['POST'])
def get_answers():
    try:
        req_data = request.get_json()
        
        poll_id = req_data['poll_id']
        '''
        
            now query responses where poll id == and group by answer
        '''
        answer = db.session.query(Response.answer,db.func.count(Response.answer))\
            .filter(Response.poll_id == poll_id)\
            .group_by(Responses.answer)\
            .all()
        print(answer)
        return "success"
    except Exception as e:
            print(e)
    return "failure"
@api.route('/poll')
class PollCollection(Resource):
    @api.expect(create_poll_fields)
    @api.marshal_with(api.model('Poll_Id', {"id": fields.Integer}))
    def post(self):
        try:
            req_data = request.get_json()
            owner_id = req_data['owner_id']
            prompt = req_data['prompt']
            form_type = req_data['form_type']
            resp_struct = req_data['resp_struct']

            poll = Poll(owner_id=owner_id, prompt=prompt, form_type=form_type, resp_struct=resp_struct)
            db.session.add(poll)
            db.session.commit()
            return {"id": poll.id}
        except Exception as e:
            print(e)
        return "failure"
    @api.marshal_with(poll_fields, as_list=True)
    def get(self):
        try:
            polls = Poll.query.all()
            return [poll.as_dict() for poll in polls]
        except Exception as e:
            print(e)
        return "failure"


@api.route('/poll/<id>')
@api.doc(params={'id': 'Unique poll Id'})
class PollItem(Resource):
    @api.marshal_with(poll_fields)
    def get(self, id):
        try:
            poll = Poll.query.filter(Poll.id == id).first()
            return poll.as_dict()
        except Exception as e:
            print(e)
        return "failure"

    def delete(self, id):
        try:
            poll = Poll.query.filter(Poll.id == id).first()

            if poll is None:
                return "Poll {} not found, no deletion necessary.".format(id)

            db.session.delete(poll)
            db.session.commit()
            return "Poll {} successfully deleted.".format(id)

        except Exception as e:
            print(e)
        return "failure"

resp_fields = api.model('Response_Fields', {
    'poll_id': fields.Integer,
	'responder_id': fields.Integer,
	'answer': fields.Integer,
    'comment': fields.String
})
@api.route('/poll-response')
class PollResponseCollection(Resource):
    @api.expect(resp_fields)
    def post(self):
        try:
            req_data = request.get_json()
            poll_id = req_data['poll_id']
            responder_id = req_data['responder_id']
            answer = req_data['answer']
            comment = req_data['comment']

            response = Response(poll_id=poll_id,responder_id=responder_id,answer=answer,comment=comment)
            db.session.add(response)
            db.session.commit()
            return "success"
        except Exception as e:
            print(e)
        return "failure"
aggregate_answers= api.model('Aggregated_Answers',{
    'answer':fields.Integer,
    'votes':fields.Integer,
})
resp_answers = api.model('Response_Answers',{
    'aggregates':fields.List(fields.Nested(aggregate_answers)),
})
@api.route('/poll-response/<id>')
@api.doc(params={'id': 'Unique poll Id'})
class PollResponseItem(Resource):
    @api.marshal_with(resp_answers)
    def get(self,id):
        try:            
            poll_id = id

            aggregates = db.session.query(Response.answer,db.func.count(Response.answer))\
                .filter(Response.poll_id == poll_id)\
                .group_by(Response.answer)\
                .all()

            aggregate_dict = []
            for pair in aggregates:
                pair_dict = {
                    'answer':pair[0],
                    'votes':pair[1]
                }
                aggregate_dict.append(pair_dict)
            '''
            
                {
                    "aggregates": [
                        {
                            "answer": 0,
                            "votes": 1
                        },
                        {
                            "answer": 1,
                            "votes": 3
                        }
                    ]
                }
            '''

            result = {"aggregates":aggregate_dict}
            return result
        except Exception as e:
                print(e)
        return "failure"


if __name__ == '__main__':
    with app.app_context(), app.test_request_context(), open('polly_api.json', 'w') as outfile:
            json.dump(api.__schema__, outfile)
    http_server = WSGIServer(('', 5000), app, log=app.logger)
    http_server.serve_forever()
