from flask import current_app, jsonify
from flask_jwt_extended import create_access_token, get_current_user
import requests
from app.main.models.user import User, followers
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

        email = user_detail_json['email']
        name = user_detail_json['name']
        fb_id = user_detail_json['id']
        
        user = User(email=email, fb_id=fb_id, name=name)

        db.session.add(user)
        db.session.commit()

        jwt = create_access_token(user.id)
        return dict(token=jwt, expires_delta=False), 201

    except Exception as e:
        response_object = {
            'status': 'error',
            'message': 'Internal Error'
        }

        return response_object, 500

def get_all_users():
    user = get_current_user()
    users_and_relationship = db.session \
        .query(User.id, User.email, User.name, followers.c.relationship_status) \
        .outerjoin(followers, followers.c.follower_id == User.id) \
        .filter(User.id != user.id) \
        .all()

    return [u._asdict() for u in users_and_relationship]

def get_a_user():
    pass
