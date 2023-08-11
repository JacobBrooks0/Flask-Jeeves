import pytest
from application import app as flask_app
import testing.postgresql
from sqlalchemy import create_engine
from application.models import User
from application.routes import *


@pytest.fixture
def client():
    with flask_app.test_client() as test_client:
        yield test_client

@pytest.fixture
def test_db():
    with testing.postgresql.Postgresql() as postgresql:
        engine = create_engine(postgresql.url())
        yield engine

# Fixture to provide a User model instance using the test database
@pytest.fixture
def user_model(test_db):
    return User("users", test_db)

# Example test for creating a new user
def test_new_user(user_model):
    user_data = {
        'id': 1,
        'email': 'jacob@email.com',
        'first_name': 'Jacob',
        'last_name': 'Brooks',
        'password': 'Password'
    }
    
    user = User(**user_data)
    
    assert user.email == user_data['email']
    assert user.first_name == user_data['first_name']
    assert user.last_name == user_data['last_name']
    assert user.password == user_data['password']
