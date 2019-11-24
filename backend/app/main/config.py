import os

basedir = os.path.abspath(os.path.dirname(__file__))
GRAPH_API_HOST = "https://graph.facebook.com/v5.0"


class Config(object):
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']
    JWT_SECRET_KEY = 'secret-key'
    APP_ACCESS_TOKEN = os.environ['APP_ID'] + "|" + os.environ['APP_SECRET']
    DEBUG_TOKEN_URL = GRAPH_API_HOST + "/debug_token?access_token=" + APP_ACCESS_TOKEN + "&input_token={access_token}"
    USER_DETAIL_URL = GRAPH_API_HOST + "/{user_id}?access_token={access_token}&fields=email,name"


class DevelopmentConfig(Config):
    DEVELOPMENT = True
    DEBUG = True


class TestingConfig(Config):
    TESTING = True


class ProductionConfig(Config):
    DEBUG = False


config_by_name = dict(
    dev=DevelopmentConfig,
    test=TestingConfig,
    prod=ProductionConfig
)
