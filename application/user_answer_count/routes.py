from application import db
from flask import request, jsonify, Blueprint
from application.models import UsersAnswersCount

users_answers_count = Blueprint("users_answers_count", __name__)

# Create User's Answers Count
@users_answers_count.route('/users_answers_count', methods=['POST'])
def create_users_answers_count():
    data = request.json
    new_users_answers_count = UsersAnswersCount(
        disease_id=data['disease_id'],
        diseasesVariables_id=data['diseasesVariables_id'],
        no=data['no'],
        probablyNot=data['probablyNot'],
        iDontKnow=data['iDontKnow'],
        propablyYes=data['propablyYes'],
        yes=data['yes']
    )
    db.session.add(new_users_answers_count)
    db.session.commit()
    return jsonify({"message": "User's Answers Count created successfully!"}), 201

# Get All Users' Answers Count
@users_answers_count.route('/users_answers_counts', methods=['GET'])
def get_all_users_answers_counts():
    users_answers_counts = UsersAnswersCount.query.all()
    users_answers_count_list = []
    for count in users_answers_counts:
        count_data = {
            'id': count.id,
            'disease_id': count.disease_id,
            'diseasesVariables_id': count.diseasesVariables_id,
            'no': count.no,
            'probablyNot': count.probablyNot,
            'iDontKnow': count.iDontKnow,
            'propablyYes': count.propablyYes,
            'yes': count.yes
        }
        users_answers_count_list.append(count_data)
    return jsonify(users_answers_count_list), 200

# Get User's Answers Count by ID
@users_answers_count.route('/users_answers_count/<id>', methods=['GET'])
def get_users_answers_count_by_id(id):
    count = UsersAnswersCount.query.get_or_404(id)
    count_data = {
        'id': count.id,
        'disease_id': count.disease_id,
        'diseasesVariables_id': count.diseasesVariables_id,
        'no': count.no,
        'probablyNot': count.probablyNot,
        'iDontKnow': count.iDontKnow,
        'propablyYes': count.propablyYes,
        'yes': count.yes
    }
    return jsonify(count_data), 200

# Update User's Answers Count
@users_answers_count.route('/users_answers_count/<id>', methods=['PUT'])
def update_users_answers_count(id):
    count = UsersAnswersCount.query.get_or_404(id)
    data = request.json
    count.disease_id = data['disease_id']
    count.diseasesVariables_id = data['diseasesVariables_id']
    count.no = data['no']
    count.probablyNot = data['probablyNot']
    count.iDontKnow = data['iDontKnow']
    count.propablyYes = data['propablyYes']
    count.yes = data['yes']
    db.session.commit()
    return jsonify({"message": "User's Answers Count updated successfully!"}), 200

# Delete User's Answers Count
@users_answers_count.route('/users_answers_count/<id>', methods=['DELETE'])
def delete_users_answers_count(id):
    count = UsersAnswersCount.query.get_or_404(id)
    db.session.delete(count)
    db.session.commit()
    return jsonify({"message": "User's Answers Count deleted successfully!"}), 200
