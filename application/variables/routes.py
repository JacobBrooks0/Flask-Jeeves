from application import db
from flask import request, jsonify, Blueprint
from application.models import Variables

variables = Blueprint("variables", __name__)

# Create a Variable
@variables.route('/variable', methods=['POST'])
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

# Get All Variables
@variables.route('/variables', methods=['GET'])
def get_all_variables():
    variables = Variables.query.all()
    variable_list = []
    for variable in variables:
        variable_data = {
            'id': variable.id,
            'specialty': variable.specialty,
            'feature': variable.feature,
            'question': variable.question,
            'defaultQuestion': variable.defaultQuestion
        }
        variable_list.append(variable_data)
    return jsonify(variable_list), 200

# Get Variable by ID
@variables.route('/variable/<id>', methods=['GET'])
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

# Update Variable
@variables.route('/variable/<id>', methods=['PUT'])
def update_variable(id):
    variable = Variables.query.get_or_404(id)
    data = request.json
    variable.specialty = data['specialty']
    variable.feature = data['feature']
    variable.question = data['question']
    variable.defaultQuestion = data['defaultQuestion']
    db.session.commit()
    return jsonify({"message": "Variable updated successfully!"}), 200

# Delete Variable
@variables.route('/variable/<id>', methods=['DELETE'])
def delete_variable(id):
    variable = Variables.query.get_or_404(id)
    db.session.delete(variable)
    db.session.commit()
    return jsonify({"message": "Variable deleted successfully!"}), 200
