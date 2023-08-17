import pytest
from unittest import mock
from application.appointments.routes import appointment
from application.models import Appointments



@pytest.mark.parametrize(
    "date, user_id, time, meeting_id",
    [
        ("2023-08-15", 1, "10:00 AM", 123),
        ("2023-05-16", 2, "2:30 PM", 456),
        ("2022-04-11", 3, "3:00 PM", 789),
        ("2022-01-05", 4, "3:50 PM", 1234),
        ("2022-01-19", 5, "11:00 AM", 741)
    ],
)
def test_create_appointment(date, user_id, time, meeting_id):
    appointment = Appointments(date=date, user_id=user_id, time=time, meeting_id=meeting_id)

    assert appointment.date == date
    assert appointment.user_id == user_id
    assert appointment.time == time
    assert appointment.meeting_id == meeting_id

def test_get_appointment_by_user_id():
    with mock.patch("application.models.Appointments"):
        appointment = Appointments("2023-08-15", 1, "10:00 AM", meeting_id=123)
        
        assert hasattr(appointment,"date")
        assert hasattr(appointment,"user_id")
        assert hasattr(appointment,"time")
        assert hasattr(appointment,"meeting_id")
    
#########

# Test creating appointment with invalid date format
def test_create_appointment_invalid_date():
    with pytest.raises(ValueError):
        Appointments(date="2023-08-15-10:00", user_id=1, time="10:00 AM", meeting_id=123)

# Test creating appointment with negative user ID
def test_create_appointment_invalid_user_id():
    with pytest.raises(ValueError):
        Appointments(date="2023-08-15", user_id=-1, time="10:00 AM", meeting_id=123)

# Test creating appointment with missing time
def test_create_appointment_missing_time():
    with pytest.raises(ValueError):
        Appointments(date="2023-08-15", user_id=1, meeting_id=123)

# Test creating appointment with duplicate meeting ID
def test_create_appointment_duplicate_meeting_id():
    with pytest.raises(ValueError):
        Appointments(date="2023-08-15", user_id=1, time="10:00 AM", meeting_id=123)
        Appointments(date="2023-08-16", user_id=2, time="2:30 PM", meeting_id=123)

# Test retrieving appointment for a user with no appointments
def test_get_appointment_by_user_id_no_appointments():
    with mock.patch("application.models.Appointments") as mock_appointments:
        mock_appointments.query.filter_by.return_value.first.return_value = None
        appointment = Appointments.get_appointment_by_user_id(user_id=1)
        assert appointment is None

# Test retrieving appointment for a user with appointments
def test_get_appointment_by_user_id_with_appointments():
    expected_appointment = Appointments(date="2023-08-15", user_id=1, time="10:00 AM", meeting_id=123)
    with mock.patch("application.models.Appointments") as mock_appointments:
        mock_appointments.query.filter_by.return_value.first.return_value = expected_appointment
        appointment = Appointments.get_appointment_by_user_id(user_id=1)
        assert appointment == expected_appointment