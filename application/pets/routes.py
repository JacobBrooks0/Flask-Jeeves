# from flask import request, jsonify, Blueprint, render_template
# from models import Pets, db

# pet = Blueprint("pet", __name__)

# # List All Pets
# @pet.route('/pets', methods=['GET'])
# def list_pets():
#     pets = Pets.query.all()
#     pet_list = []
#     for pet in pets:
#         pet_data = {
#             'id': pet.id,
#             'user_id': pet.user_id,
#             'name': pet.name,
#             'dob': pet.dob.strftime('%Y-%m-%d'),
#             'breed': pet.breed,
#             'outdoor': pet.outdoor,
#             'neutered': pet.neutered,
#             'sex': pet.sex,
#             'diet': pet.diet
#         }
#         pet_list.append(pet_data)
#     return jsonify(pet_list), 200

# # Create a Pet
# @pet.route('/pet', methods=['POST'])
# def create_pet():
#     data = request.json
#     new_pet = Pets(
#         user_id=data['user_id'],
#         name=data['name'],
#         dob=data['dob'],
#         breed=data['breed'],
#         outdoor=data['outdoor'],
#         neutered=data['neutered'],
#         sex=data['sex'],
#         diet=data['diet'],
#         history_id=data['history_id']
#     )
#     db.session.add(new_pet)
#     db.session.commit()
#     return jsonify({"message": "Pet created successfully!"}), 201

# # Retrieve Pet by ID
# @pet.route('/pet/<id>', methods=['GET'])
# def get_pet_by_id(id):
#     pet = Pets.query.get_or_404(id)
#     pet_data = {
#         'id': pet.id,
#         'user_id': pet.user_id,
#         'name': pet.name,
#         'dob': pet.dob.strftime('%Y-%m-%d'),
#         'breed': pet.breed,
#         'outdoor': pet.outdoor,
#         'neutered': pet.neutered,
#         'sex': pet.sex,
#         'diet': pet.diet
#     }
#     return jsonify(pet_data), 200

# # Update Pet
# @pet.route('/pet/<id>', methods=['PUT'])
# def update_pet(id):
#     pet = Pets.query.get_or_404(id)
#     data = request.json
#     pet.user_id = data['user_id']
#     pet.name = data['name']
#     pet.dob = data['dob']
#     pet.breed = data['breed']
#     pet.outdoor = data['outdoor']
#     pet.neutered = data['neutered']
#     pet.sex = data['sex']
#     pet.diet = data['diet']
#     db.session.commit()
#     return jsonify({"message": "Pet updated successfully!"}), 200

# # Delete Pet
# @pet.route('/pet/<id>', methods=['DELETE'])
# def delete_pet(id):
#     pet = Pets.query.get_or_404(id)
#     db.session.delete(pet)
#     db.session.commit()
#     return jsonify({"message": "Pet deleted successfully!"}), 200

# #  More routes ?
