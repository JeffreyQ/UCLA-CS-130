from app.main.models.user import User
from app.main import db

def save_new_user(data):
    try:
        email = data['email']
        user = User(email=email)
        db.session.add(user)
        db.session.commit()

        return 200
    except Exception as e:
        print(e)
        return 500

def get_all_users():
    asdf = User.query.all()
    for user in asdf:
        print(user)
    return "Working!"


def get_a_user():
    pass
