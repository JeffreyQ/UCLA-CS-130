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

    create_follow = api.model('user_follow_create', {
        'id': fields.Integer(required=True, description='id of the user to follow you')
    })

    confirm_follow = api.model('user_follow_create', {
        'id': fields.Integer(required=True, description='id of the user to follow')
    })

    create_follow_response = api.model('create_follow_response', {
        'status': fields.String
    })


class PollDto:
    api = Namespace('poll', description='poll related operations')

    resp_struct_fields = api.model('Response_Struct', {
        'low': fields.String(description='label for low value on scale'),
        'high': fields.String(description='label for high value on scale'),
        'options': fields.List(fields.String, description='list of answer options'),
    })
    create_poll_fields = api.model('Create_Poll_Fields', {
    	'prompt': fields.String(required=True, description='poll question prompt'),
    	'form_type': fields.String(required=True, description='form type', enum=['multChoice', 'selectAll', 'numScale', 'freeResp']),
    	'resp_struct': fields.Nested(resp_struct_fields, description='poll response structure'),
    })
    create_poll_response = api.model('Poll_Id', {
        "id": fields.Integer(required=True, description='poll id')
    })
    poll_fields = api.model('Poll_Fields', {
        'id': fields.Integer(required=True, description='poll id'),
    	'owner_id': fields.Integer(required=True, description='poll owner id'),
    	'prompt': fields.String(required=True, description='poll question prompt'),
    	'form_type': fields.String(required=True, description='form type', enum=['multChoice', 'selectAll', 'numScale', 'freeResp']),
    	'resp_struct': fields.Nested(resp_struct_fields, description='poll response structure'),
        'is_open': fields.Boolean(required=True, description='Status of whether poll is still open')
    })

    update_poll_fields = api.model('Update_Poll_Fields', {
        'is_open': fields.Boolean(required=True, description='Status of whether poll is still open')
    })

    resp_fields = api.model('Response_Fields', {
        'poll_id': fields.Integer(required=True, description='poll id'),
        'responder_id': fields.Integer(required=True, description='poll responder id'),
        'answer': fields.Integer(description='integer value for answer'),
        'comment': fields.String(description='string value of comments')
    })

    aggregate_answers= api.model('Aggregated_Answers',{
        'answer':fields.Integer(description='answer value'),
        'votes':fields.Integer(description='number of counts for the corresponding answer value'),
    })
    resp_answers = api.model('Response_Answers',{
        'aggregates':fields.List(fields.Nested(aggregate_answers)),
    })
