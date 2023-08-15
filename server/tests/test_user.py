from application import db
from application.models import Users
import pytest
from unittest import mock
from flask import Flask

import pytest
from application.models import Users

@pytest.mark.parametrize(
    "first_name, last_name, email, password",
    [
        ("Harry", "T.", "harry@example.com", "securepassword"),
        ("Jacob", "Brooks", "Jacob@email.com", "Password"),
        ("Roberta", "Capuano", "roberta@example.com", "password123"),
        ("Alex", "Earle", "alex@gmail.com", "passWORD"),
        ("Lais", "Moraes", "lais@example.com", "PASSWORD1"),
    ],
)
def test_new_user(first_name, last_name, email, password):
    user = Users(first_name=first_name, last_name=last_name, email=email, password=password)
    
    assert user.first_name == first_name
    assert user.last_name == last_name
    assert user.email == email
    assert user.password == password



def test_user_attributes():
    user = Users('Roberta', 'Capuano', 'roberta@example.com', 'password123')
    assert user.first_name == 'Roberta'
    assert user.last_name == 'Capuano'
    assert user.email == 'roberta@example.com'
    assert user.password == 'password123'


def test_user_equality():
    user1 = Users('Harry', 'T.', 'harry@example.com', 'securepassword')
    user2 = Users('Harry', 'T.', 'harry@example.com', 'securepassword')
    assert user1 == user2

def test_user_inequality():
    user1 = Users('Harry', 'T.', 'harry@example.com', 'securepassword')
    user2 = Users('Jacob','Brooks','Jacob@email.com', 'Password')
    assert user1 != user2

#test different sets of parameters
@pytest.mark.parametrize()

def test_user_instance_variables():
    user = Users('Bob', 'Brown', 'bob@example.com', 'mypassword')
    assert hasattr(user, 'first_name')
    assert hasattr(user, 'last_name')
    assert hasattr(user, 'email')
    assert hasattr(user, 'password')

def test_user_instance_initialization():
    user = Users('Sam', 'Smith', 'sam@example.com', 'testpassword')
    assert user.first_name == 'Sam'
    assert user.last_name == 'Smith'
    assert user.email == 'sam@example.com'
    assert user.password == 'testpassword'
