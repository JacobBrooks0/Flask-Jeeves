import os
import sys
from pathlib import Path

full_path = os.path.dirname(os.path.abspath(__file__))
sys.path.append(str(Path(full_path).parents[1]))

# Import necessary modules
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from application import *
from datetime import *
from application.models import Variables, Diseases, UsersAnswersCount, Pets
from BayesLib import CalculateAnswer
import numpy as np

# Create an engine and bind it to a session
engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)
session = Session()


# GETTING ALL DISEASE VARIABLES' IDS
def getAllDiseaseVariablesIds():
    diseaseVariablesQuery = session.query(Variables).all()
    allDiseaseVariablesIds = []

    for diseaseVariable in diseaseVariablesQuery:
        diseaseVariable_dict = diseaseVariable.as_dict()
        allDiseaseVariablesIds.append(diseaseVariable_dict["id"])

    return allDiseaseVariablesIds


# GETTING ALL DISEASES' IDS
def getAllDiseasesIds():
    diseasesQuery = session.query(Diseases).all()
    allDiseasesIds = []

    for disease in diseasesQuery:
        disease_dict = disease.as_dict()
        allDiseasesIds.append(disease_dict["id"])

    return allDiseasesIds


# GETTING ALL VARIABLES' IDS THAT TYPE IS TRUE
def getAllTrueDefaultVariablesIds():
    true_default_variables = (
        session.query(Variables).filter_by(defaultQuestion=True).all()
    )
    all_true_default_variables = []

    for var in true_default_variables:
        var_dict = var.as_dict()
        all_true_default_variables.append(var_dict["id"])

    return all_true_default_variables


def getAllFalseDefaultVariablesIds():
    false_default_variables = (
        session.query(Variables).filter_by(defaultQuestion=False).all()
    )
    all_false_default_variables = []

    for var in false_default_variables:
        var_dict = var.as_dict()
        all_false_default_variables.append(
            {"id": var_dict["id"], "question": var_dict["question"]}
        )

    return all_false_default_variables


def getAllDiseaseRules():
    diseaseRulesQuery = session.query(UsersAnswersCount).all()
    lenDiseaseVariables = len(session.query(Variables).all())
    lenDiseases = len(session.query(Diseases).all())
    rulesMatrix = np.zeros((lenDiseases + 1, lenDiseaseVariables + 1))

    for rule in diseaseRulesQuery:
        rule_dict = rule.as_dict_for_probability_function()
        rulesMatrix[rule_dict["disease_id"]][
            rule_dict["diseasesVariables_id"]
        ] = CalculateAnswer(rule_dict["rules"])

    return rulesMatrix


# GET THE ARRAY OF ANSWERS OF THE DEFAULT QUESTIONS, RECEIVES THE OBJ FROM PET DETAILS
def answerDefaultAnamnese(obj):
    current_date = datetime.now().date()
    age = datetime.strptime(str(obj["dob"]), "%Y-%m-%d")
    age_in_years = ((current_date - datetime.date(age)).days) / 360
    sex = obj["sex"]
    diet = obj["diet"]
    outdoor = obj["outdoor"]
    contactWithOtherPets = obj["contactWithOtherPets"]
    neutered = obj["neutered"]
    answers = []

    if age_in_years < 1:
        answers.append(0.00)
    elif age_in_years >= 1 and age_in_years < 2:
        answers.append(0.25)
    elif age_in_years >= 2 and age_in_years < 5:
        answers.append(0.50)
    elif age_in_years >= 5 and age_in_years < 7:
        answers.append(0.75)
    else:
        answers.append(1.00)

    if sex == "Male":
        answers.append(1.00)
    else:
        answers.append(0.00)

    if outdoor == False:
        answers.append(0.00)
    else:
        answers.append(1.00)

    if contactWithOtherPets == True:
        answers.append(1.00)
    else:
        answers.append(0.00)

    if neutered == True:
        answers.append(1.00)
    else:
        answers.append(0.00)

    if diet == "Processed":
        answers.append(1.00)
    elif diet == "Mixed":
        answers.append(0.50)
    elif diet == "natural":
        answers.append(0.00)

    return answers


# GET THE PET DETAILS BY ID
def getPetDetailsbyId(id):
    pet = session.query(Pets).filter_by(id=id).all()
    selected_pet = None

    for p in pet:
        var_dict = p.as_dict()
        selected_pet = var_dict

    return selected_pet


def answerRandomAnamnese(answers):
    answersConverted = []
    for answer in answers:
        if answer == 1:
            answersConverted.append(0.0)
        elif answer == 2:
            answersConverted.append(0.25)
        elif answer == 3:
            answersConverted.append(0.5)
        elif answer == 4:
            answersConverted.append(0.75)
        elif answer == 5:
            answersConverted.append(1.0)
        else:
            raise TypeError("Numbers must be from 1 to 5")

    return answersConverted
