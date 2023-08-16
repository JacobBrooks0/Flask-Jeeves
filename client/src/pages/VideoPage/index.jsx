import React, { useState, useEffect } from "react";
import SpeakerScreenContainer from "./screens/SpeakerScreenContainer";
import WelcomeScreenContainer from "./screens/WelcomeScreenContainer";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function VideoPage() {
  const [appData, setAppData] = useState({ meetingId: null, mode: null });
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.length === 0 ? navigate("/login") : null;
  }, []);

  return appData.meetingId ? (
    <SpeakerScreenContainer
      meetingId={appData.meetingId}
      className="speaker-screen"
    />
  ) : (
    <WelcomeScreenContainer setAppData={setAppData} />
  );
}
