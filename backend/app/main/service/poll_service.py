from app.main.models.poll import Poll
from app.main.models.user import User, user_polls_following
from app.main.models.response import Response
from app.main import db

def save_new_poll(user_id, data):
    try:
        prompt = data['prompt']
        form_type = data['form_type']
        resp_struct = data['resp_struct']

        poll = Poll(owner_id=user_id, prompt=prompt, form_type=form_type, resp_struct=resp_struct)
        db.session.add(poll)

        current_user = User.query.filter_by(id=user_id).first()
        subscribed_users = current_user.followers
        for user in subscribed_users:
            user.polls_following.extend([poll])
        db.session.bulk_save_objects(subscribed_users)
        db.session.commit()
        return {"id": poll.id}, 201
    except Exception as e:
        print(e)
    return {
        'status': 'failure',
        'message': 'Failed to create poll'
    }, 404

def get_all_polls():
    try:
        polls = Poll.query.all()
        return [poll.as_dict() for poll in polls], 200
    except Exception as e:
        print(e)
    return {
        'status': 'failure',
        'message': 'Failed to get polls'
    }, 404

def get_user_polls(user_id):
    try:
        polls = Poll.query.filter_by(owner_id=user_id).all()
        return [poll.as_dict() for poll in polls], 200
    except Exception as e:
        print(e)
    return {
        'status': 'failure',
        'message': 'Failed to get polls'
    }, 404

def get_poll_by_id(user_id, poll_id):
    try:
        poll = Poll.query.filter_by(id=poll_id).first()
        if (poll.owner_id == user_id):
            return poll.as_dict(), 200
        else:
            return {
                'status': 'failure',
                'message': "Do not have permission, user does not own poll %s" % poll_id
            }, 401
    except Exception as e:
        print(e)
    return {
        'status': 'failure',
        'message': 'Failed to get poll'
    }, 404

def update_poll(user_id, poll_id, data):
    try:
        poll = Poll.query.filter_by(id=poll_id).first()
        if (poll.owner_id == user_id):
            poll.is_open = data['is_open']
            db.session.add(poll)
            db.session.commit()
            return {
                'status': 'success',
                'message': 'Successfully updated poll'
            }, 200
        else:
            return {
                'status': 'failure',
                'message': "Do not have permission, user does not own poll %s" % poll_id
            }, 401
    except Exception as e:
        print("test")
        print(e)
    return {
        'status': 'failure',
        'message': 'Failed to update poll'
    }, 404

def get_polls_following(user_id):
    try:
        polls = db.session.query(Poll) \
        .join(user_polls_following, user_polls_following.c.poll_id == Poll.id) \
        .filter(user_polls_following.c.user_id==user_id) \
        .all()
        return [poll.as_dict() for poll in polls], 200
    except Exception as e:
        print(e)
    return {
        'status': 'failure',
        'message': 'Failed to get polls'
    }, 404

def get_polls_responses(user_id,poll_id):
    try:
        #allowing anyone to see poll responses

        aggregates = db.session.query(Response.answer,db.func.count(Response.answer))\
            .filter(Response.poll_id == poll_id)\
            .group_by(Response.answer)\
            .all()

        aggregate_dict = []
        for pair in aggregates:
            pair_dict = {
                'option':pair[0],
                'votes':pair[1]
            }
            aggregate_dict.append(pair_dict)

        individuals = db.session.query(Response)\
           .filter(Response.poll_id == poll_id)\
           .all()

        result = {"aggregates":aggregate_dict, "responses":[u.as_dict() for u in individuals]}
        return result,200

    except Exception as e:
        print(e)
        return 401

def respond_to_poll(user_id,poll_id,data):
    try:
        responder_id = user_id
        option = data['option']
        comment = None if 'comment' not in data else data['comment']
        response = Response(poll_id=poll_id,responder_id=responder_id,answer=option,comment=comment)
        db.session.add(response)
        db.session.commit()
        return {
            'status': 'success',
            'message': 'Response posted successfully'
        },201
    except Exception as e:
        print(e)
        return 404

def has_responded_to_poll(user_id,poll_id):
    try:
        #need to prevent duplicate responses from same person
        query = db.session.query(Response.poll_id)\
            .filter(Response.poll_id == poll_id)\
            .filter(Response.responder_id == user_id)\
            .first()
        if(query):
            return {"responded":True},200
        else:
            return {"responded":False},200
    except Exception as e:
        print(e)
        return {
            'status':'failure',
            'message':'error checking if user has responded'
        },404
