"""
This file contains all the db models for our app

alembic pulls the metadata from this file in order to autogenerate migrations

"""
from sqlalchemy import Boolean, Column, DateTime, MetaData, String, Table, Integer, Enum, JSON
from flask_sqlalchemy import SQLAlchemy
import json
import enum

metadata = MetaData()

db = SQLAlchemy(metadata=metadata)

form_types = ("multChoice", "selectAll", "numScale", "freeResp")
form_type_enum = db.Enum(*form_types, name="form_type")


class RelationshipStatus(enum.Enum):
    PENDING = 1
    ACCEPTED = 2


followers = db.Table('followers',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('follower_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('relationship_status', db.Enum(RelationshipStatus)),
    db.PrimaryKeyConstraint('user_id', 'follower_id'), 
)


user_polls_following = db.Table('user_poll_following',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('poll_id', db.Integer, db.ForeignKey('poll.id'), primary_key=True)
)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120))
    polls = db.relationship("Poll")
    responses = db.relationship("Response")
    followers = db.relationship('User', secondary=followers, backref='following')
    polls_following = db.relationship('Poll', secondary=user_polls_following)
    def __repr__(self):
        return "User {} : {}".format(self.id, self.email)


class Poll(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	owner_id = db.Column(db.Integer,db.ForeignKey('user.id'))
	prompt = db.Column(db.String(200))
	form_type = db.Column(form_type_enum)
	resp_struct = db.Column(db.JSON)
	responses = db.relationship("Response")

	def as_dict(self):
		return {c.name: getattr(self, c.name) for c in self.__table__.columns}

	def __repr__(self):
		return "Poll Id: {}, Type: {}, Owner: {}".format(self.id, self.form_type, self.owner_id, self)


class Response(db.Model):
	id = db.Column(db.Integer,primary_key=True)
	poll_id = db.Column(db.Integer,db.ForeignKey('poll.id'))
	responder_id = db.Column(db.Integer,db.ForeignKey('user.id'))
	answer = db.Column(db.Integer)
	comment = db.Column(db.String(200))

	def __repr__(self):
		return "Poll Id: {}, Responder: {}, Answer: {}".format(self.poll_id, self.responder_id, self.answer, self)


