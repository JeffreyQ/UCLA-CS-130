import pytest
import sys
import os

import os
import tempfile

import pytest

sys.path.append('.')
from src.server import server

@pytest.fixture
def client():
    db_fd, server.app.config['DATABASE'] = tempfile.mkstemp()
    server.app.config['TESTING'] = True
    server.db.init_app(server.app)
    client = server.app.test_client()
    yield client

    os.close(db_fd)
    os.unlink(server.app.config['DATABASE'])

class TestUserCollection:

    def test_get(self, client):
        response = client.get('/user')
        assert response.status_code == 200


    def test_post(self, client):
        response = client.post('/user', data={'email': 'jones@teal.com'})
        assert response.status_code == 200

        response = client.post('/user', data={'asdf': 'jones@teal.com'})
        assert response.status_code != 200



