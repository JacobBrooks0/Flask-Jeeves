from flask import Blueprint, request, jsonify
from application.models import Variables, db

variables = Blueprint("variables", __name__)

# Create a new variable
@variables.route('/variables', methods=['POST'])
def create_variable():
    data = request.json
    new_variable = Variables(
        specialty=data['specialty'],
        feature=data['feature'],
        question=data['question'],
        defaultQuestion=data['defaultQuestion']
    )
    db.session.add(new_variable)
    db.session.commit()
    return jsonify({"message": "Variable created successfully!"}), 201

# Retrieve a variable by ID
@variables.route('/variables/<id>', methods=['GET'])
def get_variable_by_id(id):
    variable = Variables.query.get_or_404(id)
    variable_data = {
        'id': variable.id,
        'specialty': variable.specialty,
        'feature': variable.feature,
        'question': variable.question,
        'defaultQuestion': variable.defaultQuestion
    }
    return jsonify(variable_data), 200

# Update a variable by ID
@variables.route('/variables/<id>', methods=['PUT'])
def update_variable(id):
    variable = Variables.query.get_or_404(id)
    data = request.json
    variable.specialty = data['specialty']
    variable.feature = data['feature']
    variable.question = data['question']
    variable.defaultQuestion = data['defaultQuestion']
    db.session.commit()
    return jsonify({"message": "Variable updated successfully!"}), 200

# Delete a variable by ID
@variables.route('/variables/<id>', methods=['DELETE'])
def delete_variable(id):
    variable = Variables.query.get_or_404(id)
    db.session.delete(variable)
    db.session.commit()
    return jsonify({"message": "Variable deleted successfully!"}), 200

