from flask import request
from flask_restplus import Resource
from flask_jwt_extended import get_current_user, jwt_required, get_jwt_claims

from app.main import jwt, db
from app.main.util.dto import PollDto as _poll
import app.main.service.poll_service as poll_service

api = _poll.api

@api.route('/')
class PollCollection(Resource):
    @api.response(201, 'Poll successfully create')
    @api.doc('create a new poll', security='Bearer Auth')
    @api.expect(_poll.create_poll_fields, validate=True)
    @api.marshal_with(_poll.create_poll_response)
    @jwt_required
    def post(self):
        """Creates a new Poll"""
        user = get_current_user()
        data = request.json
        return poll_service.save_new_poll(user.id, data)

    @jwt_required
    @api.marshal_list_with(_poll.poll_fields)
    @api.doc('list of polls created by user', security='Bearer Auth')
    def get(self):
        user = get_current_user()
        print(user)
        return poll_service.get_user_polls(user.id)

@api.route('/<poll_id>')
class PollItem(Resource):
    @api.doc('Get a poll by poll_id', security='Bearer Auth')
    @api.marshal_with(_poll.poll_fields)
    @jwt_required
    def get(self, poll_id):
        """Gets poll specified by poll_id"""
        user = get_current_user()
        return poll_service.get_poll_by_id(user.id, poll_id)

    @api.response(201, 'Poll successfully patched')
    @api.doc('Update a poll\'s is_open status', security='Bearer Auth')
    @api.expect(_poll.update_poll_fields, validate=True)
    @jwt_required
    def patch(self, poll_id):
        """Updates a Poll"""
        user = get_current_user()
        data = request.json
        return poll_service.update_poll(user.id, poll_id, data)

@api.route('/following')
class PollsFollowing(Resource):
    @jwt_required
    @api.marshal_list_with(_poll.poll_fields)
    @api.doc('list of polls user is following', security='Bearer Auth')
    def get(self):
        user = get_current_user()
        print(user)
        return poll_service.get_polls_following(user.id)

@api.route('/response/<poll_id>')
class PollResponse(Resource):
    @jwt_required
    @api.marshal_list_with(_poll.aggregate_answers)
    @api.doc('Votes for each answer to a poll', security='Bearer Auth')
    def get(self,poll_id):
        '''gets responses of poll at this id'''
        user = get_current_user()
        return poll_service.get_polls_responses(user.id,poll_id)

    @jwt_required
    @api.expect(_poll.resp_fields,validate=True)
    @api.doc('Vote for answer, comment optional', security='Bearer Auth')
    def post(self,poll_id):
        '''post a response to given poll id'''
        data = request.json
        user = get_current_user()
        return poll_service.respond_to_poll(user.id,poll_id,data)

