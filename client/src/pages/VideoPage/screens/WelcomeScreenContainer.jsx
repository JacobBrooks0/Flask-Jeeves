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

const WelcomeScreenContainer = ({ setAppData }) => {
  const [meetingId, setMeetingId] = useState("");
  const [nextAppointment, setNextAppointment] = useState({});
  const [open, setOpen] = useState(false);
  const { dark, setDark } = useCredentials();

  const appointments = [
    {
      id: 1,
      date: "08/10/2023",
      time: "16:00",
      meetingId: "sux9-iiri-58gt",
    },
    {
      id: 2,
      date: "08/13/2023",
      time: "12:00",
      meetingId: "sux9-iiri-58gt",
    },
  ];

  // const timestamp = new Date().getTime();
  // const date = new Date(timestamp);
  // const hours = date.getHours();
  // const minutes = "0" + date.getMinutes();
  // const seconds = "0" + date.getSeconds();
  // const time = hours + ":" + minutes.substring(0) + ":" + seconds.substring(1);
  // console.log(time);

  const createClick = async () => {
    const meetingId = await createNewRoom();

    setAppData({ mode: "CONFERENCE", meetingId });
  };
  const hostClick = () => setAppData({ mode: "CONFERENCE", meetingId });

  const findSoonestAppointment = () => {
    const timestamps = appointments.map(
      (appointment) => Date.parse(appointment.date) / 1000
    );
    const soonestTimestamp = Math.min(...timestamps);
    const soonestAppointment = appointments.filter((appointment) => {
      return Date.parse(appointment.date) / 1000 === soonestTimestamp;
    });
    setNextAppointment(soonestAppointment);
  };

  useEffect(() => {
    findSoonestAppointment();
  }, []);

  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(
      nextAppointment[0] ? nextAppointment[0].meetingId : null
    );
  };

  useEffect(() => {
    console.log(nextAppointment);
  }, [nextAppointment]);

  return (
    <div
      className="video-page"
      style={{ backgroundColor: dark ? "#121212" : "whitesmoke" }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            backgroundColor: dark ? "#121212" : "whitesmoke",
            paddingLeft: "3rem",
            paddingTop: "3rem",
            paddingBottom: "2rem",
            width: "50%",
          }}
        >
          <Typography
            variant="h3"
            component="header"
            sx={{
              fontFamily: "'Jua', sans-serif",
              color: dark ? "whitesmoke" : "#121212",
              fontSize: "3rem",
            }}
          >
            Your Video Page
          </Typography>
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
            On your video page, you can join a face-to-face <br /> call with
            your registered vet. <br /> Just copy the meeting ID from your
            appointment <br /> and paste it into the box, join, and you're good
            to go.
          </Typography>
        </div>
        <div
          style={{
            backgroundColor: dark ? "#121212" : "whitesmoke",
            paddingLeft: "3rem",
            paddingTop: "3rem",
            paddingBottom: "2rem",
            width: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
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
        style={{ backgroundColor: dark ? "#7958D6" : "#D3CCFA" }}
      >
        <div>
          <Typography
            variant="h3"
            component="header"
            sx={{
              fontFamily: "'Jua', sans-serif",
              color: dark ? "whitesmoke" : "#121212",
              fontSize: "2rem",
            }}
          >
            Upcoming Appointment
          </Typography>
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
            Date: {nextAppointment[0] ? nextAppointment[0].date : "loading"}
            <br />
            Time: {nextAppointment[0] ? nextAppointment[0].time : "loading"}
            <br />
            Meeting ID:{" "}
            {nextAppointment[0] ? nextAppointment[0].meetingId : "loading"}{" "}
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
        </div>
        <Snackbar
          message="Copied to clipboard"
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
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
