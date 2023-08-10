# Import necessary modules
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from __init__ import *
from models import Variables

# Replace with your PostgreSQL database URL
DATABASE_URL = "postgresql://uazibwdf:XdbukCnOj7-f6C53_EURIyCEMXDEssdE@horton.db.elephantsql.com/uazibwdf"

# Create an engine and bind it to a session
engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)
session = Session()

# Create tables if they don't exist
app=create_app()


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
                {'name':'Polydipsia' , 'type':'symptom', 'question':'Is your cat drinking more water than usual?', 'specialty':['Musculoskeletal'], 'defaultQuestion': False},
                {'name':'Limping' , 'type':'symptom', 'question':'Is your cat limping?', 'specialty':['Urinary', 'Musculoskeletal'], 'defaultQuestion': False},
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
                {'name':'Presence of fleas' , 'type':'animalAtribute', 'question':'Have you even seen fleas on your cat?', 'specialty':[], 'defaultQuestion': False},
                {'name':'Overweight' , 'type':'animalAtribute', 'question':'Does your cat seem to be overwheight?', 'specialty':[], 'defaultQuestion': False},
                {'name':'Age', 'type':'animalAtribute', 'question':'How old are your cat?', 'specialty':[], 'defaultQuestion': True},
                {'name':'Vaccination updated' , 'type':'animalAtribute', 'question':'Is the vaccination of your cat updated?', 'specialty':[], 'defaultQuestion': False},
                {'name':'Male' , 'type':'animalAtribute', 'question':'Is your cat male?', 'specialty':[], 'defaultQuestion': True},
                {'name':'Indoor' , 'type':'animalAtribute', 'question':'Does your cat goes outside?', 'specialty':[], 'defaultQuestion': True},
                {'name':'Contact with other pets' , 'type':'animalAtribute', 'question':'Does your cat have contact with other pets?', 'specialty':[], 'defaultQuestion': True},
                {'name':'Neutered' , 'type':'animalAtribute', 'question':'Is your cat neutered?', 'specialty':[], 'defaultQuestion': True},
                {'name':'Start of the symptoms', 'type':'symptomatribute', 'question':'When was the first time that the symptoms started?', 'specialty':[], 'defaultQuestion': False},
                {'name':'Processed Diet' , 'type':'animalAtribute', 'question':'Does your cat eat processed food?', 'specialty':[], 'defaultQuestion': True},
              ]

# Insert data into the database
for item in variables_to_insert:
    new_variable = Variables(
        specialty=item['specialty'],
        feature=item['name'],
        question=item['question'],
        defaultQuestion=item['defaultQuestion']
    )
    session.add(new_variable)

# Commit the changes
session.commit()

# Close the session
session.close()
