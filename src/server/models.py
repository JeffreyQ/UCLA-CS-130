"""
This file contains all the db models for our app

alembic pulls the metadata from this file in order to autogenerate migrations

"""
from sqlalchemy import Boolean, Column, DateTime, MetaData, String, Table, Integer, Enum, JSON
from flask_sqlalchemy import SQLAlchemy

metadata = MetaData()

db = SQLAlchemy(metadata=metadata)

form_types = ("multChoice", "selectAll", "numScale", "freeResp")
form_type_enum = db.Enum(*form_types, name="form_type")

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120))

    def __repr__(self):
        return "User {} : {}".format(self.id, self.email)

class Poll(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	owner_id = db.Column(db.Integer)
	prompt = db.Column(db.String(200))
	form_type = db.Column(form_type_enum)
	resp_struct = db.Column(db.JSON)

	def __repr__(self):
		return "Poll Id: {}, Type: {}, Owner: {}".format(self.id, self.form_type, self.owner_id, self)
