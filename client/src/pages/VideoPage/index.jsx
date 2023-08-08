import React, { useState } from "react";
import SpeakerScreenContainer from "./screens/SpeakerScreenContainer";
import WelcomeScreenContainer from "./screens/WelcomeScreenContainer";
import "./styles.css";

export default function VideoPage() {
  const [appData, setAppData] = useState({ meetingId: null, mode: null });

  return appData.meetingId ? (
    <SpeakerScreenContainer
      meetingId={appData.meetingId}
      className="speaker-screen"
    />
  ) : (
    <WelcomeScreenContainer setAppData={setAppData} />
  );
}
