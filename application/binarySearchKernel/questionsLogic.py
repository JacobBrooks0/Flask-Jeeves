import os
import sys
from pathlib import Path
full_path = os.path.dirname(os.path.abspath(__file__))
sys.path.append(str(Path(full_path).parents[0]))

from binarySearchKernel import *

# allVariables -> Lista com os IDs
# allDiseases -> Lista com os IDs
# allRules -> Matriz

# Initiate BayesClassifier
# BayesClassifierObj = BayesClassifier(allVariables, allDiseases, allRules, maxIter=10)

# Fill the anamnese questions calling functions
# BayesClassifierObj.setQuestionAnswer(variableID, answer)

# Main Loop
while (not BayesClassifierObj.converged()):

    # Request next variable
    # nextVarID = BayesClassifierObj.getNextVariable()
    
    # Pass the variable ID to front and set the answer in the kernel
    # BayesClassifierObj.setQuestionAnswer(nextVarID, nextanswer)
    pass
  
#     questions_so_far.append(GenerateQuestion(AllVariables, questions_so_far))
#     answers_So_Far.append( AnswerValues[GetAnswer(AllVariables, questions_so_far[-1])])
#     input()
#     # Calculating Probabilities based on Bayes theorem
#     probabilities = by.CalculateProbabilites(AllDiseases, DiseaseRules, questions_so_far, answers_So_Far)
#     probabilities = sorted( probabilities, key= lambda d:d['probability'] )

# print("The three most probable diseases are:")
# for i in range(-1, -4, -1):
#     print(probabilities[i]['name'], probabilities[i])
