from flask import Blueprint, request, jsonify
from application.models import Diary, db
from application.binarySearchKernel.logicUtilityFunctions import *
from datetime import *

diary = Blueprint("diary", __name__)


# Create a new diary entry
@diary.route("/diary", methods=["POST"])
def create_diary():
    current_date = datetime.now().date()
    data = request.json
    pet_id = data['pet_id']
    questionsIds = data['questionsArray']
    answers = data['answersArray']
    answersValues = answerRandomAnamnese(answers)

    new_diary_entry = Diary(
        pet_id=pet_id,
        #name=data["name"],
        date=current_date,
        questionsIds=questionsIds,
        answersValues = answersValues,
        possibleDiagnosis= None,
        #field=data["field"],
    )
    db.session.add(new_diary_entry)
    db.session.commit()
    return jsonify({"message": "Diary entry created successfully!", "id": new_diary_entry['id']}), 201


# Retrieve a diary entry by ID
@diary.route("/diary/<id>", methods=["GET"])
def get_diary_by_id(id):
    diary_entry = Diary.query.get_or_404(id)
    diary_data = {
        "id": diary_entry.id,
        "pet_id": diary_entry.pet_id,
        "name": diary_entry.name,
        "date": diary_entry.date.strftime("%Y-%m-%d"),
        "diagnosis": diary_entry.diagnosis,
        "field": diary_entry.field,
    }
    return jsonify(diary_data), 200


# Update a diary entry by ID
@diary.route("/diary/<id>", methods=["PUT"])
def update_diary(id):
    diary_entry = Diary.query.get_or_404(id)
    data = request.json
    diary_entry.pet_id = data["pet_id"]
    diary_entry.name = data["name"]
    diary_entry.date = data["date"]
    diary_entry.diagnosis = data["diagnosis"]
    diary_entry.field = data["field"]
    db.session.commit()
    return jsonify({"message": "Diary entry updated successfully!"}), 200


# Delete a diary entry by ID
@diary.route("/diary/<id>", methods=["DELETE"])
def delete_diary(id):
    diary_entry = Diary.query.get_or_404(id)
    db.session.delete(diary_entry)
    db.session.commit()
    return jsonify({"message": "Diary entry deleted successfully!"}), 200
