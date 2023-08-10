from flask import request, jsonify, Blueprint
from application.models import Diseases
from application import db

disease = Blueprint("disease", __name__)

# Create a Disease
@disease.route('/disease', methods=['POST'])
def create_disease():
    data = request.json
    new_disease = Diseases(
        specialty=data['specialty'],
        name=data['name'],
        description=data['description']
    )
    db.session.add(new_disease)
    db.session.commit()
    return jsonify({"message": "Disease created successfully!"}), 201

# Get All Diseases
@disease.route('/diseases', methods=['GET'])
def get_all_diseases():
    diseases = Diseases.query.all()
    disease_list = []
    for disease in diseases:
        disease_data = {
            'id': disease.id,
            'specialty': disease.specialty,
            'name': disease.name,
            'description': disease.description
        }
        disease_list.append(disease_data)
    return jsonify(disease_list), 200

# Get Disease by ID
@disease.route('/disease/<id>', methods=['GET'])
def get_disease_by_id(id):
    disease = Diseases.query.get_or_404(id)
    disease_data = {
        'id': disease.id,
        'specialty': disease.specialty,
        'name': disease.name,
        'description': disease.description
    }
    return jsonify(disease_data), 200

# Update Disease
@disease.route('/disease/<id>', methods=['PUT'])
def update_disease(id):
    disease = Diseases.query.get_or_404(id)
    data = request.json
    disease.specialty = data['specialty']
    disease.name = data['name']
    disease.description = data['description']
    db.session.commit()
    return jsonify({"message": "Disease updated successfully!"}), 200

# Delete Disease
@disease.route('/disease/<id>', methods=['DELETE'])
def delete_disease(id):
    disease = Diseases.query.get_or_404(id)
    db.session.delete(disease)
    db.session.commit()
    return jsonify({"message": "Disease deleted successfully!"}), 200
