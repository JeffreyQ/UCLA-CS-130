from .. import db
from sqlalchemy import Enum

relationship_status_types = ("pending", "accepted")
relationship_status_types_enum = Enum(*relationship_status_types, name="relationship_status")

user_polls_following = db.Table('user_poll_following',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('poll_id', db.Integer, db.ForeignKey('poll.id'), primary_key=True)
)


class FollowerRelationship(db.Model):
    __table_args__ = (
        db.PrimaryKeyConstraint('user_id', 'follower_id'),
    )

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    follower_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    relationship_status = db.Column(relationship_status_types_enum, default="pending")


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120))
    fb_id = db.Column(db.String(120))
    name = db.Column(db.String())
    polls = db.relationship("Poll")
    responses = db.relationship("Response")
    followers = db.relationship('User',
                                secondary="follower_relationship",
                                primaryjoin=id==FollowerRelationship.user_id,
                                secondaryjoin=id==FollowerRelationship.follower_id)
    polls_following = db.relationship('Poll', secondary=user_polls_following)
