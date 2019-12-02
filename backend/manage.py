import os
import unittest
import json
from gevent.pywsgi import WSGIServer
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager

from app import blueprint, api
from app.main import create_app, db
from app.main.models import user, poll, response

app = create_app(os.getenv('POLLY_ENV') or 'dev')
app.register_blueprint(blueprint)
app.app_context().push()

manager = Manager(app)
migrate = Migrate(app, db)

manager.add_command('db', MigrateCommand)

@manager.command
def run():
    app.run("0.0.0.0")

@manager.command
def deploy():
    http_server = WSGIServer(('', 5000), app)
    http_server.serve_forever()


@manager.command
def test():
    """Runs the unit tests."""
    tests = unittest.TestLoader().discover('app/test', pattern='test*.py')
    result = unittest.TextTestRunner(verbosity=3).run(tests)
    if result.wasSuccessful():
        return 0
    return 1

@manager.command
def generate_json():
    with app.app_context(), app.test_request_context(), open('polly_api.json', 'w') as outfile:
        json.dump(api.__schema__, outfile)

if __name__ == '__main__':
    manager.run()
