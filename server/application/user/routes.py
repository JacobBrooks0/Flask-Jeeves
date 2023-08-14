from application import db
from flask import request, jsonify, Blueprint
from application.models import Users

user = Blueprint("user", __name__)


@user.route("/")
def index():
    users = Users.query.all()

    # Create a list of user data dictionaries
    user_list = [
        {
            "id": user.id,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
        }
        for user in users
    ]

    # Return the user data as JSON response
    return jsonify(user_list)


# Route to Create a New User(add data to database w. POST route:)
@user.route("/user", methods=["POST"])
def create_user():
    # retrieved data from client
    data = request.json
    print(data)
    # created new user using the data
    new_user = Users(
        first_name=data["first_name"],
        last_name=data["last_name"],
        email=data["email"],
        password=data["password"],
    )
    # send user to DB
    db.session.add(new_user)
    db.session.commit()
    # return JSON response to the client
    return (
        jsonify(
            id=new_user.id,
            first_name=new_user.first_name,
            last_name=new_user.last_name,
            email=new_user.email,
            password=new_user.password,
        ),
        201,
    )


# Route to Get All Users
@user.route("/users", methods=["GET"])
def get_all_users():
    users = Users.query.all()
    user_list = []
    for user in users:
        user_data = {
            "id": user.id,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "email": user.email,
        }
        user_list.append(user_data)
    return jsonify(user_list), 200


# Route to Get a Specific User by ID
@user.route("/user/<id>", methods=["GET"])
def get_user_by_id(id):
    user = Users.query.filter_by(id=id).first()
    user_data = {
        "id": user.id,
        "first_name": user.first_name,
        "last_name": user.last_name,
        "email": user.email,
    }
    return jsonify(user_data), 200


# Route to Update a User by ID
@user.route("/user/<id>", methods=["PUT"])
def update_user_by_id(id):
    user = Users.query.get_or_404(id)
    data = request.get_json()
    user.first_name = data["first_name"]
    user.last_name = data["last_name"]
    user.email = data["email"]
    user.password = data["password"]
    db.session.commit()
    return jsonify({"message": "User updated successfully!"}), 200


# Route to Delete a User by ID
@user.route("/user/<id>", methods=["DELETE"])
def delete_user_by_id(id):
    user = Users.query.get_or_404(id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": "User deleted successfully!"}), 200
