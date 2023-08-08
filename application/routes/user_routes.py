""" from application import db
from flask import request, jsonify, Blueprint
from application.models import User

user = Blueprint("user", __name__)

# Route to Create a New User(add data to database w. POST route:)
@user.route('/user', methods=['POST'])
def create_user():
    #retrieved data from client 
    data = request.json
    #created new user using the data
    new_user = User(
        first_name=data['first_name'],
        last_name=data['last_name'],
        email=data['email'],
        password=data['password']
    )
    #send user to DB
    db.session.add(new_user)
    db.session.commit()
    #return JSON response to the client 
    return jsonify({"message": "User created successfully!"}), 201

# Route to Get All Users
@user.route('/users', methods=['GET'])
def get_all_users():
    users = User.query.all()
    user_list = []
    for user in users:
        user_data = {
            'id': user.id,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'email': user.email
        }
        user_list.append(user_data)
    return jsonify(user_list), 200

# Route to Get a Specific User by ID
@user.route('/user/<id>', methods=['GET'])
def get_user_by_id(user_id):
    user = User.query.filter_by(id=id).first()
    user_data = {
        'id': user.id,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'email': user.email
    }
    return jsonify(user_data), 200

# Route to Update a User by ID
@user.route('/user/<id>', methods=['PUT'])
def update_user_by_id(user_id):
    user = User.query.get_or_404(user_id)
    data = request.get_json()
    user.first_name = data['first_name']
    user.last_name = data['last_name']
    user.email = data['email']
    user.password = data['password']
    db.session.commit()
    return jsonify({"message": "User updated successfully!"}), 200

# Route to Delete a User by ID
@user.route('/user/<id>', methods=['DELETE'])
def delete_user_by_id(user_id):
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": "User deleted successfully!"}), 200 """