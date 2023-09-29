import pytest
from application import create_app  # Import the create_app function
from application.models import Users
from testing.postgresql import Postgresql
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

@pytest.fixture
def app():
    app = create_app()  # Use the create_app function to create the app instance
    app.config['TESTING'] = True  # Set the TESTING config to True
    return app

@pytest.fixture
def client(app):
    with app.test_client() as test_client:
        yield test_client

@pytest.fixture
def test_db():
    with Postgresql() as postgresql:
        engine = create_engine(postgresql.dsn())
        Session = sessionmaker(bind=engine)
        session = Session()
        yield session

# Fixture to provide a User model instance using the test database
@pytest.fixture
def user_model(test_db):
    return Users(
        email='jacob@email.com',
        first_name='Jacob',
        last_name='Brooks',
        password='Password'
    )

# Example test for creating a new user
def test_new_user(user_model):
    user = user_model
    
    assert user.email == 'jacob@email.com'
    assert user.first_name == 'Jacob'
    assert user.last_name == 'Brooks'
    assert user.password == 'Password'
