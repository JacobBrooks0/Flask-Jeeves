from flask import request, jsonify, Blueprint, render_template
from application.models import Appointments, Pets, db

appointment = Blueprint("appointment", __name__)


# List All Appointments
@appointment.route("/appointments", methods=["GET"])
def list_appointments():
    appointments = Appointments.query.all()
    appointment_list = []
    for appointment in appointments:
        appointment_data = {
            "id": appointment.id,
            "date": appointment.date.strftime("%Y-%m-%d"),
            "user_id": appointment.user_id,
            "time": appointment.time,
        }
        appointment_list.append(appointment_data)
    return jsonify(appointment_list), 200


# Create an Appointment
@appointment.route("/appointment", methods=["POST"])
def create_appointment():
    data = request.json
    new_appointment = Appointments(
        date=data["date"],
        time=data["time"],
        user_id=data["user_id"],
    )
    db.session.add(new_appointment)
    db.session.commit()
    return jsonify({"message": "Appointment created successfully!"}), 201


# Retrieve Appointment by ID
@appointment.route("/appointment/<id>", methods=["GET"])
def get_appointment_by_id(id):
    appointment = Appointments.query.get_or_404(id)
    appointment_data = {
        "id": appointment.id,
        "date": appointment.date.strftime("%Y-%m-%d"),
        "user_id": appointment.user_id,
        "time": appointment.time,
    }
    return jsonify(appointment_data), 200


# Update Appointment
@appointment.route("/appointment/<id>", methods=["PUT"])
def update_appointment(id):
    appointment = Appointments.query.get_or_404(id)
    data = request.json
    appointment.date = data["date"]
    appointment.user_id = data["user_id"]
    appointment.time = data["time"]
    db.session.commit()
    return jsonify({"message": "Appointment updated successfully!"}), 200


# Delete Appointment
@appointment.route("/appointment/<id>", methods=["DELETE"])
def delete_appointment(id):
    appointment = Appointments.query.get_or_404(id)
    db.session.delete(appointment)
    db.session.commit()
    return jsonify({"message": "Appointment deleted successfully!"}), 200


# ... More routes based on your application's requirements ...
