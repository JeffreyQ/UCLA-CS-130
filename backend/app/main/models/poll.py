from .. import db
from sqlalchemy import Enum

form_types = ("multChoice", "selectAll", "numScale", "freeResp")
form_type_enum = Enum(*form_types, name="form_type")


class Poll(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer,db.ForeignKey('user.id'))
    prompt = db.Column(db.String(200), default="")
    form_type = db.Column(form_type_enum, default="freeResp")
    resp_struct = db.Column(db.JSON)
    is_open = db.Column(db.Boolean, default=True)
    responses = db.relationship("Response")

    def as_dict(self):
            return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def __repr__(self):
            return "Poll Id: {}, Type: {}, Owner: {}".format(self.id, self.form_type, self.owner_id, self)
