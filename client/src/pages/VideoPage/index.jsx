import React, { useState } from "react";
import SpeakerScreenContainer from "./screens/SpeakerScreenContainer";
import ViewerScreenContainer from "./screens/ViewerScreenContainer";
import WelcomeScreenContainer from "./screens/WelcomeScreenContainer";

export default function VideoPage() {
  const [appData, setAppData] = useState({ meetingId: null, mode: null });

  return appData.meetingId ? (
    appData.mode === "CONFERENCE" ? (
      <SpeakerScreenContainer meetingId={appData.meetingId} />
    ) : (
      <ViewerScreenContainer meetingId={appData.meetingId} />
    )
  ) : (
    <WelcomeScreenContainer setAppData={setAppData} />
  );
}
