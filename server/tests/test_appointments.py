import pytest
from unittest import mock
from application.appointments.routes import appointment
from application.models import Appointments



@pytest.mark.parametrize(
    "date, user_id, time",
    [
        ("2023-08-15", 1, "10:00 AM"),
        ("2023-05-16", 2, "2:30 PM"),
        ("2022-04-11", 3, "3:00 PM"),
        ("2022-01-05", 4, "3:50 PM"),
        ("2022-01-19", 5, "11:00 AM")
    ],
)
def test_create_appointment(date, user_id, time):
    appointment = Appointments(date=date, user_id=user_id, time=time)

    assert appointment.date == date
    assert appointment.user_id == user_id
    assert appointment.time == time

def test_get_appointment_by_user_id():
    with mock.patch("application.models.Appointments"):
        appointment = Appointments("2023-08-15", 1, "10:00 AM")
        
        assert hasattr(appointment,"date")
        assert hasattr(appointment,"user_id")
        assert hasattr(appointment,"time")


#def test_update_appointment(user_id, date, time):
    
    