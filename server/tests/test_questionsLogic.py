""" import os
import sys
from pathlib import Path

from BayesLib import BayesLib
full_path = os.path.dirname(os.path.abspath(__file__))
sys.path.append(str(Path(full_path).parents[1]))
import unittest
from unittest.mock import patch
from application.models import *
from application.binarySearchKernel.logicUtilityFunctions import *
from application.binarySearchKernel.questionsLogic import *
class TestLogicScript(unittest.TestCase):
    @patch('binarySearchKernel.logicUtilityFunctions.getAllDiseaseVariablesIds')
    @patch('binarySearchKernel.logicUtilityFunctions.getAllDiseasesIds')
    @patch('binarySearchKernel.logicUtilityFunctions.getAllDiseaseRules')
    def test_init_bayes_lib(self, mock_get_all_rules, mock_get_all_diseases, mock_get_all_variables):
        mock_get_all_variables.return_value = [1, 2, 3]  # Mock the return values
        mock_get_all_diseases.return_value = [4, 5, 6]
        mock_get_all_rules.return_value = [[0.0, 0.0, 0.0], [0.0, 0.0, 0.0]]
        BayesLibObj = BayesLib([1, 2, 3], [4, 5, 6], [[0.0, 0.0, 0.0], [0.0, 0.0, 0.0]], maxIter=15)
        self.assertEqual(BayesLibObj.allVariables, [1, 2, 3])
        self.assertEqual(BayesLibObj.allDiseases, [4, 5, 6])
        self.assertEqual(BayesLibObj.allRules, [[0.0, 0.0, 0.0], [0.0, 0.0, 0.0]])
        self.assertEqual(BayesLibObj.maxIter, 15)
    @patch('binarySearchKernel.logicUtilityFunctions.getAllFalseDefaultVariablesIds')
    @patch('binarySearchKernel.BayesLib.BayesLib.getRandomQuestions')
    def test_send_questions(self, mock_get_random_questions, mock_get_false_variables):
        mock_get_false_variables.return_value = [{"id": 1, "question": "Question 1"}]
        mock_get_random_questions.return_value = [1, 2, 3]
        result = sendQuestions()
        self.assertEqual(result, [1, 2, 3])
    @patch('binarySearchKernel.logicUtilityFunctions.getAllTrueDefaultVariablesIds')
    @patch('binarySearchKernel.logicUtilityFunctions.getPetDetailsbyId')
    @patch('binarySearchKernel.logicUtilityFunctions.answerDefaultAnamnese')
    @patch('binarySearchKernel.logicUtilityFunctions.answerRandomAnamnese')
    @patch('binarySearchKernel.BayesLib.BayesLib.setQuestionAnswer')
    @patch('binarySearchKernel.BayesLib.BayesLib.Solve')
    def test_find_diagnosis(self, mock_solve, mock_set_qa, mock_answer_random, mock_answer_default, mock_get_pet_details, mock_get_true_variables):
        mock_get_true_variables.return_value = [1, 2, 3]
        mock_get_pet_details.return_value = {'dob': '2020-01-01', 'sex': 'Male', 'diet': 'Processed', 'outdoor': False, 'contactWithOtherPets': True, 'neutered': True}
        mock_answer_default.return_value = [0.25, 1.0, 1.0, 0.0, 1.0, 1.0]
        mock_answer_random.return_value = [0.0, 0.25, 0.5, 0.75, 1.0, 0.5]
        mock_solve.return_value = [0.2, 0.3, 0.5]
        result = findDiagnosis()
        self.assertEqual(result, [0.2, 0.3, 0.5])
if __name__ == "__main__":
    unittest.main() """