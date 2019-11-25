from flask import request
from flask_restplus import Resource
from flask_jwt_extended import jwt_required

from app.main.util.dto import UserDto
from app.main.service.user_service import save_new_user, get_all_users, get_a_user, create_user_follow_request, confirm_user_follow_request

api = UserDto.api

@api.route('/')
class UserList(Resource):
    @api.doc('list_of_registered_users')
    @api.marshal_list_with(UserDto.get_response, envelope='data')
    @jwt_required
    def get(self):
        """List all registered users"""
        return get_all_users()

    @api.response(201, 'Success', UserDto.create_response)
    @api.doc('create a new user')
    @api.expect(UserDto.create, validate=True)
    def post(self):
        """Creates a new User """
        data = request.json
        return save_new_user(data=data)


@api.route('/<public_id>')
@api.param('public_id', 'The User identifier')
@api.response(404, 'User not found.')
class User(Resource):
    @api.doc('get a user')
    @api.marshal_with(UserDto.get_response)
    def get(self, public_id):
        """get a user given its identifier"""
        user = get_a_user(public_id)
        if not user:
            api.abort(404)
        else:
            return user


@api.route('/follow')
class UserFollow(Resource):
    @api.doc('create a follow request')
    @api.expect(UserDto.create_follow, validate=True)
    @api.response(201, 'Success', UserDto.create_follow_response)
    @jwt_required
    def post(self):
        """Creates a follow request"""
        data = request.json
        return create_user_follow_request(data)
        

@api.route('/confirm')
class UserConfirm(Resource):
    @jwt_required
    @api.doc('confirm a follow request')
    def post(self):
        """Confirms a follow request"""
        data = request.json
        return confirm_user_follow_request(data)

