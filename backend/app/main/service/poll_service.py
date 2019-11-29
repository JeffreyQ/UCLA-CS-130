from app.main.models.poll import Poll
from app.main.models.user import User, user_polls_following
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
        return [poll.as_dict() for poll in polls], 201
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
