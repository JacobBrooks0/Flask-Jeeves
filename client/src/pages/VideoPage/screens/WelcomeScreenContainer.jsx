import React, { useState, useEffect, useContext } from "react";
import { createNewRoom } from "../API";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import CallIcon from "@mui/icons-material/Call";
import LandingTitle from "../../../components/LandingTitle";
import Typography from "@mui/material/Typography";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton, Snackbar } from "@mui/material";
import { useCredentials } from "../../../contexts";
import Doctor from "../../../assets/doctor.png";
import { Link } from "react-router-dom";

const WelcomeScreenContainer = ({ setAppData }) => {
  const [meetingId, setMeetingId] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [open, setOpen] = useState(false);
  const { dark, setDark } = useCredentials();

  async function getAppointments() {
    const response = await fetch(
      "https://catcareserver.onrender.com/appointments"
    );
    const array = await response.json();
    const appointments = array.filter(
      (appointment) =>
        appointment.user_id == JSON.parse(localStorage.getItem("user")).id
    );
    setAppointments(appointments);
  }

  useEffect(() => {
    getAppointments();
  }, []);

  const createClick = async () => {
    const meetingId = await createNewRoom();

    setAppData({ mode: "CONFERENCE", meetingId });
  };
  const hostClick = () => setAppData({ mode: "CONFERENCE", meetingId });

  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(
      appointments[0] ? appointments[0].meeting_id : null
    );
  };

  return (
    <div
      className="video-page"
      style={{ backgroundColor: dark ? "#121212" : "whitesmoke" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            backgroundColor: dark ? "#121212" : "whitesmoke",
            paddingTop: "3rem",
            paddingBottom: "2rem",
            width: "50%",
          }}
        >
          <Typography
            variant="h3"
            component="header"
            sx={{
              fontFamily: "'Patua One', sans-serif",
              color: dark ? "whitesmoke" : "#121212",
              fontSize: "3rem",
            }}
          >
            Your Video Page
          </Typography>
          <Typography
            variant="h6"
            component="p"
            style={{ textAlign: "justify" }}
            sx={{
              py: 3,
              pr: 10,
              display: "block",
              lineHeight: 1.6,
              color: dark ? "whitesmoke" : "#121212",
            }}
          >
            On your video page, you can join a face-to-face call with your
            registered vet. Just copy the meeting ID from your appointment and
            paste it into the box, join, and you're good to go.
          </Typography>
        </div>
        <div
          style={{
            backgroundColor: dark ? "#121212" : "whitesmoke",
            paddingTop: "3rem",
            paddingBottom: "2rem",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            maxWidth: "400px",
          }}
        >
          <TextField
            variant="filled"
            label="Meeting ID"
            onChange={(e) => setMeetingId(e.target.value)}
            value={meetingId}
            color="secondary"
            sx={{
              backgroundColor: "whitesmoke",
              borderRadius: "5px",
            }}
          />
          <Button
            variant="contained"
            sx={{
              my: 0.5,
              px: 4,
              py: 0.8,
              fontSize: "0.9rem",
              textTransform: "capitalize",
              borderRadius: 1,
              borderColor: "#14192d",
              color: "#fff",
              backgroundColor: "#826BF5",
              "&&:hover": {
                backgroundColor: "#7958D6",
              },
              "&&:focus": {
                backgroundColor: "#7958D6",
              },
            }}
            endIcon={<CallIcon />}
            onClick={hostClick}
          >
            Join
          </Button>
          <Button
            sx={{
              my: 0.5,
              px: 4,
              py: 0.8,
              fontSize: "0.9rem",
              textTransform: "capitalize",
              borderRadius: 1,
              borderColor: "#14192d",
              color: "white",
              backgroundColor: "#826BF5",
              "&&:hover": {
                backgroundColor: "#7958D6",
              },
              "&&:focus": {
                backgroundColor: "#7958D6",
              },
            }}
            variant="contained"
            endIcon={<AddIcon />}
            onClick={createClick}
          >
            Create new Meeting
          </Button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div
        className="welcome-controls"
        style={{
          backgroundColor: dark ? "#7958D6" : "#D3CCFA",
          marginBottom: "-100px",
          height: "500px",
        }}
      >
        <div>
          <Typography
            variant="h3"
            component="header"
            sx={{
              fontFamily: "'Patua One', sans-serif",
              color: dark ? "whitesmoke" : "#121212",
              fontSize: "2rem",
            }}
          >
            Upcoming Appointment:
          </Typography>
          {appointments[0] ? (
            <Typography
              variant="h6"
              component="p"
              sx={{
                py: 3,
                display: "block",
                lineHeight: 1.6,
                color: dark ? "whitesmoke" : "#121212",
              }}
            >
              Date: {appointments[0] ? appointments[0].date : "loading"}
              <br />
              Time: {appointments[0] ? appointments[0].time : "loading"}
              <br />
              Meeting ID:{" "}
              {appointments[0] ? appointments[0].meeting_id : "loading"}{" "}
              <IconButton onClick={handleClick} color="#826BF5">
                <ContentCopyIcon
                  sx={{
                    width: "1.5rem",
                    height: "fit-content",
                    mb: -0.5,
                    color: dark ? "whitesmoke" : "#121212",
                  }}
                />
              </IconButton>
            </Typography>
          ) : (
            <>
              <Typography
                variant="h3"
                component="header"
                sx={{
                  pt: 3,
                  fontFamily: "'Patua One', sans-serif",
                  color: dark ? "whitesmoke" : "#121212",
                  fontSize: "2rem",
                }}
              >
                You have no appointments
              </Typography>
              <Button
                component={Link}
                to="/user"
                sx={{
                  my: 3,
                  px: 4,
                  py: 0.8,
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  borderRadius: 1,
                  borderColor: "#14192d",
                  color: "white",
                  backgroundColor: "#826BF5",
                  "&&:hover": {
                    backgroundColor: "#7958D6",
                  },
                  "&&:focus": {
                    backgroundColor: "#7958D6",
                  },
                }}
                variant="contained"
              >
                Book an appointment
              </Button>
            </>
          )}
        </div>
        <Snackbar
          message="Copied to clipboard"
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          open={open}
        />
        <img src={Doctor} alt="doctor" style={{ height: "100%" }} />
      </div>
    </div>
  );
};

export default WelcomeScreenContainer;
