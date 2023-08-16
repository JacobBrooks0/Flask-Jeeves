# Here we will build all out tables (DB).
from sqlalchemy import ARRAY
from application import db
from flask_login import UserMixin


class Users(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

    # initialiase all the class values as the instance values
    def __init__(self, first_name, last_name, email, password):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.password = password

    def __repr__(self):
        return "<Users %r>" % self.username


class Appointments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(100), nullable=False)
    user_id = db.Column(db.Integer, nullable=False)
    time = db.Column(db.String(100), nullable=False)
    meeting_id = db.Column(db.String(100), nullable=False)

    # initialiase all the class values as the instance values
    def __init__(self, date, user_id, time, meeting_id):
        self.date = date
        self.user_id = user_id
        self.time = time
        self.meeting_id = meeting_id


class Pets(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    dob = db.Column(db.Date, nullable=False)
    breed = db.Column(db.String(100), nullable=False)
    outdoor = db.Column(db.Boolean, nullable=False)
    neutered = db.Column(db.Boolean, nullable=False)
    # history_id = db.Column(db.Integer, db.ForeignKey('diary.id'), nullable=False)  # JSON column to store an array of history
    sex = db.Column(db.String(10), nullable=False)
    diet = db.Column(db.String(100), nullable=False)
    contactWithOtherPets = db.Column(db.Boolean, nullable=False)
    user = db.relationship(
        "Users", backref=db.backref("users", lazy=True, cascade="all,delete-orphan")
    )

    def __init__(
        self,
        user_id,
        name,
        dob,
        breed,
        outdoor,
        neutered,
        sex,
        diet,
        contactWithOtherPets,
    ):
        self.user_id = user_id
        self.name = name
        self.dob = dob
        self.breed = breed
        self.outdoor = outdoor
        self.neutered = neutered
        # self.history_id = history_id
        self.sex = sex
        self.diet = diet
        self.contactWithOtherPets = contactWithOtherPets

    def as_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "user_id": self.user_id,
            "dob": self.dob,
            "neutered": self.neutered,
            "sex": self.sex,
            "diet": self.diet,
            "outdoor": self.outdoor,
            "contactWithOtherPets": self.contactWithOtherPets,
        }

    def __repr__(self):
        return f"<Pets(id={self.id}, name={self.name} user_id={self.user_id}, dob={self.dob}, neutered={self.neutered}, sex={self.sex}, diet={self.diet}, outdoor={self.outdoor}, contactWithOtherPets = {self.contactWithOtherPets})>"


class Diary(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, index=True)
    pet_id = db.Column(db.Integer, db.ForeignKey("pets.id"), nullable=False)
    # name = db.Column(db.String(100), nullable=False)
    date = db.Column(db.Date, nullable=True)
    questions = db.Column(ARRAY(db.String(500)), nullable=False)
    answers = db.Column(ARRAY(db.String(100)), nullable=False)
    possiblesDiagnosis = db.Column(ARRAY(db.String(500)), nullable=False)
    # field = db.Column(db.String(100))
    pets = db.relationship(
        "Pets", backref=db.backref("diary", lazy=True, cascade="all,delete-orphan")
    )

    def __init__(self, pet_id, date, questions, answers, possiblesDiagnosis):
        self.pet_id = pet_id
        # self.name = name
        self.date = date
        self.questions = questions
        self.answers = answers
        self.possiblesDiagnosis = possiblesDiagnosis
        # self.field = field

    def as_dict(self):
        return {
            "id": self.id,
            "date": self.date,
            "questions": self.questions,
            "answers": self.answers,
            "possiblesDiagnosis": self.possiblesDiagnosis,
        }


class Diseases(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    specialty = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=False)

    def __init__(self, specialty, name, description):
        self.specialty = specialty
        self.name = name
        self.description = description

    def as_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "specialty": self.specialty,
            "description": self.description,
        }

    def __repr__(self):
        return f"<Diseases(id={self.id}, specialty={self.specialty}, name={self.name}, description={self.description})>"


class Variables(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    specialty = db.Column(db.String(100))
    feature = db.Column(db.String(100), nullable=False)
    question = db.Column(db.String(200), nullable=False)
    defaultQuestion = db.Column(db.Boolean, nullable=False)

    def __init__(self, feature, specialty, question, defaultQuestion):
        self.feature = feature
        self.specialty = specialty
        self.question = question
        self.defaultQuestion = defaultQuestion

    def as_dict(self):
        return {
            "id": self.id,
            "feature": self.feature,
            "question": self.question,
            "specialty": self.specialty,
            "defaultQuestion": self.defaultQuestion,
        }

    def __repr__(self):
        return f"<Variables(id={self.id}, specialty={self.specialty}, feature={self.feature}, question={self.question}, defaultQuestion={self.defaultQuestion})>"


class UsersAnswersCount(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    disease_id = db.Column(db.Integer, db.ForeignKey("diseases.id"), nullable=False)
    diseasesVariables_id = db.Column(
        db.Integer, db.ForeignKey("variables.id"), nullable=False
    )
    no = db.Column(db.Integer)
    probablyNot = db.Column(db.Integer)
    iDontKnow = db.Column(db.Integer)
    probablyYes = db.Column(db.Integer)
    yes = db.Column(db.Integer)

    def __init__(
        self,
        disease_id,
        diseasesVariables_id,
        no,
        probablyNot,
        iDontKnow,
        probablyYes,
        yes,
    ):
        self.disease_id = disease_id
        self.diseasesVariables_id = diseasesVariables_id
        self.no = no
        self.probablyNot = probablyNot
        self.iDontKnow = iDontKnow
        self.probablyYes = probablyYes
        self.yes = yes

    def as_dict_for_probability_function(self):
        return {
            "disease_id": self.disease_id,
            "diseasesVariables_id": self.diseasesVariables_id,
            "rules": [
                self.no,
                self.probablyNot,
                self.iDontKnow,
                self.probablyYes,
                self.yes,
            ],
        }

    def __repr__(self):
        return f"<UsersAnswersCount(id={self.id}, disease_id={self.disease_id}, diseasesVariables_id={self.diseasesVariables_id}, no={self.no}, probablyNot={self.probablyNot}, iDontKnow={self.iDontKnow}, probablyYes={self.probablyYes}, yes={self.yes})>"
