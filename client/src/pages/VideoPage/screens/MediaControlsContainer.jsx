import { useMeeting, Constants } from "@videosdk.live/react-sdk";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CallEndIcon from "@mui/icons-material/CallEnd";
import MicIcon from "@mui/icons-material/Mic";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";

const MediaControlsContainer = () => {
  const { toggleMic, toggleWebcam, meetingId, end } = useMeeting();

  const handleEndMeeting = () => {
    // Ending Meeting
    end();
    window.location.reload();
  };

  const handleToggleMic = () => {
    // Toggling Mic
    toggleMic();
  };

  const handleToggleWebcam = () => {
    // Toggling webcam
    toggleWebcam();
  };

  return (
    <div className="meeting-controls">
      <Typography variant="h5">Meeting ID: {meetingId}</Typography>
      <Button
        variant="contained"
        onClick={handleToggleMic}
        endIcon={<MicIcon />}
      >
        Toggle Mic
      </Button>
      <Button
        variant="contained"
        endIcon={<VideoCameraFrontIcon />}
        onClick={handleToggleWebcam}
      >
        Toggle Webcam
      </Button>
      <Button
        variant="contained"
        color="error"
        endIcon={<CallEndIcon />}
        onClick={handleEndMeeting}
      >
        End Meeting
      </Button>
    </div>
  );
};

export default MediaControlsContainer;
