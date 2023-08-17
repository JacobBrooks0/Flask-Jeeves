import pytest
from unittest.mock import patch
from application.models import Variables

@pytest.mark.parametrize(
    "specialty, feature, question, defaultQuestion, expected_status_code",
    [
        ("specialty_1", "feature_1", "question_1", "default_question_1", 201),
        ("specialty_2", "feature_2", "question_2", "default_question_2", 201),
    ],
)
def test_create_variable(client, specialty, feature, question, defaultQuestion, expected_status_code):
    response = client.post(
        "/variables",
        json={
            "specialty": specialty,
            "feature": feature,
            "question": question,
            "defaultQuestion": defaultQuestion,
        },
    )
    assert response.status_code == expected_status_code

def test_get_variable_by_id(client, mock_variable_query):
    response = client.get("/variables/1")
    assert response.status_code == 200
    assert "specialty" in response.json
    assert "feature" in response.json
    assert "question" in response.json
    assert "defaultQuestion" in response.json

@patch("application.binarySearchKernel.questionsLogic.sendQuestions")
def test_get_variables_questions(mock_sendQuestions, client):
    mock_sendQuestions.return_value = ["question_1", "question_2"]
    response = client.get("/variables_questions")
    assert response.status_code == 200
    assert len(response.json) == 2
    assert "question_1" in response.json
    assert "question_2" in response.json
