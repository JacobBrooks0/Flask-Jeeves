from flask import Blueprint, request, jsonify
from flask_login import login_user
from werkzeug.security import check_password_hash
from application.models import Users  # Import the User model
from application import login_manager  # Import the login_manager instance
from flask_bcrypt import check_password_hash

auth = Blueprint("auth", __name__)


# Configure the user_loader callback to retrieve a user by ID
@login_manager.user_loader
def load_user(user_id):
    return Users.query.get(int(user_id))


# Define the login route
@auth.route("/login", methods=["POST"])
def login():
    # Get email and password from the JSON payload
    email = request.json.get("email")
    password = request.json.get("password")
    # Query the User model for the provided email
    user = Users.query.filter_by(email=email).first()
    # Check if the user exists and the password is correct
    if check_password_hash(user.password, password):
        # Use the login_user function to log in the user
        login_user(user)
        return (
            jsonify(
                id=user.id,
                first_name=user.first_name,
                last_name=user.last_name,
                email=user.email,
                password=user.password,
            ),
            200,
        )
    # Return an error response if authentication fails
    return jsonify({"message": "Invalid email or password"}), 401
