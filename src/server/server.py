from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from gevent.pywsgi import WSGIServer
from models import User, db
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

@app.route('/add')
def populate():
    try:
        test= User(id=random.randint(1, 101), email="test")
        db.session.add(test)
        db.session.commit()
        return "success"
    except Exception as e:
        print(e)
    return "failure"

@app.route('/create_poll', methods=['POST'])
def create_poll():
    try:
        req_data = request.get_json()

        poll_id=random.randint(1, 101)
        owner_id = req_data['owner_id']
        prompt = req_data['prompt']
        form_type = req_data['form_type']
        resp_struct = req_data['resp_struct']

        poll = Poll(id=poll_id, prompt=prompt, form_type=form_type, resp_struct=resp_struct)
        db.session.add(poll)
        db.session.commit()
        return poll_id
    except Exception as e:
        print(e)
    return "failure"


if __name__ == '__main__':
    http_server = WSGIServer(('', 5000), app, log=app.logger)
    http_server.serve_forever()
