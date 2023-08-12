# Import necessary modules
from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import sessionmaker
import sys
sys.path.append('../../')
from application import *
from application.models import Variables, Diseases, Pets, User, UsersAnswersCount
from datetime import date
import pandas as pd

# Replace with your PostgreSQL database URL
DATABASE_URL = "postgresql://uazibwdf:XdbukCnOj7-f6C53_EURIyCEMXDEssdE@horton.db.elephantsql.com/uazibwdf"

# Create an engine and bind it to a session
engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)
session = Session()

# Create tables if they don't exist
app=create_app()

# df = pd.read_csv('DiseaseRules.csv')

# # Rename the index column to 'id' and reset the index to start from 1
# df.rename_axis('id', inplace=True)
# df.reset_index(drop=True, inplace=True)
# df.index += 1  # Shift the index by 1 to start from 1
# df.to_sql('UsersAnswersCount', con=engine, if_exists='replace', index=True)


# session.commit()

# # Close the session
# session.close()

# print("Tables before dropping:", db.metadata.tables.keys())
# db.session.rollback()
# db.drop_all()
# print("Tables after dropping:", db.metadata.tables.keys())
# db.drop_all()
# session.query(Pets).delete()
# session.query(User).delete()
# session.query(Variables).delete()
# session.query(Diseases).delete()
# session.commit()
# db.create_all()

