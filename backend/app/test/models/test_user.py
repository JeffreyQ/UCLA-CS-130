import unittest
import datetime

from app.main import db
from app.main.models.user import User
from app.test.base import BaseTestCase


class TestUserModel(BaseTestCase):

    def test_user_create(self):
        user = User(
            email='test@test.com',
            name="Test Test",
            fb_id="12345678"
        )
        db.session.add(user)
        db.session.commit()
        
        self.assertTrue(user.id == 1)
        self.assertTrue(user.email == "test@test.com")
        self.assertTrue(user.name == "Test Test")



if __name__ == '__main__':
    unittest.main()
