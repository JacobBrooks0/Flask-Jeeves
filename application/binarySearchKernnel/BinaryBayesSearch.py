import numpy as np
import random as rd

from def_enums import *
from DiseaseRules import *

def GenerateQuestion(Symptoms, QuestionsSoFar):
    # Start with a random algorithm
    IsQuestionOK = False
    while not IsQuestionOK:
        QuestionID = rd.randint(0, len(Symptoms)-1)
        if not Symptoms[QuestionID] in QuestionsSoFar:
            IsQuestionOK = True
    return Symptoms[QuestionID]

def GetAnswer(Symptoms, SymptomQuestion):
    print(SymptomQuestion['name'] + '?')
    print('1 - No\n2 - Probably not\n3 - Don\'t Know\n4 - Probably yes\n5 - Yes')
    return(input())

def CalculateProbabilites(Diseases, DiseaseRules, QuestionsSoFar, AnswersSoFar):

    # Calculating the Disease Likelihood for all Diseases
    DisLikelihood = {}
    for dis in range(len(Diseases)):
        DisLikelihood[Diseases[dis]['name']] =  1.0
        for ans in range(len(AnswersSoFar)):
            # print("Disease:", Diseases[dis]['name'], ", Question:", QuestionsSoFar[ans]['name'])
            LikeCalc = 0.0
            try:
                LikeCalc = CalculateAnswer(DiseaseRules[Diseases[dis]['name']][QuestionsSoFar[ans]['name']])
            except:
                LikeCalc = 0.5
            DisLikelihood[Diseases[dis]['name']] *= max( 0.01, 1.0 - abs( LikeCalc - AnswersSoFar[ans] ) )
            # print("P_Likelihood", DisLikelihood[Diseases[dis]['name']], ",", Diseases[dis]['name'], ",", QuestionsSoFar[ans]['name'], "Correct Answer: ", DiseaseRules[Diseases[dis]['name']][QuestionsSoFar[ans]['name']], "AnswersSoFar", AnswersSoFar[ans])

    ProbabilitiesList = []
    for dis in Diseases:
        ProbabilitiesList.append({
            'name': dis['name'],
            'probability': CalculateDiseaseProbability(dis, Diseases, DisLikelihood, DiseaseRules, QuestionsSoFar, AnswersSoFar)
        })

    return ProbabilitiesList

def CalculateAnswer(AnswerCounts):
    if sum(AnswerCounts) == 0.0:
        # Disease nor cataloged yet.
        return 0.5

    AvgAnswer = AnswerCounts[0]*0.00 + AnswerCounts[1]*0.25 + AnswerCounts[2]*0.50 + AnswerCounts[3]*0.75 + AnswerCounts[4]*1.0
    AvgAnswer /= sum(AnswerCounts)
    return AvgAnswer

def CalculateDiseaseProbability(GivenDisease, Diseases, DisLikelihood, DiseaseRules, QuestionsSoFar, AnswersSoFar):
    # Bayesian Classifier Algorithm (http://cs.wellesley.edu/~anderson/writing/naive-bayes.pdf)
    # We want to calculate the probability of the GivenDisease be the correct, given the
    # likelihood between the answers and the the expected answers for that disease.
    # Using the Bayes Theorem:
    # P(GivenDisease|AnswersSoFar) = P_GivenDisease*Prod( P_Likelihood )
    #                                ----------------------------------
    #              P_GivenDisease*Prod( P_Likelihood ) + (1 - P_GivenDisease)*Prod( P_NonLikelihood )
    # Where Prod is the productory function

    # Probability of a random disease being the correct one
    P_Disease = 1 / len(Diseases)

    P_Likelihood = DisLikelihood[GivenDisease['name']]

    P_AvgNonLikelihood = 0.0
    for ans in range(len(Diseases)):
        if Diseases[ans]['name'] != GivenDisease['name']:
            P_AvgNonLikelihood += DisLikelihood[Diseases[ans]['name']]
    P_AvgNonLikelihood /= ( len(Diseases) - 1.0 )
    P_AvgNonLikelihood = max(P_AvgNonLikelihood, 0.01)

    # Bayes Theorem
    P_Bayes = P_Disease*P_Likelihood / ( P_Disease*P_Likelihood + (1.0 - P_Disease)*P_AvgNonLikelihood )
    return P_Bayes

QuestionsSoFar = []
AnswersSoFar = []
MaxNumberofQuestions = 20

# TODO 0: Remover as perguntas ambiguas (male vs female) (Indoor vs Outdoor) (Processed Diet vs Natural Diet) (Age no lugar das idades) (Symptoms duration no lugar dos 4 today, 2-3 dias. semana ...)
#  Pensar em criar uma nova chave para AllVariables que contempla os tipos de resposta(se é Yes/No ou Continuo)

# TODO 1: Criar a função GenerateAnamnese? Que faz as perguntas sempre necessárias
# [QuestionsSoFar, AnswersSoFar] = GenerateAnamnese()

for i in range(MaxNumberofQuestions):

    QuestionsSoFar.append(GenerateQuestion(AllVariables, QuestionsSoFar))
    AnswersSoFar.append( AnswerValues[GetAnswer(AllVariables, QuestionsSoFar[-1])] )


    # Calculating Probabilities based on Bayes theorem
    probabilities = CalculateProbabilites(AllDiseases, DiseaseRules, QuestionsSoFar, AnswersSoFar)
    probabilities = sorted( probabilities, key= lambda d:d['probability'] )

print("The three most probable diseases are:")
for i in range(-1, -4, -1):
    print(probabilities[i])

# FUTURO
# 1 - Criar o banco de dados para salvar:
    # AllDiseases
    # AllVariables
    # DiseaseRules

# 2 - Ao final do programa perguntar ao usuário se a resposta era a correta.
#     Atualizar DiseaseRules Colocando os votos corretos na doença correta
#

# 3 - Quando for o site, tem que salvar as opções do usuário na conta dele.
#     E perguntar depois de uma semana se ele foi no veterinário, se o diagnóstico
#     estava correto e se ele deseja mudar alugma reposta
#     Após isso, salvar no banco de dados.
