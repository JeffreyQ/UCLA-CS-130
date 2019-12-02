from .. import db
import datetime
from sqlalchemy import DateTime


class Response(db.Model):
	id = db.Column(db.Integer,primary_key=True)
	poll_id = db.Column(db.Integer,db.ForeignKey('poll.id'))
	responder_id = db.Column(db.Integer,db.ForeignKey('user.id'))
	answer = db.Column(db.Integer)
	comment = db.Column(db.String(200))
	created_date = db.Column(DateTime, default=datetime.datetime.utcnow)

	def __repr__(self):
		return "Poll Id: {}, Responder: {}, Answer: {}".format(self.poll_id, self.responder_id, self.answer, self)
