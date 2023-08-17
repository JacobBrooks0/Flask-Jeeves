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
