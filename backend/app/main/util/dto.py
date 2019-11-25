from flask_restplus import Namespace, fields


class UserDto:
    api = Namespace('user', description='user related operations')

    create = api.model('user_create', {
        'accessToken': fields.String(required=True, description='facebook access token'),
    })

    create_response = api.model('user_create_response', {
        'token': fields.String
    })

    get_response = api.model('user_get', {
        'email': fields.String(description='user email'),
        'name': fields.String(required=True, description='name'),
        'id': fields.Integer(required=True, description='user id'),
        'relationship_status': fields.String
    })


class PollDto:
    api = Namespace('poll', description='poll related operations')
    poll = api.model('poll', {
        'owner_id': fields.Integer(required=True, description='poll owner id'),
        'form_type': fields.String(required=True, description='form type', enum=['multChoice', 'selectAll', 'numScale', 'freeResp'])
    })
