from flask import current_app, jsonify
from flask_jwt_extended import create_access_token, get_current_user
import requests
from app.main.models.user import User, FollowerRelationship
from app.main.models.poll import Poll
from app.main import db

def save_new_user(data):
    try:
        access_token = data['accessToken']

        debug_token_request = requests.get(
            current_app.config['DEBUG_TOKEN_URL'].format(access_token=access_token))

        debug_token_json = debug_token_request.json()
        user_id = debug_token_json['data']['user_id']

        user = User.query.filter_by(fb_id=user_id).first()
        # if user exists, just return new JWT
        if user:
            jwt = create_access_token(user.id, expires_delta=False)
            return dict(token=jwt), 201

        user_details_request = requests.get(
            url=current_app.config['USER_DETAIL_URL'].format(access_token=access_token, user_id=user_id)
        )

        user_detail_json = user_details_request.json()

        name = user_detail_json['name']
        email = None if 'email' not in user_detail_json else user_detail_json['email']
        fb_id = user_detail_json['id']

        user = User(fb_id=fb_id, name=name, email=email)

        db.session.add(user)
        db.session.commit()

        jwt = create_access_token(user.id)
        return dict(token=jwt, expires_delta=False), 201

    except Exception as e:
        raise ValueError(e)
        response_object = {
            'status': 'error',
            'message': 'Internal Error'
        }

        return response_object, 500

def get_all_users():
    user = get_current_user()
    users_and_relationship = db.session \
        .query(User.id, User.email, User.name, User.fb_id, FollowerRelationship.relationship_status) \
        .outerjoin(FollowerRelationship, FollowerRelationship.follower_id == User.id) \
        .filter(User.id != user.id) \
        .all()

    return [u._asdict() for u in users_and_relationship], 200

def create_user_follow_request(data):
    user_requested_id = data['id']

    current_user = get_current_user()
    user_to_request = User.query.filter_by(id=user_requested_id).first()

    current_user.followers.append(user_to_request)
    db.session.add(current_user)
    db.session.commit()

    response_object = {
        'status': 'success'
    }

    return response_object, 201

def confirm_user_follow_request(data):
    following_id = data['id']
    current_user = get_current_user()

    follow_request = db.session.query(FollowerRelationship) \
        .filter_by(user_id=following_id, follower_id=current_user.id).first()

    follow_request.relationship_status = "accepted"
    db.session.add(follow_request)

    polls_following = Poll.query.filter_by(owner_id=following_id).all()
    user = User.query.filter_by(id=current_user.id).first()
    user.polls_following.extend(polls_following)
    db.session.add(user)

    db.session.commit()

    response_object = {
        'status': 'success'
    }

    return response_object, 201

def get_a_user(public_id):
    user = db.session.query(User.id, User.email, User.fb_id, User.name) \
            .filter(User.id == public_id) \
            .first()
    response = user._asdict()
    return response, 200

def get_user_subscribers():
    current_user = get_current_user()
    #right now just getting followers name and id
    mysubscribers = db.session.query(User.name, FollowerRelationship.follower_id )\
    .outerjoin(FollowerRelationship,FollowerRelationship.follower_id == User.id)\
    .filter(FollowerRelationship.user_id == current_user.id)\
    .filter(FollowerRelationship.relationship_status == "accepted")\
    .all()
    return [u._asdict() for u in mysubscribers], 200

def get_user_subscribedto():

    current_user = get_current_user()

    subscribedto = db.session.query(User.name, FollowerRelationship.user_id )\
    .outerjoin(FollowerRelationship,FollowerRelationship.user_id == User.id)\
    .filter(FollowerRelationship.follower_id == current_user.id)\
    .filter(FollowerRelationship.relationship_status == "accepted")\
    .all()
    return [u._asdict() for u in subscribedto], 200
