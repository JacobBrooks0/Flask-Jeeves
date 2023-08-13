import os
import sys
from pathlib import Path
full_path = os.path.dirname(os.path.abspath(__file__))
sys.path.append(str(Path(full_path).parents[2]))

# Import necessary modules
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from application import *
from datetime import date
import pandas as pd
 
# Create an engine and bind it to a session
engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)
session = Session()

# # Create tables if they don't exist
# app=create_app()

# table_name = 'diseases, variables, UsersAnswersCount'
# drop_table_sql = text(f"DROP TABLE IF EXISTS {table_name}")
# with engine.connect() as connection:
#     try:
#         connection.execute(drop_table_sql)
#         connection.commit()
#     except Exception as e:
#         print(f"An error occurred: {e}")

dfDiseaseRules = pd.read_csv('DiseaseRules.csv')
# Rename the index column to 'id' and reset the index to start from 1
dfDiseaseRules.rename_axis('id', inplace=True)
dfDiseaseRules.reset_index(drop=True, inplace=True)
dfDiseaseRules.index += 1  # Shift the index by 1 to start from 1
dfDiseaseRules.to_sql('users_answers_count', con=engine, if_exists='replace', index=False)

dfDiseasesVariables = pd.read_csv('DiseasesVariables.csv')
# Rename the index column to 'id' and reset the index to start from 1
dfDiseasesVariables.rename_axis('id', inplace=True)
dfDiseasesVariables.reset_index(drop=True, inplace=True)
dfDiseasesVariables.index += 1  # Shift the index by 1 to start from 1
dfDiseasesVariables.to_sql('variables', con=engine, if_exists='replace', index=False)

dfDiseases = pd.read_csv('Diseases.csv')
dfDiseases.rename_axis('id', inplace=True)
dfDiseases.reset_index(drop=True, inplace=True)
dfDiseases.index += 1  # Shift the index by 1 to start from 1
dfDiseases.to_sql('diseases', con=engine, if_exists='replace', index=False)

dfPets = pd.read_csv('Pets.csv')
dfPets.rename_axis('id', inplace=True)
dfPets.reset_index(drop=True, inplace=True)
dfPets.index += 1  # Shift the index by 1 to start from 1
dfPets.to_sql('pets', con=engine, if_exists='replace', index=False)

dfUsers = pd.read_csv('Users.csv')
dfUsers.rename_axis('id', inplace=True)
dfUsers.reset_index(drop=True, inplace=True)
dfUsers.index += 1  # Shift the index by 1 to start from 1
dfUsers.to_sql('users', con=engine, if_exists='replace', index=False)

# Commit the changes
session.commit()

# Close the session
session.close()



# # for user in users_to_insert:
# #     new_user = User(
# #         first_name=user['first_name'],
# #         last_name=user['last_name'],        
# #         email=user['email'],
# #         password=user['password']     

# #     )
# #     session.add(new_user)

# # for pet in pets_to_insert:
# #     new_pet = Pets(
# #         name=pet['name'],
# #         user_id=pet['user_id'],        
# #         dob=pet['dob'],
# #         breed=pet['breed'],
# #         outdoor=pet['outdoor'],
# #         neutered=pet['neutered'],
# #         sex=pet['sex'],
# #         diet=pet['diet'],
# #     )
# #     session.add(new_pet)    

# # #Insert data into the database
# # for item in variables_to_insert:
# #     new_variable = Variables(
# #         specialty=item['specialty'],
# #         feature=item['name'],
# #         question=item['question'],
# #         defaultQuestion=item['defaultQuestion']
# #     )
# #     session.add(new_variable)

# # for disease in diseases_to_insert:   
# #     new_disease = Diseases(
# #         name = disease['name'],
# #         specialty = disease['specialty'], 
# #         description = disease['description']
# #     )
# #     session.add(new_disease)
