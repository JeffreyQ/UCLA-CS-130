from app.main import jwt
from app.main.models.user import User

@jwt.user_loader_callback_loader 
def user_loader_callback_loader(identity):
    return User.query.filter_by(id=identity).first()
