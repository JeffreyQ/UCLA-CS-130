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
    client = server.app.test_client()

    yield client

    os.close(db_fd)
    os.unlink(server.app.config['DATABASE'])



class TestUserCollection:

    def test_get(self, client):
        asdf = client.get('/user')
        return asdf
