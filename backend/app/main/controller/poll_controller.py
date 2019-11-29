from flask import request
from flask_restplus import Resource
from flask_jwt_extended import get_current_user, jwt_required, get_jwt_claims

from app.main import jwt, db
from app.main.util.dto import PollDto as _poll
import app.main.service.poll_service as poll_service

api = _poll.api

@api.route('/')
class Poll(Resource):
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
    @api.doc('list of polls', security='Bearer Auth')
    def get(self):
        user = get_current_user()
        print(user)
        return poll_service.get_user_polls(user.id)
