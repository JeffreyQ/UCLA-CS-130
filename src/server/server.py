from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from gevent.pywsgi import WSGIServer
from models import User, Poll, db
import random
import logging

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres:///polly'
db.init_app(app)

@app.route('/')
def test():
    return "Hello World!"

@app.route('/users')
def get_all_users():
    print("TEST")
    asdf = User.query.all()
    for user in asdf:
        print(user)
    return "Working!"

@app.route('/add_user',methods=['POST'])
def populate():
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

@app.route('/create_poll', methods=['POST'])
def create_poll():
    try:
        req_data = request.get_json()
        owner_id = req_data['owner_id']
        prompt = req_data['prompt']
        form_type = req_data['form_type']
        resp_struct = req_data['resp_struct']

        poll = Poll(owner_id=owner_id, prompt=prompt, form_type=form_type, resp_struct=resp_struct)
        db.session.add(poll)
        db.session.commit()
        return {"poll_id": poll.id}
    except Exception as e:
        print(e)
    return "failure"


@app.route('/get_poll', methods=['GET'])
def get_poll():
    try:
        req_data = request.get_json()

        resp = {}
        polls = []
        
        if req_data and "poll_id" in req_data:
            polls = Poll.query.filter(Poll.id == req_data["poll_id"]).all()
        else:
            polls = Poll.query.all()
        
        resp["polls"] = [poll.as_dict() for poll in polls]
        return resp
    except Exception as e:
        print(e)
    return "failure"

@app.route('/delete_poll', methods=['DELETE'])
def delete_poll():
    try:
        req_data = request.get_json()
        poll = Poll.query.filter(Poll.id == req_data["poll_id"]).first()

        if poll is None:
            return "Poll {} not found, no deletion necessary.".format(req_data["poll_id"])
        elif poll.owner_id == None or poll.owner_id == req_data["owner_id"]:
            db.session.delete(poll)
            db.session.commit()
            return "Poll {} successfully deleted.".format(req_data["poll_id"])

        return "Owner {} does not own poll {}, cannot be deleted.".format(req_data["owner_id"], req_data["poll_id"])
    except Exception as e:
        print(e)
    return "failure"


if __name__ == '__main__':
    http_server = WSGIServer(('', 5000), app, log=app.logger)
    http_server.serve_forever()
