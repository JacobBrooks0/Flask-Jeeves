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
trueVariableIDs = getAllTrueDefaultVariablesIds()
falseVariableIDs =  getAllFalseDefaultVariablesIds()
randomQuestions = BayesLibObj.getRandomQuestions(falseVariableIDs)
variableID = trueVariableIDs + randomQuestions
petDetails = getPetDetailsbyId(1)
answerDefaultAnamnese = answerDefaultAnamnese(petDetails)
answerRandomAnamnese = answerRandomAnamnese([1,2,3,1,2,5,5,1,3,4,1,1,5,4,2])
answer = answerDefaultAnamnese + answerRandomAnamnese
BayesLibObj.setQuestionAnswer(variableID, answer)
print(len(variableID), len(answer))

# Main Loop
while (not BayesLibObj.converged()):

    # Request next variable
    nextVarID = BayesLibObj.getRandomQuestions(falseVariableIDs)

    # Send variable to front end
    print("nextVarID", nextVarID)
    # Pass the variable ID to front and set the answer in the kernel
    # BayesLibObj.setQuestionAnswer(nextVarID, nextanswer)
    
  
#     questions_so_far.append(GenerateQuestion(AllVariables, questions_so_far))
#     answers_So_Far.append( AnswerValues[GetAnswer(AllVariables, questions_so_far[-1])])
#     input()
#     # Calculating Probabilities based on Bayes theorem
#     probabilities = by.CalculateProbabilites(AllDiseases, DiseaseRules, questions_so_far, answers_So_Far)
#     probabilities = sorted( probabilities, key= lambda d:d['probability'] )

# print("The three most probable diseases are:")
# for i in range(-1, -4, -1):
#     print(probabilities[i]['name'], probabilities[i])
