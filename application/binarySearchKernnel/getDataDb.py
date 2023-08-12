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
 


# Create an engine and bind it to a session
engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)
session = Session()

#GETTING THE PET BY ID
# pet = session.query(Pets).filter_by(id=1).all()
# selected_pet = None

# for p in pet:
#     var_dict = p.as_dict()
#     selected_pet = var_dict

#GETTING ALL VARIABLES THAT TYPE IS FALSE AND SEPARATE THE QUESTIONS
false_default_variables = session.query(Variables).filter_by(defaultQuestion='false').all()
all_false_default_variables= []
variables_questions = []

for var in false_default_variables:
    var_dict = var.as_dict()    
    #print(var_dict['feature'])
    all_false_default_variables.append(var_dict)
    variables_questions.append(var_dict['question'])

print(variables_questions, "<<<<<<<<<<<<")

# #GETTING ALL VARIABLES THAT TYPE IS TRUE 
# # true_default_variables = session.query(Variables).filter_by(index=2 ).all()
# # true_default_variables = session.query(Variables)
# # true_default_variables = session.query(text('Variables'))


# # all_true_default_variables= []

# # for var in true_default_variables:
# #     var_dict = var.as_dict()    
# #     all_true_default_variables.append(var_dict)    

# # print(all_true_default_variables)

# #GETTING ALL DISEASES


# # Execute the query
# # query_text = text('SELECT description FROM "public"."diseases"')
# # diseases = session.execute(query_text).fetchall()
# # print(session.query(Diseases))
# # input()
# diseases = session.query(Diseases).all()
# print(diseases)

# # for var in diseases:
# #     var_dict = var.as_dict()    
# #     all_diseases.append(var_dict)

# # answers = fun.answerDefaultAnamnese(selected_pet['dob'], selected_pet['sex'], selected_pet['diet'], selected_pet['neutered'], selected_pet['outdoor'], 'No')

