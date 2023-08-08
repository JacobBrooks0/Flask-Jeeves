import React, { useState, useEffect } from "react";
import { createNewRoom } from "../API";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import CallIcon from "@mui/icons-material/Call";

const WelcomeScreenContainer = ({ setAppData }) => {
  const [meetingId, setMeetingId] = useState("");

  const createClick = async () => {
    const meetingId = await createNewRoom();

    setAppData({ mode: "CONFERENCE", meetingId });
  };
  const hostClick = () => setAppData({ mode: "CONFERENCE", meetingId });

  return (
    <div className="welcome-controls">
      <Button variant="contained" endIcon={<AddIcon />} onClick={createClick}>
        Create new Meeting
      </Button>
      <TextField
        variant="outlined"
        label="Meeting ID"
        onChange={(e) => setMeetingId(e.target.value)}
        value={meetingId}
      />
      <Button variant="contained" endIcon={<CallIcon />} onClick={hostClick}>
        Join
      </Button>
    </div>
  );
};

export default WelcomeScreenContainer;