# Data to insert
variables_to_insert = [
                {'name':'Frequent Urination' , 'type':'symptom', 'question': 'Is your cat going to the litter more than usual?', 'specialty':['Urinary'], 'defaultQuestion': False},
                {'name':'Blood in Urine' , 'type':'symptom', 'question':'Does the urine has blood?', 'specialty':['Urinary'], 'defaultQuestion': False},
                {'name':'Painful Urination' , 'type':'symptom', 'question':'Does it seem it is having pain to urinate?', 'specialty':['Urinary'], 'defaultQuestion': False},
                {'name':'Licking Genital Area' , 'type':'symptom', 'question':'Is your cat licking the genital area more than usual?', 'specialty':['Urinary', 'Gastrointestinal'], 'defaultQuestion': False},
                {'name':'Lethargy and Weakness' , 'type':'symptom', 'question':'Is you cat more lethargic or week?', 'specialty':['Urinary'], 'defaultQuestion': False},
                {'name':'Straining to Urinate' , 'type':'symptom', 'question':'Does it seem that your cat is having difficulty urinating?', 'specialty':['Urinary', 'Gastrointestinal'], 'defaultQuestion': False},
                {'name':'Abdominal Pain' , 'type':'symptom', 'question':'Does it seem that your cat has abdominal pain?', 'specialty':['Urinary', 'Gastrointestinal'], 'defaultQuestion': False},
                {'name':'Vomiting and Nausea' , 'type':'symptom', 'question':'Is your cat vomiting or nauseous?', 'specialty':['Urinary', 'Gastrointestinal'], 'defaultQuestion': False},
                {'name':'Polydipsia' , 'type':'symptom', 'question':'Is your cat drinking more water than usual?', 'specialty':['Urinary'], 'defaultQuestion': False},
                {'name':'Limping' , 'type':'symptom', 'question':'Is your cat limping?', 'specialty':['Musculoskeletal'], 'defaultQuestion': False},
                {'name':'Swelling members' , 'type':'symptom', 'question':'Does your cat have swelling members?', 'specialty':['Urinary, Muskuloskeletal'], 'defaultQuestion': False},
                {'name':'Fever' , 'type':'symptom','question':'Does your cat seem to have a higher temperature than usual?', 'specialty':['Urinary' ,'Gastrointestinal'], 'defaultQuestion': False},
                {'name':'Loss Appetite' , 'type':'symptom', 'question':'Is your cat eating less than usual?', 'specialty':['Urinary' ,'Gastrointestinal'], 'defaultQuestion': False},
                {'name':'Weight loss' , 'type':'symptom', 'question':'Is your cat losing weight?', 'specialty':['Urinary','Gastrointestinal'], 'defaultQuestion': False},
                {'name':'PotBellied Appearance' , 'type':'symptom', 'question':'Does the belly of your cat seem to be dillated?', 'specialty':['Gastrointestinal'], 'defaultQuestion': False},
                {'name':'Diarrhea' , 'type':'symptom','question':'Are your cat\'s stools softer?', 'specialty':['Gastrointestinal'], 'defaultQuestion': False},
                {'name':'Constipation' , 'type':'symptom', 'question':'Does your cat seem to be constipated? (Trying to poop but nothing comes out)', 'specialty':['Gastrointestinal'], 'defaultQuestion': False},
                {'name':'Visible Worms' , 'type':'symptom', 'question':'Does your cat\'s stools have visible worms?' , 'specialty':['Gastrointestinal', 'Dermatology'], 'defaultQuestion': False},
                {'name':'Anal Itching or Scooting' , 'type':'symptom', 'question':'Is your cat having anal itching or scooting?', 'specialty':['Dermatology', 'Gastrointestinal'], 'defaultQuestion': False},
                {'name':'Intense itching and scratching' , 'type':'symptom', 'question':'Is your cat having intense itching and scratching?', 'specialty':['Dermatology'], 'defaultQuestion': False},
                {'name':'Hair loss or thinning of fur' , 'type':'symptom', 'question': 'Is your cat having hair loss or thinning fur?', 'specialty':['Dermatology'], 'defaultQuestion': False},
                {'name':'Formation of small raised bumps or pustules', 'type':'symptom', 'question':'Does you cat have wounds or pimples on its skin?', 'specialty':['Dermatology'], 'defaultQuestion': False},
                {'name':'Irritated or weepy eyes' , 'type':'symptom', 'question': 'Does you cat have irritaded or weepy eyes', 'specialty':['Dermatology', 'Gastrointestinal'], 'defaultQuestion': False},
                {'name':'Restlessness and Agitation' , 'type':'symptom', 'question':'Does you cat seem to be restlessness and agitated?', 'specialty':['Dermatology', 'Urinary'], 'defaultQuestion': False},
                {'name':'Over-Grooming' , 'type':'symptom', 'question':'Is you cat licking itself more than usual?', 'specialty':['Dermatology', 'Gastrointestinal'], 'defaultQuestion': False},
                {'name':'Ear Infection' , 'type':'symptom', 'question':'Does you cat\'s year seem to be infected?', 'specialty':['Dermatology'], 'defaultQuestion': False},
                {'name':'Presence of fleas' , 'type':'animalAtribute', 'question':'Have you even seen fleas on your cat?', 'specialty':['general'], 'defaultQuestion': False},
                {'name':'Overweight' , 'type':'animalAtribute', 'question':'Does your cat seem to be overwheight?', 'specialty':['general'], 'defaultQuestion': False},
                {'name':'Age', 'type':'animalAtribute', 'question':'How old are your cat?', 'specialty':['general'], 'defaultQuestion': True},
                {'name':'Vaccination updated' , 'type':'animalAtribute', 'question':'Is the vaccination of your cat updated?', 'specialty':['general'], 'defaultQuestion': False},
                {'name':'Male' , 'type':'animalAtribute', 'question':'Is your cat male?', 'specialty':['general'], 'defaultQuestion': True},
                {'name':'Indoor' , 'type':'animalAtribute', 'question':'Does your cat goes outside?', 'specialty':['general'], 'defaultQuestion': True},
                {'name':'Contact with other pets' , 'type':'animalAtribute', 'question':'Does your cat have contact with other pets?', 'specialty':['general'], 'defaultQuestion': True},
                {'name':'Neutered' , 'type':'animalAtribute', 'question':'Is your cat neutered?', 'specialty':['general'], 'defaultQuestion': True},
                {'name':'Start of the symptoms', 'type':'symptomAtribute', 'question':'When was the first time that the symptoms started?', 'specialty':['general'], 'defaultQuestion': False},
                {'name':'Processed Diet' , 'type':'animalAtribute', 'question':'Does your cat eat processed food?', 'specialty':['general'], 'defaultQuestion': True},
              ]

file = open("DiseaseVariables.csv", 'w')
for variables in variables_to_insert:
    string = ""
    for key, value in variables.items():        
        if key == 'specialty':
            for i in range(len(value)):                
                if i == len(value) - 1:
                    string += str(value[i]) + ","
                else:
                    string += str(value[i]) + ";"
        else:
            string += str(value) + ","

    final_string = string[:-1]
    final_string += '\n'
    file.write(string)
        
            
        # string = str(DicDis[disease]) + "," + str(DicSym[symptom]) + "," + str(values[0]) + "," + str(values[1]) + "," + str(values[2]) + "," + str(values[3]) + "," + str(values[4]) + "\n"        
        # file.write(string)

# file.close()

# for disease, symptoms in DiseaseRules.items():
#     for symptom, values in symptoms.items():
            
