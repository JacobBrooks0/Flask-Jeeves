#Here we will build all out tables (DB). 
from application import db

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

#initialiase all the class values as the instance values
    def __init__(self, first_name, last_name, email, password, pets, dob, appointment_history):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.password = password
        self.pets = pets
        self.dob = dob
        self.appointment_history = appointment_history

class Appointments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    pet_id = db.Column(db.Integer, db.ForeignKey('pets.id'), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    # Relationship with Pet table
    pet = db.relationship('Pet', backref=db.backref('appointments', lazy=True))
    
    #initialiase all the class values as the instance values
    def __init__(self, date, pet_id, description):
        self.date = date
        self.pet_id = pet_id
        self.description = description 
                 

class Pets(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
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

class Questions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(200), nullable=False)

class Specialtys(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)

class Answers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question_id = db.Column(db.Integer, db.ForeignKey('questions.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    answer = db.Column(db.Integer, nullable=False)

class Symptoms(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question_id = db.Column(db.Integer, db.ForeignKey('questions.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)

class Diseases(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    symptom_id = db.Column(db.Integer, db.ForeignKey('symptoms.id'), nullable=False)
    specialty_id = db.Column(db.Integer, db.ForeignKey('specialty.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)

#####chatgpt, have to test that
question_specialty_association = db.Table('question_specialty_association',
    db.Column('question_id', db.Integer, db.ForeignKey('question.id'), primary_key=True),
    db.Column('specialty_id', db.Integer, db.ForeignKey('specialty.id'), primary_key=True)
)