# Here we will build all out tables (DB).
from application import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    # JSON column to store an array of pets
    pets = db.Column(db.JSON, nullable=True)
    # Date of Birth (DOB)
    dob = db.Column(db.Date, nullable=True)
    # JSON column to store an array of appointment history
    appointment_history = db.Column(db.JSON, nullable=True)

    # initialiase all the class values as the instance values
    def __init__(
        self, first_name, last_name, email, password, pets, dob, appointment_history
    ):
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
    pet_id = db.Column(db.Integer, db.ForeignKey("pets.id"), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    # Relationship with Pet table
    pet = db.relationship("Pet", backref=db.backref("appointments", lazy=True))
    pets = db.relationship(
        "Pets",
        backref=db.backref("appointments", lazy=True, cascade="all,delete-orphan"),
    )

    # initialiase all the class values as the instance values
    def __init__(self, date, pet_id, description):
        self.date = date
        self.pet_id = pet_id
        self.description = description


class Pets(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    dob = db.Column(db.Date, nullable=False)
    breed = db.Column(db.String(100), nullable=False)
    outdoor = db.Column(db.Boolean, nullable=False)
    neutered = db.Column(db.Boolean, nullable=False)
    history_id = db.Column(
        db.Integer, db.ForeignKey("history.id"), nullable=False
    )  # JSON column to store an array of history
    sex = db.Column(db.String(10), nullable=False)
    diet = db.Column(db.String(100), nullable=False)
    user = db.relationship(
        "User", backref=db.backref("users", lazy=True, cascade="all,delete-orphan")
    )

    def __init__(
        self, user_id, name, dob, breed, outdoor, neutered, history_id, sex, diet
    ):
        self.user_id = user_id
        self.name = name
        self.dob = dob
        self.breed = breed
        self.outdoor = outdoor
        self.neutered = neutered
        self.history_id = history_id
        self.sex = sex
        self.diet = diet


class Diary(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey("pets.id"), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    date = db.Column(db.Date, nullable=False)
    diagnosis = db.Column(db.JSON)  # JSON column to store an array of diagnosis
    field = db.Column(db.String(100))
    pets = db.relationship(
        "Pets", backref=db.backref("diary", lazy=True, cascade="all,delete-orphan")
    )

    def __init__(self, pet_id, name, date, diagnosis, field):
        self.pet_id = pet_id
        self.name = name
        self.date = date
        self.diagnosis = diagnosis
        self.field = field


class Diseases(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    specialty = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=False)

    def __init__(self, specialty, name, description):
        self.specialty = specialty
        self.name = name
        self.description = description


class DiseasesVariables(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    specialty = db.Column(db.JSON)
    feature = db.Column(db.String(100), nullable=False)
    question = db.Column(db.String(200), nullable=False)
    defaultQuestion = db.Column(db.Boolean, nullable=False)

    def __init__(self, specialty, feature, question, defaultQuestion):
        self.specialty = specialty
        self.feature = feature
        self.question = question
        self.defaultQuestion = defaultQuestion


class UsersAnswersCount(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    disease_id = db.Column(db.Integer, db.ForeignKey("diseases.id"), nullable=False)
    diseasesVariables_id = db.Column(
        db.Integer, db.ForeignKey("diseasesVariables.id"), nullable=False
    )
    no = db.Column(db.Integer)
    probablyNot = db.Column(db.Integer)
    iDontKnow = db.Column(db.Integer)
    propablyYes = db.Column(db.Integer)
    yes = db.Column(db.Integer)

    def __init__(
        self,
        disease_id,
        diseasesVariables_id,
        no,
        probablyNot,
        iDontKnow,
        propablyYes,
        yes,
    ):
        self.disease_id = disease_id
        self.diseasesVariables_id = diseasesVariables_id
        self.no = no
        self.probablyNot = probablyNot
        self.iDontKnow = iDontKnow
        self.propablyYes = propablyYes
        self.yes = yes
