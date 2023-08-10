from flask import request, jsonify, Blueprint, render_template
from models import Appointments, Pets, db

appointment = Blueprint("appointment", __name__)

# List All Appointments
@appointment.route('/appointments', methods=['GET'])
def list_appointments():
    appointments = Appointments.query.all()
    appointment_list = []
    for appointment in appointments:
        appointment_data = {
            'id': appointment.id,
            'date': appointment.date.strftime('%Y-%m-%d'),
            'pet_id': appointment.pet_id,
            'description': appointment.description
        }
        appointment_list.append(appointment_data)
    return jsonify(appointment_list), 200

# Create an Appointment
@appointment.route('/appointment', methods=['POST'])
def create_appointment():
    data = request.json
    new_appointment = Appointments(
        date=data['date'],
        pet_id=data['pet_id'],
        description=data['description']
    )
    db.session.add(new_appointment)
    db.session.commit()
    return jsonify({"message": "Appointment created successfully!"}), 201

# Retrieve Appointment by ID
@appointment.route('/appointment/<id>', methods=['GET'])
def get_appointment_by_id(id):
    appointment = Appointments.query.get_or_404(id)
    appointment_data = {
        'id': appointment.id,
        'date': appointment.date.strftime('%Y-%m-%d'),
        'pet_id': appointment.pet_id,
        'description': appointment.description
    }
    return jsonify(appointment_data), 200

# Update Appointment
@appointment.route('/appointment/<id>', methods=['PUT'])
def update_appointment(id):
    appointment = Appointments.query.get_or_404(id)
    data = request.json
    appointment.date = data['date']
    appointment.pet_id = data['pet_id']
    appointment.description = data['description']
    db.session.commit()
    return jsonify({"message": "Appointment updated successfully!"}), 200

# Delete Appointment
@appointment.route('/appointment/<id>', methods=['DELETE'])
def delete_appointment(id):
    appointment = Appointments.query.get_or_404(id)
    db.session.delete(appointment)
    db.session.commit()
    return jsonify({"message": "Appointment deleted successfully!"}), 200

# List Appointments by Pet
@appointment.route('/pet/<pet_id>/appointments', methods=['GET'])
def list_appointments_by_pet(pet_id):
    appointments = Appointments.query.filter_by(pet_id=pet_id).all()
    appointment_list = []
    for appointment in appointments:
        appointment_data = {
            'id': appointment.id,
            'date': appointment.date.strftime('%Y-%m-%d'),
            'pet_id': appointment.pet_id,
            'description': appointment.description
        }
        appointment_list.append(appointment_data)
    return jsonify(appointment_list), 200

# ... More routes based on your application's requirements ...
