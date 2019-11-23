from app.main.models.poll import Poll
from app.main import db

def save_new_poll(data):
    owner_id = data['owner_id']
    form_type = data['form_type']

    poll = Poll(owner_id=owner_id,
                form_type=form_type)

    db.session.add(poll)
    db.session.commit()

    response_object = {
        'status': 'success',
        'message': 'Successfully created poll'
    }

    return response_object, 201
