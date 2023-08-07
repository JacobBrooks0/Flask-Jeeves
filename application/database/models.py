#Here we will build all out tables (DB). 
from application import db, app

app.app_context().push()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

    # JSON column to store an array of pets
    pets = db.Column(db.JSON)

    # Date of Birth (DOB)
    dob = db.Column(db.Date, nullable=False)

    # JSON column to store an array of appointment history
    appointment_history = db.Column(db.JSON)

class Appointments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    pet_id = db.Column(db.Integer, db.ForeignKey('pets.id'), nullable=False)
    description = db.Column(db.String(255), nullable=False)

    # Relationship with Pet table
    pet = db.relationship('Pet', backref=db.backref('appointments', lazy=True))

class Pets(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    dob = db.Column(db.Date, nullable=False)
    breed = db.Column(db.String(100), nullable=False)
    outdoor = db.Column(db.Boolean, nullable=False)
    neutered = db.Column(db.Boolean, nullable=False)
    history = db.Column(db.JSON)  # JSON column to store an array of history
    sex = db.Column(db.String(10), nullable=False)
    diet = db.Column(db.String(100), nullable=False)

class Diary(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey('pets.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    date = db.Column(db.Date, nullable=False)
    diagnosis = db.Column(db.JSON)  # JSON column to store an array of diagnosis
    field = db.Column(db.String(100))

class Symptoms(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question_id = db.Column(db.Integer, db.ForeignKey('questions.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
