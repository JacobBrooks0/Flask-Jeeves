import pytest
from unittest.mock import patch, MagicMock
from application.models import Users
from application.login.routes import auth
from application import create_app

@pytest.fixture
def client():
    app = create_app()
    app.register_blueprint(auth)
    app.config["TESTING"] = True
    client = app.test_client()
    yield client

def test_login_successful(client):
    # Mock the Users.query.filter_by and check_password_hash methods
    with patch("application.models.Users.query.filter_by") as mock_filter_by, \
         patch("werkzeug.security.check_password_hash", return_value=True):
        
        # Create a mock user instance
        mock_user = MagicMock(spec=Users)
        mock_user.id = 1
        mock_user.email = "test@example.com"
        mock_user.password = "hashed_password"

        # Configure the mock filter_by method to return the mock user
        mock_filter_by.return_value.first.return_value = mock_user

        # Send a POST request with valid credentials
        response = client.post(
            "/login",
            json={"email": "test@example.com", "password": "password"},
        )
        expected_data = {
            "id": 1,
            "email": "test@example.com",
            "password": "hashed_password",
        }

        assert response.status_code == 200
        assert response.json == expected_data


def test_login_invalid_credentials(client):
    # Mock the Users.query.filter_by method to return None
    with patch("application.models.Users.query.filter_by") as mock_filter_by:
        mock_filter_by.return_value.first.return_value = None

        # Send a POST request with invalid credentials
        response = client.post(
            "/login",
            json={"email": "nonexistent@example.com", "password": "invalid"},
        )

        assert response.status_code == 401
        assert response.json == {"message": "Invalid email or password"}

def test_login_wrong_password(client):
    # Mock the Users.query.filter_by method to return a mock user
    with patch("application.models.Users.query.filter_by") as mock_filter_by:
        # Create a mock user instance
        mock_user = MagicMock(spec=Users)
        mock_user.id = 1
        mock_user.email = "test@example.com"
        mock_user.password = "hashed_password"

        # Configure the mock filter_by method to return the mock user
        mock_filter_by.return_value.first.return_value = mock_user

        # Mock check_password_hash to return False for this test
        with patch("werkzeug.security.check_password_hash", return_value=False):
            # Send a POST request with valid email but wrong password
            response = client.post(
                "/login",
                json={"email": "test@example.com", "password": "wrong_password"},
            )

            assert response.status_code == 401
            assert response.json == {"message": "Invalid email or password"}
