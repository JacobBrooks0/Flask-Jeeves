
# AnswerValues = {
#     '1' : 0.00,
#     '2' : 0.25,
#     '3' : 0.50,
#     '4' : 0.75,
#     '5' : 1.00,
# }

# Allspecialty = ['Urinary']

# AllDiseases = [
#                {'name': 'Urethal Obstruction', 'specialty':'Urinary'},
#                {'name': 'Feline Lower Urinary Tract Disease', 'specialty':'Urinary'},
#                {'name': 'Renal Disease', 'specialty':'Urinary'},
#                {'name': 'Luxation', 'specialty':'Musculoskeletal'},
#                {'name': 'Panleukopenia', 'specialty':'Gastrointestinal'},
#                {'name': 'Intestinal Parasites', 'specialty':'Gastrointestinal'},
#                {'name': 'Hairball Obstruction', 'specialty':'Gastrointestinal'},
#                {'name': 'Scabies', 'specialty':'Dermatology'},
#                {'name': 'Flea Alergy', 'specialty':'Dermatology'},
#                {'name': 'Atopic Dermatitis', 'specialty':'Dermatology'},
#               ]

# AllVariables = [
#                 {'name':'Frequent Urination' , 'type':'symptom', 'question': 'Is your cat going to the litter more than usual?', 'specialty':['Urinary'], 'defaultQuestion': 'no'},
#                 {'name':'Blood in Urine' , 'type':'symptom', 'question':'Does the urine has blood?', 'specialty':['Urinary'], 'defaultQuestion': 'no'},
#                 {'name':'Painful Urination' , 'type':'symptom', 'question':'Does it seem it is having pain to urinate?', 'specialty':['Urinary'], 'defaultQuestion': 'no'},
#                 {'name':'Licking Genital Area' , 'type':'symptom', 'question':'Is your cat licking the genital area more than usual?', 'specialty':['Urinary', 'Gastrointestinal'], 'defaultQuestion': 'no'},
#                 {'name':'Lethargy and Weakness' , 'type':'symptom', 'question':'Is you cat more lethargic or week?', 'specialty':['Urinary'], 'defaultQuestion': 'no'},
#                 {'name':'Straining to Urinate' , 'type':'symptom', 'question':'Does it seem that your cat is having difficulty urinating?', 'specialty':['Urinary', 'Gastrointestinal'], 'defaultQuestion': 'no'},
#                 {'name':'Abdominal Pain' , 'type':'symptom', 'question':'Does it seem that your cat has abdominal pain?', 'specialty':['Urinary', 'Gastrointestinal'], 'defaultQuestion': 'no'},
#                 {'name':'Vomiting and Nausea' , 'type':'symptom', 'question':'Is your cat vomiting or nauseous?', 'specialty':['Urinary', 'Gastrointestinal'], 'defaultQuestion': 'no'},
#                 {'name':'Polydipsia' , 'type':'symptom', 'question':'Is your cat drinking more water than usual?', 'specialty':['Musculoskeletal'], 'defaultQuestion': 'no'},
#                 {'name':'Limping' , 'type':'symptom', 'question':'Is your cat limping?', 'specialty':['Urinary', 'Musculoskeletal'], 'defaultQuestion': 'no'},
#                 {'name':'Swelling members' , 'type':'symptom', 'question':'Does your cat have swelling members?', 'specialty':['Gastrointestinal'], 'defaultQuestion': 'no'},
#                 {'name':'Fever' , 'type':'symptom','question':'Does your cat seem to have a higher temperature than usual?', 'specialty':['Urinary' ,'Gastrointestinal'], 'defaultQuestion': 'no'},
#                 {'name':'Loss Appetite' , 'type':'symptom', 'question':'Is your cat eating less than usual?', 'specialty':['Urinary' ,'Gastrointestinal'], 'defaultQuestion': 'no'},
#                 {'name':'Weight loss' , 'type':'symptom', 'question':'Is your cat losing weight?', 'specialty':['Urinary','Gastrointestinal'], 'defaultQuestion': 'no'},
#                 {'name':'PotBellied Appearance' , 'type':'symptom', 'question':'Does the belly of your cat seem to be dillated?', 'specialty':['Gastrointestinal'], 'defaultQuestion': 'no'},
#                 {'name':'Diarrhea' , 'type':'symptom','question':'Are your cat\'s stools softer?', 'specialty':['Gastrointestinal'], 'defaultQuestion': 'no'},
#                 {'name':'Constipation' , 'type':'symptom', 'question':'Does your cat seem to be constipated? (Trying to poop but nothing comes out)', 'specialty':['Gastrointestinal'], 'defaultQuestion': 'no'},
#                 {'name':'Visible Worms' , 'type':'symptom', 'question':'Does your cat\'s stools have visible worms?' , 'specialty':['Gastrointestinal', 'Dermatology'], 'defaultQuestion': 'no'},
#                 {'name':'Anal Itching or Scooting' , 'type':'symptom', 'question':'Is your cat having anal itching or scooting?', 'specialty':['Dermatology', 'Gastrointestinal'], 'defaultQuestion': 'no'},
#                 {'name':'Intense itching and scratching' , 'type':'symptom', 'question':'Is your cat having intense itching and scratching?', 'specialty':['Dermatology'], 'defaultQuestion': 'no'},
#                 {'name':'Hair loss or thinning of fur' , 'type':'symptom', 'question': 'Is your cat having hair loss or thinning fur?', 'specialty':['Dermatology'], 'defaultQuestion': 'no'},
#                 {'name':'Formation of small raised bumps or pustules', 'type':'symptom', 'question':'Does you cat have wounds or pimples on its skin?', 'specialty':['Dermatology'], 'defaultQuestion': 'no'},
#                 {'name':'Irritated or weepy eyes' , 'type':'symptom', 'question': 'Does you cat have irritaded or weepy eyes', 'specialty':['Dermatology', 'Gastrointestinal'], 'defaultQuestion': 'no'},
#                 {'name':'Restlessness and Agitation' , 'type':'symptom', 'question':'Does you cat seem to be restlessness and agitated?', 'specialty':['Dermatology', 'Urinary'], 'defaultQuestion': 'no'},
#                 {'name':'Over-Grooming' , 'type':'symptom', 'question':'Is you cat licking itself more than usual?', 'specialty':['Dermatology', 'Gastrointestinal'], 'defaultQuestion': 'no'},
#                 {'name':'Ear Infection' , 'type':'symptom', 'question':'Does you cat\'s year seem to be infected?', 'specialty':['Dermatology'], 'defaultQuestion': 'no'},
#                 {'name':'Presence of fleas' , 'type':'animalAtribute', 'question':'Have you even seen fleas on your cat?', 'specialty':[], 'defaultQuestion': 'no'},
#                 {'name':'Overweight' , 'type':'animalAtribute', 'question':'Does your cat seem to be overwheight?', 'specialty':[], 'defaultQuestion': 'no'},
#                 {'name':'Age', 'type':'animalAtribute', 'question':'How old are your cat?', 'specialty':[], 'defaultQuestion': 'yes'},
#                 {'name':'Vaccination updated' , 'type':'animalAtribute', 'question':'Is the vaccination of your cat updated?', 'specialty':[], 'defaultQuestion': 'no'},
#                 {'name':'Male' , 'type':'animalAtribute', 'question':'Is your cat male?', 'specialty':[], 'defaultQuestion': 'yes'},
#                 {'name':'Indoor' , 'type':'animalAtribute', 'question':'Does your cat goes outside?', 'specialty':[], 'defaultQuestion': 'yes'},
#                 {'name':'Contact with other pets' , 'type':'animalAtribute', 'question':'Does your cat have contact with other pets?', 'specialty':[], 'defaultQuestion': 'yes'},
#                 {'name':'Neutered' , 'type':'animalAtribute', 'question':'Is your cat neutered?', 'specialty':[], 'defaultQuestion': 'yes'},
#                 {'name':'Start of the symptoms', 'type':'symptomatribute', 'question':'When was the first time that the symptoms started?', 'specialty':[], 'defaultQuestion': 'no'},
#                 {'name':'Processed Diet' , 'type':'animalAtribute', 'question':'Does your cat eat processed food?', 'specialty':[], 'defaultQuestion': 'yes'},
#               ]