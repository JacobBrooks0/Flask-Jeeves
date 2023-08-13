# import numpy as np
# import random as rd
# import bayes_lib as by
# from functions import *
# from definitions import *
# from diseaseRules import *

# def GenerateQuestion(symptoms, questions_so_far):
#     # Start with a random algorithm
#     is_Question_OK = False
#     while not is_Question_OK:
#         question_ID = rd.randint(0, len(symptoms)-1)
#         if not symptoms[question_ID] in questions_so_far:
#             is_Question_OK = True
#     return symptoms[question_ID]

# def GetAnswer(symptoms, symptom_Question):
#     print(symptom_Question['question'])
#     print('1 - No\n2 - Probably not\n3 - Don\'t Know\n4 - Probably yes\n5 - Yes')
#     return(input())

# questions_so_far = [{'name':'Age', 'type':'animalAtribute', 'question':'How old are your cat?', 'specialty':[], 'defaultQuestion': 'yes'},{'name':'Male' , 'type':'animalAtribute', 'question':'Is your cat male?', 'specialty':[], 'defaultQuestion': 'yes'},{'name':'Processed Diet' , 'type':'animalAtribute', 'question':'Does your cat eat processed food?', 'specialty':[], 'defaultQuestion': 'yes'}, {'name':'Neutered' , 'type':'animalAtribute', 'question':'Is your cat neutered?', 'specialty':[], 'defaultQuestion': 'yes'}, {'name':'Indoor' , 'type':'animalAtribute', 'question':'Does your cat goes outside?', 'specialty':[], 'defaultQuestion': 'yes'}, {'name':'Contact with other pets' , 'type':'animalAtribute', 'question':'Does your cat have contact with other pets?', 'specialty':[], 'defaultQuestion': 'yes'},   ]
# answers_So_Far = answerDefaultAnamnese(2, 'Male', 'Mixed', 'Yes', 'Yes', 'No')
# max_Number_of_Questions = 20
