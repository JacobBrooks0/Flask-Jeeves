from application import db
from application.models import Diary
from flask import request, jsonify, Blueprint

diary = Blueprint("diary", __name__)

# Route to create a new diary entry
@diary.route('/diary', methods=['POST'])
def create_diary_entry():
    data = request.json
    new_diary_entry = Diary(
        pet_id=data['pet_id'],
        name=data['name'],
        date=data['date'],
        diagnosis=data['diagnosis'],
        field=data['field']
    )
    db.session.add(new_diary_entry)
    db.session.commit()
    return jsonify({"message": "Diary entry created successfully!"}), 201

# Route to get all diary entries
@diary.route('/diary', methods=['GET'])
def get_all_diary_entries():
    diary_entries = Diary.query.all()
    diary_entry_list = []
    for entry in diary_entries:
        entry_data = {
            'id': entry.id,
            'pet_id': entry.pet_id,
            'name': entry.name,
            'date': entry.date,
            'diagnosis': entry.diagnosis,
            'field': entry.field
        }
        diary_entry_list.append(entry_data)
    return jsonify(diary_entry_list), 200

# Route to get a specific diary entry by ID
@diary.route('/diary/<id>', methods=['GET'])
def get_diary_entry_by_id(id):
    entry = Diary.query.get_or_404(id)
    entry_data = {
        'id': entry.id,
        'pet_id': entry.pet_id,
        'name': entry.name,
        'date': entry.date,
        'diagnosis': entry.diagnosis,
        'field': entry.field
    }
    return jsonify(entry_data), 200

# Route to update a diary entry by ID
@diary.route('/diary/<id>', methods=['PUT'])
def update_diary_entry_by_id(id):
    entry = Diary.query.get_or_404(id)
    data = request.json
    entry.pet_id = data['pet_id']
    entry.name = data['name']
    entry.date = data['date']
    entry.diagnosis = data['diagnosis']
    entry.field = data['field']
    db.session.commit()
    return jsonify({"message": "Diary entry updated successfully!"}), 200

# Route to delete a diary entry by ID
@diary.route('/diary/<id>', methods=['DELETE'])
def delete_diary_entry_by_id(id):
    entry = Diary.query.get_or_404(id)
    db.session.delete(entry)
    db.session.commit()
    return jsonify({"message": "Diary entry deleted successfully!"}), 200