#         string = str(DicDis[disease]) + "," + str(DicSym[symptom]) + "," + str(values[0]) + "," + str(values[1]) + "," + str(values[2]) + "," + str(values[3]) + "," + str(values[4]) + "\n"        
#  
diseases_to_insert = [
                {'name': 'Urethal Obstruction', 'specialty': 'Urinary', 'description': 'A blockage in the urethra that can cause difficulty urinating and other urinary issues.'},
                {'name': 'Feline Lower Urinary Tract Disease', 'specialty': 'Urinary', 'description': 'A group of conditions affecting the lower urinary tract, often causing discomfort and frequent urination.'},
                {'name': 'Renal Disease', 'specialty': 'Urinary', 'description': 'Chronic kidney disease that impairs the kidney function and can lead to various symptoms and complications.'},
                {'name': 'Luxation', 'specialty': 'Musculoskeletal', 'description': 'Dislocation or displacement of a joint, causing pain and mobility issues.'},
                {'name': 'Panleukopenia', 'specialty': 'Gastrointestinal', 'description': 'A highly contagious viral disease that affects the gastrointestinal tract and immune system.'},
                {'name': 'Intestinal Parasites', 'specialty': 'Gastrointestinal', 'description': 'Infections caused by various parasites that affect the gastrointestinal system.'},
                {'name': 'Hairball Obstruction', 'specialty': 'Gastrointestinal', 'description': 'Accumulation of hair in the stomach or intestines, causing blockages and discomfort.'},
                {'name': 'Scabies', 'specialty': 'Dermatology', 'description': 'A skin infestation caused by mites, leading to intense itching and skin irritation.'},
                {'name': 'Flea Allergy', 'specialty': 'Dermatology', 'description': 'An allergic reaction to flea bites, causing skin inflammation and discomfort.'},
                {'name': 'Atopic Dermatitis', 'specialty': 'Dermatology', 'description': 'Chronic skin inflammation and itching caused by allergic reactions to environmental factors.'}
            ]

users_to_insert = [

    {'first_name':'John', 'last_name':'Doe', 'email':'john@example.com', 'password':'hashed_password_1', 'pets': '????', 'dob': date(1990, 5, 15), 'appointment_history' : '????'},
    {'first_name':'Jane', 'last_name':'Smith', 'email':'jane@example.com', 'password':'hashed_password_2', 'pets': '????', 'dob': date(1990, 5, 15), 'appointment_history' : '????'},
    {'first_name':'Alice','last_name':'Johnson', 'email':'alice@example.com', 'password':'hashed_password_3', 'pets': '????', 'dob': date(1990, 5, 15), 'appointment_history' : '????'}
]

pets_to_insert = [
    {'user_id':21, 'name':'Buddy', 'dob':date(2019, 5, 15), 'breed':'Labrador', 'outdoor':True, 'neutered':True, 'sex':'Male', 'diet':'Processed'},
    {'user_id':22, 'name':'Luna', 'dob':date(2020, 2, 10), 'breed':'Siamese', 'outdoor':False, 'neutered':False, 'sex':'Female', 'diet':'Mixed'},
    {'user_id':20, 'name':'Max', 'dob':date(2018, 9, 3), 'breed':'Golden Retriever', 'outdoor':True, 'neutered':False, 'sex':'Male', 'diet':'Natural'}
    ]

# for user in users_to_insert:
#     new_user = User(
#         first_name=user['first_name'],
#         last_name=user['last_name'],        
#         email=user['email'],
#         password=user['password']     

#     )
#     session.add(new_user)

# for pet in pets_to_insert:
#     new_pet = Pets(
#         name=pet['name'],
#         user_id=pet['user_id'],        
#         dob=pet['dob'],
#         breed=pet['breed'],
#         outdoor=pet['outdoor'],
#         neutered=pet['neutered'],
#         sex=pet['sex'],
#         diet=pet['diet'],
#     )
#     session.add(new_pet)    

# #Insert data into the database
# for item in variables_to_insert:
#     new_variable = Variables(
#         specialty=item['specialty'],
#         feature=item['name'],
#         question=item['question'],
#         defaultQuestion=item['defaultQuestion']
#     )
#     session.add(new_variable)

# for disease in diseases_to_insert:   
#     new_disease = Diseases(
#         name = disease['name'],
#         specialty = disease['specialty'], 
#         description = disease['description']
#     )
#     session.add(new_disease)

# Commit the changes

