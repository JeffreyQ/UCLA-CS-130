from flask_restplus import Namespace, fields


class UserDto:
    api = Namespace('user', description='user related operations')
    user = api.model('user', {
        'email': fields.String(required=True, description='user email address'),
    })


class PollDto:
    api = Namespace('poll', description='poll related operatoins')
    poll = api.model('poll', {
        'owner_id': fields.Integer(required=True, description='poll owner id'),
        'form_type': fields.String(required=True, description='form type', enum=['multChoice', 'selectAll', 'numScale', 'freeResp'])
    })
