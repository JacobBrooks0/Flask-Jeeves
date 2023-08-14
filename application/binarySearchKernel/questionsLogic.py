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
BayesLibObj = BayesLib(allVariables, allDiseases, allRules, maxIter=10)

# Fill the anamnese questions calling functions
variableID = getAllTrueDefaultVariablesIds()
petDetails = getPetDetailsbyId(1)
answer = answerDefaultAnamnese(petDetails)
BayesLibObj.setQuestionAnswer(variableID, answer)

# Main Loop
while (not BayesLibObj.converged()):

    # Request next variable
    nextVarID = BayesLibObj.getNextVariable()

    # Send variable to front end
    print("nextVarID", nextVarID)
    # Pass the variable ID to front and set the answer in the kernel
    # BayesLibObj.setQuestionAnswer(nextVarID, nextanswer)
    input()
    
  
#     questions_so_far.append(GenerateQuestion(AllVariables, questions_so_far))
#     answers_So_Far.append( AnswerValues[GetAnswer(AllVariables, questions_so_far[-1])])
#     input()
#     # Calculating Probabilities based on Bayes theorem
#     probabilities = by.CalculateProbabilites(AllDiseases, DiseaseRules, questions_so_far, answers_So_Far)
#     probabilities = sorted( probabilities, key= lambda d:d['probability'] )

# print("The three most probable diseases are:")
# for i in range(-1, -4, -1):
#     print(probabilities[i]['name'], probabilities[i])
