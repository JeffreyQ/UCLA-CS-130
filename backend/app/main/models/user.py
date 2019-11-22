from .. import db
from sqlalchemy import Enum

relationship_status_types = ("pending", "accepted")
relationship_status_types_enum = Enum(*relationship_status_types, name="relationship_status")

user_polls_following = db.Table('user_poll_following',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('poll_id', db.Integer, db.ForeignKey('poll.id'), primary_key=True)
)


followers = db.Table('followers',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('follower_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('relationship_status', relationship_status_types_enum),
    db.PrimaryKeyConstraint('user_id', 'follower_id'), 
)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120))
    polls = db.relationship("Poll")
    responses = db.relationship("Response")
    followers = db.relationship('User',
                                secondary=followers,
                                primaryjoin=id==followers.c.user_id,
                                secondaryjoin=id==followers.c.follower_id)
    polls_following = db.relationship('Poll', secondary=user_polls_following)
    def __repr__(self):
        return "User {} : {}".format(self.id, self.email)
