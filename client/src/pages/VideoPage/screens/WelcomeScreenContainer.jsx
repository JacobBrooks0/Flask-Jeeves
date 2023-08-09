import React, { useState, useEffect } from "react";
import { createNewRoom } from "../API";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import CallIcon from "@mui/icons-material/Call";
import LandingTitle from "../../../components/LandingTitle";
import LandingParagraph from "../../../components/LandingParagraph";
import Typography from "@mui/material/Typography";

const WelcomeScreenContainer = ({ setAppData }) => {
  const [meetingId, setMeetingId] = useState("");

  const createClick = async () => {
    const meetingId = await createNewRoom();

    setAppData({ mode: "CONFERENCE", meetingId });
  };
  const hostClick = () => setAppData({ mode: "CONFERENCE", meetingId });

  return (
    <div className="video-page">
      <div
        style={{
          backgroundColor: "#ADA0F2",
          paddingLeft: "3rem",
          paddingTop: "3rem",
          paddingBottom: "2rem",
        }}
      >
        <LandingTitle text={"Your Video Page"} textAlign={"left"} />
        <Typography
          variant="h6"
          component="p"
          sx={{
            py: 3,
            lineHeight: 1.6,
            color: "black",
          }}
        >
          On your video page, you can join a face-to-face <br /> call with your
          registered vet. Just copy the <br /> meeting ID from your appointment
          and paste <br /> it into the box, join, and you're good to go.
        </Typography>
      </div>
      <br />
      <br />
      <br />
      <div className="welcome-controls">
        <Button
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
          variant="contained"
          endIcon={<AddIcon />}
          onClick={createClick}
        >
          Create new Meeting
        </Button>
        <TextField
          variant="outlined"
          label="Meeting ID"
          onChange={(e) => setMeetingId(e.target.value)}
          value={meetingId}
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
      </div>
    </div>
  );
};

export default WelcomeScreenContainer;
