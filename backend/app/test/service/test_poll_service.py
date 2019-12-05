import os
import unittest
import pytest
import json
import datetime

from flask import current_app
from app.test.base import BaseTestCase, MockResponse, cleared_db
from app.main.service import poll_service
from app.main.models.user import User
from app.main.models.poll import Poll
from app.main.models.response import Response
from app.main import db

from manage import app

from unittest.mock import Mock, patch


class TestPollService(BaseTestCase):

    @cleared_db
    @patch('app.main.service.user_service.get_current_user')
    def test_save_new_poll(self, mock):
        user_1 =  User(fb_id='123', email=None, name='Jake')
        user_2 = User(fb_id='123', email=None, name='Jane')
    
        user_1.followers.append(user_2)
        db.session.add(user_1)
        db.session.add(user_2)
        db.session.commit()

        mock.return_value = user_1
        resp, status_code = poll_service.save_new_poll(1, {"prompt": "test", "form_type":"multChoice",  "resp_struct": None })

        expected = {"id": 1}
        assert expected == resp
        assert status_code == 201


    @cleared_db
    def test_get_all_polls(self):
        user_1 =  User(fb_id='123', email=None, name='Jake')

        poll_1_date = datetime.datetime(2019, 12, 5, 4, 10, 12, 400736)
        poll_2_date = datetime.datetime(2019, 12, 5, 4, 10, 12, 402306)
        
        poll_1 = Poll(owner_id=1, prompt="test1", form_type="multChoice", resp_struct=None, created_date=poll_1_date)
        poll_2 = Poll(owner_id=1, prompt="test2", form_type="multChoice", resp_struct=None, created_date=poll_2_date)

        db.session.add(user_1)
        db.session.add(poll_1)
        db.session.add(poll_2)
        db.session.commit()

        resp, status_code = poll_service.get_all_polls()

        expected = [
            {
                'id': 1,
                'is_open': True,
                'resp_struct': None,
                'owner_id': 1,
                'created_date': poll_1_date, 
                'prompt': 'test1',
                'form_type': 'multChoice'
            }, 
            {
                'id': 2,
                'is_open': True,
                'resp_struct': None,
                'owner_id': 1,
                'created_date': poll_2_date,
                'prompt': 'test2',
                'form_type': 'multChoice'
            }
        ]

        assert expected == resp
        assert status_code == 200


    @cleared_db
    def test_get_user_polls(self):
        user_1 =  User(fb_id='123', email=None, name='Jake')

        poll_1_date = datetime.datetime(2019, 12, 5, 4, 10, 12, 400736)
        poll_2_date = datetime.datetime(2019, 12, 5, 4, 10, 12, 402306)
        
        poll_1 = Poll(owner_id=1, prompt="test1", form_type="multChoice", resp_struct=None, created_date=poll_1_date)
        poll_2 = Poll(owner_id=1, prompt="test2", form_type="multChoice", resp_struct=None, created_date=poll_2_date)

        db.session.add(user_1)
        db.session.add(poll_1)
        db.session.add(poll_2)
        db.session.commit()

        resp, status_code = poll_service.get_user_polls(1)

        expected = [
            {
                'id': 1,
                'is_open': True,
                'resp_struct': None,
                'owner_id': 1,
                'created_date': poll_1_date, 
                'prompt': 'test1',
                'form_type': 'multChoice'
            }, 
            {
                'id': 2,
                'is_open': True,
                'resp_struct': None,
                'owner_id': 1,
                'created_date': poll_2_date,
                'prompt': 'test2',
                'form_type': 'multChoice'
            }
        ]

        assert expected == resp
        assert status_code == 200

    @cleared_db
    def test_get_poll_by_id(self):
        user_1 =  User(fb_id='123', email=None, name='Jake')

        poll_1_date = datetime.datetime(2019, 12, 5, 4, 10, 12, 400736)
        poll_2_date = datetime.datetime(2019, 12, 5, 4, 10, 12, 402306)
        
        poll_1 = Poll(owner_id=1, prompt="test1", form_type="multChoice", resp_struct=None, created_date=poll_1_date)
        poll_2 = Poll(owner_id=1, prompt="test2", form_type="multChoice", resp_struct=None, created_date=poll_2_date)

        db.session.add(user_1)
        db.session.add(poll_1)
        db.session.add(poll_2)
        db.session.commit()

        resp, status_code = poll_service.get_poll_by_id(1, 1)

        expected = {
            'id': 1,
            'is_open': True,
            'resp_struct': None,
            'owner_id': 1,
            'created_date': poll_1_date, 
            'prompt': 'test1',
            'form_type': 'multChoice'
        } 
        
        assert expected == resp
        assert status_code == 200

    @cleared_db
    def test_update_poll(self):
        user_1 =  User(fb_id='123', email=None, name='Jake')

        poll_1_date = datetime.datetime(2019, 12, 5, 4, 10, 12, 400736)
        poll_2_date = datetime.datetime(2019, 12, 5, 4, 10, 12, 402306)
        
        poll_1 = Poll(owner_id=1, prompt="test1", form_type="multChoice", resp_struct=None, created_date=poll_1_date)
        poll_2 = Poll(owner_id=1, prompt="test2", form_type="multChoice", resp_struct=None, created_date=poll_2_date)

        db.session.add(user_1)
        db.session.add(poll_1)
        db.session.add(poll_2)
        db.session.commit()

        resp, status_code = poll_service.update_poll(1, 1, {'is_open': False})
        assert status_code == 200


        resp, status_code = poll_service.get_poll_by_id(1, 1)
        expected = {
            'id': 1,
            'is_open': False,
            'resp_struct': None,
            'owner_id': 1,
            'created_date': poll_1_date, 
            'prompt': 'test1',
            'form_type': 'multChoice'
        } 
        assert resp == expected
        assert status_code == 200

