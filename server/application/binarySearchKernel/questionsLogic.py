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

# Fill the anamnese questions calling functions
defaultVariableIDs = getAllTrueDefaultVariablesIds()
falseVariableIDs =  getAllFalseDefaultVariablesIds()
petDetails = getPetDetailsbyId(1)
answerDefaultAnamnese = answerDefaultAnamnese(petDetails)
BayesLibObj.setQuestionAnswer(defaultVariableIDs, answerDefaultAnamnese)
randomQuestions = BayesLibObj.getRandomQuestions(falseVariableIDs)
answerRandomAnamnese = answerRandomAnamnese([1,2,3,1,2,5,5,1,3,4,1,1,5,4,2])
BayesLibObj.setQuestionAnswer(randomQuestions, answerRandomAnamnese)

#print("diseasesVariables_so_far", len(BayesLibObj.diseasesVariables_so_far), BayesLibObj.diseasesVariables_so_far)
#print("answers_so_far", len(BayesLibObj.answers_so_far), BayesLibObj.answers_so_far)

# Solving the Problem
probabilities = BayesLibObj.Solve()

print(probabilities)
# # print("The three most probable diseases are:")
# # for i in range(-1, -4, -1):
# #     print(probabilities[i]['name'], probabilities[i])
