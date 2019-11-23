from app.main.models.user import User
from app.main import db

def save_new_user(data):
    try:
        email = data['email']
        user = User(email=email)

        db.session.add(user)
        db.session.commit()

        response_object = {
            'status': 'success',
            'message': 'Successfully registered.'
        }

        return response_object, 201
    except Exception as e:
        print(e)
        return 500

def get_all_users():
    return User.query.all()

def get_a_user():
    pass
