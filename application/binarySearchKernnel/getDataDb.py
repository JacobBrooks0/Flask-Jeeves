# Import necessary modules
from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import sessionmaker
import sys
sys.path.append('../../')
from application import *
from application.models import Variables, Diseases, Pets
import functions as fun
from diseaseSearch import GenerateQuestion, GetAnswer

# Replace with your PostgreSQL database URL
DATABASE_URL = "postgresql://uazibwdf:XdbukCnOj7-f6C53_EURIyCEMXDEssdE@horton.db.elephantsql.com/uazibwdf"

# Create an engine and bind it to a session
engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)
session = Session()

#GETTING ALL VARIABLES THAT TYPE IS FALSE AND SEPARATE THE QUESTIONS
false_default_variables = session.query(Variables).filter_by(defaultQuestion=False).all()
all_false_default_variables= []
variables_questions = []

for var in false_default_variables:
    var_dict = var.as_dict()    
    #print(var_dict['feature'])
    all_false_default_variables.append(var_dict)
    variables_questions.append(var_dict['question'])

#GETTING ALL VARIABLES THAT TYPE IS TRUE 
true_default_variables = session.query(Variables).filter_by(defaultQuestion=True).all()
all_true_default_variables= []

for var in true_default_variables:
    var_dict = var.as_dict()    
    all_true_default_variables.append(var_dict)    

#GETTING ALL DISEASES
diseases = session.query(Diseases).all()
all_diseases = []

for var in diseases:
    var_dict = var.as_dict()    
    all_diseases.append(var_dict)

#GETTING THE PET BY ID
pet = session.query(Pets).filter_by(id=1).all()
selected_pet = None

for p in pet:
    var_dict = p.as_dict()
    selected_pet = var_dict

print(selected_pet['dob'], "<<<<<<<<<")
# answers = fun.answerDefaultAnamnese(selected_pet['dob'], selected_pet['sex'], selected_pet['diet'], selected_pet['neutered'], selected_pet['outdoor'], 'No')

