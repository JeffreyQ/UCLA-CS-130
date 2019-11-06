"""
This file contains all the db models for our app

alembic pulls the metadata from this file in order to autogenerate migrations

"""
from sqlalchemy import Boolean, Column, DateTime, MetaData, String, Table, Integer
from flask_sqlalchemy import SQLAlchemy

metadata = MetaData()

db = SQLAlchemy(metadata=metadata)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120))

    def __repr__(self):
        return "User {} : {}".format(self.id, self.email)
