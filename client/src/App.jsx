import { useState } from "react";
import "./App.css";
import ChatBot from "react-simple-chatbot";

function App() {
  const styles = { backgroundColor: "#7CAECA" };

  const steps = [
    {
      id: "1",
      message: "What is your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you!",
      end: true,
    },
  ];

  return (
    <>
      <ChatBot
        floating
        headerTitle="CatBot"
        className="chatbot"
        bubbleStyle={styles}
        bubbleOptionStyle={styles}
        steps={steps}
      />
    </>
  );
}

export default App;
