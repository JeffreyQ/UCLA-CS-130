from flask import Flask
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
    print("TESjT")
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


if __name__ == '__main__':
    http_server = WSGIServer(('', 5000), app, log=app.logger)
    http_server.serve_forever()
