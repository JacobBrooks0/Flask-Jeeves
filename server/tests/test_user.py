from application.models import User
import pytest
from unittest import mock
from flask import Flask

def test_new_user():

    user = User('Jacob@email.com','Jacob Brooks','Password')
    assert user.email == 'Jacob@email.com'
    assert user.first_name == 'Jacob'
    assert user.last_name == 'Brooks'
    assert user.password == 'Password'

#   first_name=data['first_name'],
#         last_name=data['last_name'],
#         email=data['email'],
#         password=data['password']
#     )
