from flask import request
from flask_restplus import Resource

from app.main.util.dto import PollDto
from app.main.service.poll_service import save_new_poll

api = PollDto.api
_poll = PollDto.poll

@api.route('/')
class Poll(Resource):
    @api.response(201, 'Poll successfully create')
    @api.doc('create a new poll')
    @api.expect(_poll, validate=True)
    def post(self):
        """Creates a new Polll"""
        data = request.json
        return save_new_poll(data)

