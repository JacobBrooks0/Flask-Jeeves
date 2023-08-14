import { useMeeting, Constants } from "@videosdk.live/react-sdk";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CallEndIcon from "@mui/icons-material/CallEnd";
import MicIcon from "@mui/icons-material/Mic";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import { useCredentials } from "../../../contexts";

const MediaControlsContainer = () => {
  const { toggleMic, toggleWebcam, meetingId, end } = useMeeting();
  const { dark, setDark } = useCredentials();

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
      <Typography variant="h5" sx={{ color: dark ? "whitesmoke" : "black" }}>
        Meeting ID: {meetingId}
      </Typography>
      <Button
        variant="contained"
        onClick={handleToggleMic}
        endIcon={<MicIcon />}
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
      >
        Toggle Mic
      </Button>
      <Button
        variant="contained"
        endIcon={<VideoCameraFrontIcon />}
        onClick={handleToggleWebcam}
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
      >
        Toggle Webcam
      </Button>
      <Button
        variant="contained"
        color="error"
        endIcon={<CallEndIcon />}
        onClick={handleEndMeeting}
        sx={{
          my: 0.5,
          px: 4,
          py: 0.8,
          fontSize: "0.9rem",
          textTransform: "capitalize",
          borderRadius: 1,
        }}
      >
        End Meeting
      </Button>
    </div>
  );
};

export default MediaControlsContainer;
