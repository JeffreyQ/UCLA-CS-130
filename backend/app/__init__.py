from flask_restplus import Api
from flask import Blueprint

from app.main.controller.user_controller import api as user_ns
from app.main.controller.poll_controller import api as poll_ns

blueprint = Blueprint('api', __name__)

api = Api(blueprint,
          title='Polly API',
          version='1.0',
          description='Polly API'
          )

api.add_namespace(user_ns, path='/user')
api.add_namespace(poll_ns, path='/poll')
