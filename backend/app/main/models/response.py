from .. import db


class Response(db.Model):
	id = db.Column(db.Integer,primary_key=True)
	poll_id = db.Column(db.Integer,db.ForeignKey('poll.id'))
	responder_id = db.Column(db.Integer,db.ForeignKey('user.id'))
	answer = db.Column(db.Integer)
	comment = db.Column(db.String(200))

	def __repr__(self):
		return "Poll Id: {}, Responder: {}, Answer: {}".format(self.poll_id, self.responder_id, self.answer, self)


