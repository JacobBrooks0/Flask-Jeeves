from flask import Blueprint, request, jsonify
from flask_login import login_user
from werkzeug.security import check_password_hash
from application.models import Users  # Import the User model

# from application import login_manager  # Import the login_manager instance

auth = Blueprint("auth", __name__)


# Configure the user_loader callback to retrieve a user by ID
# @login_manager.user_loader
# def load_user(user_id):
#     return User.query.get(int(user_id))


# Define the login route
@auth.route("/login", methods=["POST"])
def login():
    # Get email and password from the JSON payload
    email = request.json.get("email")
    password = request.json.get("password")
    # Query the User model for the provided email
    user = Users.query.filter_by(email=email).first()
    # Check if the user exists and the password is correct
    if user and check_password_hash(user.password, password):
        # Use the login_user function to log in the user
        login_user(user)
        return jsonify({"message": "Login successful!"}), 200
    # Return an error response if authentication fails
    return jsonify({"message": "Invalid email or password"}), 401
