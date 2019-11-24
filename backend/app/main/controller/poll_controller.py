from flask import request
from flask_restplus import Resource
from flask_jwt_extended import get_current_user, jwt_required, get_jwt_claims

from app.main import jwt
from app.main.util.dto import PollDto
from app.main.service.poll_service import save_new_poll, get_all_polls

api = PollDto.api
_poll = PollDto.poll

@api.route('/')
class Poll(Resource):
    @api.response(201, 'Poll successfully create')
    @api.doc('create a new poll')
    @api.expect(_poll, validate=True)
    def post(self):
        """Creates a new Poll"""
        data = request.json
        return save_new_poll(data)

    @jwt_required
    @api.marshal_list_with(_poll, envelope='data')
    @api.doc('list of polls')
    def get(self):
        user = get_current_user()
        print(user)
        return get_all_polls()
