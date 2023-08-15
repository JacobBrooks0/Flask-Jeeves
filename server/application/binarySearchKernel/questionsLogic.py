import os
import sys
from pathlib import Path
full_path = os.path.dirname(os.path.abspath(__file__))
sys.path.append(str(Path(full_path).parents[0]))
sys.path.append(str(Path(full_path).parents[1]))

from application import *
from binarySearchKernel import *
from logicUtilityFunctions import *

allVariables = getAllDiseaseVariablesIds()
allDiseases = getAllDiseasesIds()
allRules = getAllDiseaseRules()
 
# Initiate BayesLib
BayesLibObj = BayesLib(allVariables, allDiseases, allRules, maxIter=15)

def sendQuestions() :
    falseVariableQuestions =  getAllFalseDefaultVariablesQuestions()
    print(falseVariableQuestions)
    randomQuestions = BayesLibObj.getRandomQuestions(falseVariableQuestions)
    return randomQuestions

def findDiagnosis(pet_id=1, questionsAnswered=[1, 2, 3, 4, 5, 6, 7, 8, 13, 27, 25, 22, 21, 20, 19], answersUser=[1, 1, 1 ,1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5]):    
    defaultVariableQuestions = getAllTrueDefaultVariablesQuestions()
    petDetails = getPetDetailsbyId(pet_id)
    answersTrueDefaultAnamnese = answerDefaultAnamnese(petDetails)
    BayesLibObj.setQuestionAnswer(defaultVariableQuestions, answersTrueDefaultAnamnese)
    answersRandomAnamnese = answerRandomAnamnese(answersUser)
    BayesLibObj.setQuestionAnswer(questionsAnswered, answersRandomAnamnese)
    probabilities = BayesLibObj.Solve()
    return probabilities
