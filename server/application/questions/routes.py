from flask import request, jsonify, Blueprint
from application.models import Questions, db

questions = Blueprint("questions", __name__)

# List All Questions
@questions.route('/questions', methods=['GET'])
def list_questions():
    all_questions = Questions.query.all()
    question_list = []
    for question in all_questions:
        question_data = {
            'id': question.id,
            'content': question.content,
            'category': question.category,
            'is_default': question.is_default
        }
        question_list.append(question_data)
    return jsonify(question_list), 200

# Create a Question
@questions.route('/question', methods=['POST'])
def create_question():
    data = request.json
    new_question = Questions(
        content=data['content'],
        category=data['category'],
        is_default=data['is_default']
    )
    db.session.add(new_question)
    db.session.commit()
    return jsonify({"message": "Question created successfully!"}), 201

# Retrieve Question by ID
@questions.route('/question/<id>', methods=['GET'])
def get_question_by_id(id):
    question = Questions.query.get_or_404(id)
    question_data = {
        'id': question.id,
        'content': question.content,
        'category': question.category,
        'is_default': question.is_default
    }
    return jsonify(question_data), 200

# Update Question
@questions.route('/question/<id>', methods=['PUT'])
def update_question(id):
    question = Questions.query.get_or_404(id)
    data = request.json
    question.content = data['content']
    question.category = data['category']
    question.is_default = data['is_default']
    db.session.commit()
    return jsonify({"message": "Question updated successfully!"}), 200

# Delete Question
@questions.route('/question/<id>', methods=['DELETE'])
def delete_question(id):
    question = Questions.query.get_or_404(id)
    db.session.delete(question)
    db.session.commit()
    return jsonify({"message": "Question deleted successfully!"}), 200
