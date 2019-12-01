import os
import unittest
import pytest
import json

from flask import current_app
from app.test.base import BaseTestCase, MockResponse, cleared_db
from app.main.service import user_service
from app.main.models.user import User
from app.main import db

from manage import app

from unittest.mock import Mock, patch


class TestUserService(BaseTestCase):

    @cleared_db
    @patch('app.main.service.user_service.get_current_user')
    def test_get_all_users(self, mock):
        user_1 =  User(fb_id='123', email=None, name='Jake')
        user_2 = User(fb_id='123', email=None, name='Jane')

        db.session.add(user_1)
        db.session.add(user_2)
        db.session.commit()

        mock.return_value = User(fb_id='123', email=None, name='Albert')
        user_list, status_code = user_service.get_all_users()

        expected = [{'email': None, 'name': 'Jane', 'id': 2, 'relationship_status': None}, {'email': None, 'name': 'Jake', 'id': 1, 'relationship_status': None}] 
        
        assert user_list == expected
        assert status_code == 201

    @cleared_db
    @patch('app.main.service.user_service.get_current_user')
    def test_create_user_follow_request(self, mock):
        user_1 =  User(fb_id='123', email=None, name='Jake')
        user_2 = User(fb_id='123', email=None, name='Jane')
        
        db.session.add(user_1)
        db.session.add(user_2)
        db.session.commit()

        mock.return_value = user_1
        resp, status_code = user_service.create_user_follow_request({"id": 2})

        assert status_code == 201

    @cleared_db
    @patch('app.main.service.user_service.get_current_user')
    def test_confirm_user_follow_request(self, mock):
        user_1 =  User(fb_id='123', email=None, name='Jake')
        user_2 = User(fb_id='123', email=None, name='Jane')
        
        user_1.followers.append(user_2)
        db.session.add(user_1)
        db.session.add(user_2)
        db.session.commit()

        mock.return_value = user_2

        resp, status_code = user_service.confirm_user_follow_request({"id": 1})

        assert status_code == 201

    @cleared_db
    def test_get_a_user(self):
        user_1 =  User(fb_id='123', email=None, name='Jake')
        db.session.add(user_1)
        db.session.commit()

        resp, status_code = user_service.get_a_user(1)

        assert status_code == 201

    @cleared_db
    @patch('app.main.service.user_service.get_current_user')
    def test_get_user_subscribers(self, mock):
        user_1 =  User(fb_id='123', email=None, name='Jake')
        user_2 = User(fb_id='123', email=None, name='Jane')
        
        user_1.followers.append(user_2)
        db.session.add(user_1)
        db.session.add(user_2)
        db.session.commit()

        mock.return_value = user_2
        user_service.confirm_user_follow_request({"id": 1})

        sub_list, status_code = user_service.get_user_subscribers()
        assert status_code == 201
    @cleared_db
    @patch('app.main.service.user_service.get_current_user')
    def test_get_user_subscribers(self, mock):
        user_1 =  User(fb_id='123', email=None, name='Jake')
        user_2 = User(fb_id='123', email=None, name='Jane')
        
        user_1.followers.append(user_2)
        db.session.add(user_1)
        db.session.add(user_2)
        db.session.commit()

        mock.return_value = user_2
        user_service.confirm_user_follow_request({"id": 1})

        sub_list, status_code = user_service.get_user_subscribers()
        assert status_code == 201

    @cleared_db
    @patch('app.main.service.user_service.get_current_user')
    def test_get_user_subscribedto(self, mock):
        user_1 =  User(fb_id='123', email=None, name='Jake')
        user_2 = User(fb_id='123', email=None, name='Jane')
        
        user_1.followers.append(user_2)
        db.session.add(user_1)
        db.session.add(user_2)
        db.session.commit()

        mock.return_value = user_2
        user_service.confirm_user_follow_request({"id": 1})

        sub_list, status_code = user_service.get_user_subscribedto()

        assert status_code == 201

    @cleared_db
    @patch('app.main.service.user_service.requests.get')
    def test_save_new_user(self, mock):
        debug_data = {
            "data":{
                "user_id": "1111"
            }
        }

        user_data = {
            "id": "12123123",
            "name": "Jake",
            "email": "jones@jones.com",
        }

        mock.side_effect = [MockResponse(debug_data, 200), MockResponse(user_data, 200)]
        resp, status_code = user_service.save_new_user({'accessToken': 'test'})
        assert status_code == 201

