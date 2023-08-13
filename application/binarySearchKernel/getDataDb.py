import os
import sys
from pathlib import Path
full_path = os.path.dirname(os.path.abspath(__file__))
sys.path.append(str(Path(full_path).parents[1]))

# Import necessary modules
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from application import *
from datetime import date
from application.models import *
from bayes_lib import CalculateAnswer
import numpy as np


# Create an engine and bind it to a session
engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)
session = Session()

def getAllDiseaseRulesForProbabilityFunction():
    diseaseRulesQuery = session.query(UsersAnswersCount).all()
    lenDiseaseVariables = len(session.query(Variables).all())
    lenDiseases = len(session.query(Diseases).all())
    rulesMatrix = np.zeros((lenDiseases + 1, lenDiseaseVariables + 1))

    for rule in diseaseRulesQuery:
        rule_dict = rule.as_dict_for_probability_function()
        rulesMatrix[rule_dict['disease_id']][rule_dict['diseasesVariables_id']] = CalculateAnswer(rule_dict['rules'])

    return rulesMatrix  
    
getAllDiseaseRulesForProbabilityFunction()


# #GETTING ALL VARIABLES THAT TYPE IS FALSE AND SEPARATE THE QUESTIONS
# def falseDefaultVariables():    
#     false_default_variables = session.query(Variables).filter_by(defaultQuestion='false').all()
#     all_false_default_variables= []
#     variables_questions = []

#     for var in false_default_variables:
#         var_dict = var.as_dict() 
#         all_false_default_variables.append(var_dict)
#         variables_questions.append(var_dict['question'])

# #GETTING ALL VARIABLES THAT TYPE IS TRUE 
# true_default_variables = session.query(Variables).filter_by(defaultQuestion = 'true').all()
# all_true_default_variables= []
# for var in true_default_variables:
#     var_dict = var.as_dict()    
#     all_true_default_variables.append(var_dict)    



# #GETTING ALL DISEASES
# diseases = session.query(Diseases).all()
# for var in diseases:
#     var_dict = var.as_dict()    
#     all_diseases.append(var_dict)

# answers = fun.answerDefaultAnamnese(selected_pet['dob'], selected_pet['sex'], selected_pet['diet'], selected_pet['neutered'], selected_pet['outdoor'], 'No')


# #GETTING THE PET BY ID
# pet = session.query(Pets).filter_by(id=1).all()
# selected_pet = None

# for p in pet:
#     var_dict = p.as_dict()
#     selected_pet = var_dict
