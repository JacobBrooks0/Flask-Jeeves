from flask import Blueprint, request, jsonify
from application.models import UsersAnswersCount, db

users_answers_count = Blueprint("users_answers_count", __name__)


# Create a new user's answers count
@users_answers_count.route("/users-answers-count", methods=["POST"])
def create_users_answers_count():
    data = request.json
    new_users_answers_count = UsersAnswersCount(
        disease_id=data["disease_id"],
        diseasesVariables_id=data["diseasesVariables_id"],
        no=data["no"],
        probablyNot=data["probablyNot"],
        iDontKnow=data["iDontKnow"],
        propablyYes=data["probablyYes"],
        yes=data["yes"],
    )
    db.session.add(new_users_answers_count)
    db.session.commit()
    return jsonify({"message": "User's answers count created successfully!"}), 201


# Retrieve a user's answers count by ID
@users_answers_count.route("/users-answers-count/<id>", methods=["GET"])
def get_users_answers_count_by_id(id):
    users_answers_count = UsersAnswersCount.query.get_or_404(id)
    users_answers_count_data = {
        "id": users_answers_count.id,
        "disease_id": users_answers_count.disease_id,
        "diseasesVariables_id": users_answers_count.diseasesVariables_id,
        "no": users_answers_count.no,
        "probablyNot": users_answers_count.probablyNot,
        "iDontKnow": users_answers_count.iDontKnow,
        "probablyYes": users_answers_count.propablyYes,
        "yes": users_answers_count.yes,
    }
    return jsonify(users_answers_count_data), 200


# Update a user's answers count by ID
@users_answers_count.route("/users-answers-count/<id>", methods=["PUT"])
def update_users_answers_count(id):
    users_answers_count = UsersAnswersCount.query.get_or_404(id)
    data = request.json
    users_answers_count.disease_id = data["disease_id"]
    users_answers_count.diseasesVariables_id = data["diseasesVariables_id"]
    users_answers_count.no = data["no"]
    users_answers_count.probablyNot = data["probablyNot"]
    users_answers_count.iDontKnow = data["iDontKnow"]
    users_answers_count.propablyYes = data["propablyYes"]
    users_answers_count.yes = data["yes"]
    db.session.commit()
    return jsonify({"message": "User's answers count updated successfully!"}), 200


# Delete a user's answers count by ID
@users_answers_count.route("/users-answers-count/<id>", methods=["DELETE"])
def delete_users_answers_count(id):
    users_answers_count = UsersAnswersCount.query.get_or_404(id)
    db.session.delete(users_answers_count)
    db.session.commit()
    return jsonify({"message": "User's answers count deleted successfully!"}), 200
