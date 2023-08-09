import { PrettyChatWindow } from "react-chat-engine-pretty";

export default function ChatPage(props) {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={'3197f979-6bc0-42eb-be4f-5785fbac2c44'}
        username={'adam'} // adam
        secret={'pass1234'} // pass1234
        style={{ height: "100%" }}
      />
    </div>
  );
};


