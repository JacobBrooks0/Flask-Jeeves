from flask import Blueprint, request, jsonify
from application.models import Diseases, db

diseases = Blueprint("diseases", __name__)

# Create a new disease
@diseases.route("/diseases", methods=["POST"])
def create_disease():
    data = request.json
    new_disease = Diseases(
        specialty=data["specialty"], name=data["name"], description=data["description"]
    )
    db.session.add(new_disease)
    db.session.commit()
    return jsonify({"message": "Disease created successfully!"}), 201


# Retrieve a disease by ID
@diseases.route("/diseases/<id>", methods=["GET"])
def get_disease_by_id(id):
    disease = Diseases.query.get_or_404(id)
    disease_data = {
        "id": disease.id,
        "specialty": disease.specialty,
        "name": disease.name,
        "description": disease.description,
    }
    return jsonify(disease_data), 200


# Update a disease by ID
@diseases.route("/diseases/<id>", methods=["PUT"])
def update_disease(id):
    disease = Diseases.query.get_or_404(id)
    data = request.json
    disease.specialty = data["specialty"]
    disease.name = data["name"]
    disease.description = data["description"]
    db.session.commit()
    return jsonify({"message": "Disease updated successfully!"}), 200


# Delete a disease by ID
@diseases.route("/diseases/<id>", methods=["DELETE"])
def delete_disease(id):
    disease = Diseases.query.get_or_404(id)
    db.session.delete(disease)
    db.session.commit()
    return jsonify({"message": "Disease deleted successfully!"}), 200
