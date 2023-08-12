import numpy as np
import random as rd
import bayes_lib as by
from functions import *
from definitions import *
from diseaseRules import *

def GenerateQuestion(symptoms, questions_so_far):
    # Start with a random algorithm
    is_Question_OK = False
    while not is_Question_OK:
        question_ID = rd.randint(0, len(symptoms)-1)
        if not symptoms[question_ID] in questions_so_far:
            is_Question_OK = True
    return symptoms[question_ID]

def GetAnswer(symptoms, symptom_Question):
    print(symptom_Question['question'])
    print('1 - No\n2 - Probably not\n3 - Don\'t Know\n4 - Probably yes\n5 - Yes')
    return(input())

questions_so_far = [{'name':'Age', 'type':'animalAtribute', 'question':'How old are your cat?', 'specialty':[], 'defaultQuestion': 'yes'},{'name':'Male' , 'type':'animalAtribute', 'question':'Is your cat male?', 'specialty':[], 'defaultQuestion': 'yes'},{'name':'Processed Diet' , 'type':'animalAtribute', 'question':'Does your cat eat processed food?', 'specialty':[], 'defaultQuestion': 'yes'}, {'name':'Neutered' , 'type':'animalAtribute', 'question':'Is your cat neutered?', 'specialty':[], 'defaultQuestion': 'yes'}, {'name':'Indoor' , 'type':'animalAtribute', 'question':'Does your cat goes outside?', 'specialty':[], 'defaultQuestion': 'yes'}, {'name':'Contact with other pets' , 'type':'animalAtribute', 'question':'Does your cat have contact with other pets?', 'specialty':[], 'defaultQuestion': 'yes'},   ]
answers_So_Far = answerDefaultAnamnese(2, 'Male', 'Mixed', 'Yes', 'Yes', 'No')
max_Number_of_Questions = 20

# print(len(questions_so_far))
# print(answers_So_Far)
# input()

for i in range(max_Number_of_Questions):

    questions_so_far.append(GenerateQuestion(AllVariables, questions_so_far))
    answers_So_Far.append( AnswerValues[GetAnswer(AllVariables, questions_so_far[-1])])
    input()
    # Calculating Probabilities based on Bayes theorem
    probabilities = by.CalculateProbabilites(AllDiseases, DiseaseRules, questions_so_far, answers_So_Far)
    probabilities = sorted( probabilities, key= lambda d:d['probability'] )

print("The three most probable diseases are:")
for i in range(-1, -4, -1):
    print(probabilities[i]['name'], probabilities[i])

# FUTURO
# 1 - Criar o banco de dados para salvar:
    # AllDiseases
    # AllVariables
    # DiseaseRules

# 2 - Ao final do programa perguntar ao usuário se a resposta era a correta.
#     Atualizar DiseaseRules Colocando os votos corretos na doença correta#

# 3 - Quando for o site, tem que salvar as opções do usuário na conta dele.
#     E perguntar depois de uma semana se ele foi no veterinário, se o diagnóstico
#     estava correto e se ele deseja mudar alugma reposta
#     Após isso, salvar no banco de dados.
