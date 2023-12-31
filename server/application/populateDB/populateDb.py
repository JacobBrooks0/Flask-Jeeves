import os
import sys
from pathlib import Path
full_path = os.path.dirname(os.path.abspath(__file__))
sys.path.append(str(Path(full_path).parents[1]))

# Import necessary modules
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from application import *
import pandas as pd

# Create an engine and bind it to a session
DATABASE_URL2="postgresql://xouhhvvt:AJHqkM7FSLypbnj6M_BUh4jsTtsdteD9@trumpet.db.elephantsql.com/xouhhvvt"
engine = create_engine(DATABASE_URL2)
Session = sessionmaker(bind=engine)
session = Session()

# dfDiary = pd.read_csv('Diary.csv')
# dfDiary.rename_axis('id', inplace=True)
# dfDiary.reset_index(drop=True, inplace=True)
# dfDiary.index += 1  # Shift the index by 1 to start from 1
# dfDiary.to_sql('diary', con=engine, if_exists='append', index=False)


dfDiseasesVariables = pd.read_csv('DiseasesVariables.csv')
# Rename the index column to 'id' and reset the index to start from 1
dfDiseasesVariables.rename_axis('id', inplace=True)
dfDiseasesVariables.reset_index(drop=True, inplace=True)
dfDiseasesVariables.index += 1  # Shift the index by 1 to start from 1
dfDiseasesVariables.to_sql('variables', con=engine, if_exists='append', index=False)
print(dfDiseasesVariables)

dfDiseases = pd.read_csv('Diseases.csv')
dfDiseases.rename_axis('id', inplace=True)
dfDiseases.reset_index(drop=True, inplace=True)
dfDiseases.index += 1  # Shift the index by 1 to start from 1
dfDiseases.to_sql('diseases', con=engine, if_exists='append', index=False)

dfDiseaseRules = pd.read_csv('DiseaseRules.csv')
# Rename the index column to 'id' and reset the index to start from 1
dfDiseaseRules.rename_axis('id', inplace=True)
dfDiseaseRules.reset_index(drop=True, inplace=True)
dfDiseaseRules.index += 1  # Shift the index by 1 to start from 1
dfDiseaseRules.to_sql('users_answers_count', con=engine, if_exists='append', index=False)

# dfUsers = pd.read_csv('Users.csv')
# dfUsers.rename_axis('id', inplace=True)
# dfUsers.reset_index(drop=True, inplace=True)
# dfUsers.index += 1  # Shift the index by 1 to start from 1
# dfUsers.to_sql('users', con=engine, if_exists='append', index=False)

# dfPets = pd.read_csv('Pets.csv')
# dfPets.rename_axis('id', inplace=True)
# dfPets.reset_index(drop=True, inplace=True)
# dfPets.index += 1  # Shift the index by 1 to start from 1
# dfPets.to_sql('pets', con=engine, if_exists='append', index=False)



# Commit the changes
session.commit()

# Close the session
session.close()
