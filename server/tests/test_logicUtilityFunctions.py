import pytest
import os
import sys
from pathlib import Path
full_path = os.path.dirname(os.path.abspath(__file__))
sys.path.append(str(Path(full_path).parents[1]))
import unittest
from unittest.mock import patch, Mock
from application.models import *
from application.binarySearchKernel.logicUtilityFunctions import *
from datetime import date


class TestLogicUtilityFunctions(unittest.TestCase):
    @patch('application.binarySearchKernel.logicUtilityFunctions.datetime')
    def test_answer_default_anamnese(self, mock_datetime):
        mock_now = mock_datetime.now.return_value
        mock_now.date.return_value = date(2023, 1, 1)  # Set a fixed date for testing

        pet_details = {
            'dob': '2020-01-01',
            'sex': 'Male',
            'diet': 'Processed',
            'outdoor': False,
            'contactWithOtherPets': True,
            'neutered': True
        }
        expected_answers = [0.25, 1.0, 1.0, 0.0, 1.0, 1.0]
        self.assertEqual(answerDefaultAnamnese(pet_details), expected_answers)

    def test_answer_random_anamnese(self):
        input_answers = [1, 2, 3, 4, 5, 3]
        expected_converted_answers = [0.0, 0.25, 0.5, 0.75, 1.0, 0.5]
        self.assertEqual(answerRandomAnamnese(input_answers), expected_converted_answers)

    @patch('application.binarySearchKernel.logicUtilityFunctions.session.query')
    def test_get_all_disease_variables_ids(self, mock_query):
        # Set up the mock behavior
        mock_variables = [
            Variables(Mock(), Mock(), Mock(), Mock()),
            Variables(Mock(), Mock(), Mock(), Mock()),
            Variables(Mock(), Mock(), Mock(), Mock())
        ]
        mock_query.return_value.all.return_value = mock_variables

        result = getAllDiseaseVariablesIds()

        expected_ids = [1, 2, 3]
        self.assertEqual(result, expected_ids)

    @patch('application.binarySearchKernel.logicUtilityFunctions.session.query')
    def test_get_all_false_default_variables_ids(self, mock_query):
        # Set up the mock behavior
        mock_variables = [
            Variables(Mock(), Mock(), Mock(), False),
            Variables(Mock(), Mock(), Mock(), False),
            Variables(Mock(), Mock(), Mock(), False)
        ]
        mock_query.return_value.filter_by.return_value.all.return_value = mock_variables

        result = getAllFalseDefaultVariablesIds()

        expected_variables = [
            {"id": 1, "question": "Question 1"},
            {"id": 2, "question": "Question 2"},
            {"id": 3, "question": "Question 3"}
        ]
        self.assertEqual(result, expected_variables)

    @patch('application.binarySearchKernel.logicUtilityFunctions.session.query')

    @patch('application.binarySearchKernel.logicUtilityFunctions.CalculateAnswer')
    def test_get_all_disease_rules(self, mock_calculate, mock_query):
        # Set up the mock behavior
        mock_rule_1 = UsersAnswersCount(Mock(), Mock(), Mock(), Mock())
        mock_rule_2 = UsersAnswersCount(Mock(), Mock(), Mock(), Mock())
        mock_query.return_value.all.return_value = [mock_rule_1, mock_rule_2]

        mock_calculate.return_value = 0.75  # Mock CalculateAnswer result

        mock_diseases_query = [Diseases(id=1), Diseases(id=2), Diseases(id=3)]
        mock_query.return_value.count.side_effect = [3, len(mock_diseases_query)]

        result = getAllDiseaseRules()

        expected_rules_matrix = np.array([
            [0.0, 0.0, 0.0, 0.0],  # Ignoring index 0
            [0.0, 0.0, 0.75, 0.0],  # Disease 1, Variables 1, 3
            [0.0, 0.0, 0.0, 0.0],  # Disease 2
            [0.0, 0.0, 0.0, 0.0]   # Disease 3
        ])
        np.testing.assert_array_equal(result, expected_rules_matrix)

    # Add test methods for other functions here...

if __name__ == "__main__":
    unittest.main()
