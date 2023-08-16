import React, { useEffect, useState } from "react";
import ChatBot from "react-simple-chatbot";
import { Configuration, OpenAIApi } from "openai";

export default function CatBot() {
  const styles = { backgroundColor: "#826bf5" };
  const [botResponse, setBotResponse] = useState(
    `Hi! Can you tell me what is wrong with your cat today? It's important to understand that I am just a bot! My advice isn't always going to be 100% right, so make sure you seek help from a real vet. Explore the website to see how you can book an appointment.`
  );
  const [responseFromAI, setResponseFromAI] = useState("G");

  const openAIFunc = async (value) => {
    const bearer = "Bearer " + import.meta.env.VITE_OPENAI_KEY;
    const options = {
      method: "POST",
      cors: "cors",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo-0301",
        messages: [
          {
            role: "system",
            content:
              "You are a veterinarian whose job it is to cure my cat's illness",
          },
          {
            role: "user",
            content: value,
          },
        ],
      }),
    };

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );

    const data = await response.json();
    console.log(data.choices[0].message.content);
    setResponseFromAI(data.choices[0].message.content);
  };

  const steps = [
    {
      id: "1",
      message: botResponse,
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: 3,
    },
    {
      id: "3",
      delay: 7000,
      message: ({ previousValue, steps }) => {
        setChatBotMessageList(previousValue);
        // return "I'm just having a think";
      },
      trigger: 4,
    },
    {
      id: "4",
      message: responseFromAI,
      trigger: 5,
    },
    {
      id: "5",
      user: true,
      trigger: 3,
    },
  ];

  const [chatBotMessageList, setChatBotMessageList] = useState(
    "Hi my cat is sick"
  );

  useEffect(() => {
    openAIFunc(chatBotMessageList);
  }, [chatBotMessageList]);

  return (
    <>
      {botResponse}
      <ChatBot
        style={{ zIndex: 10000 }}
        floating
        floatingStyle={styles}
        headerTitle="CatBot"
        className="chatbot"
        bubbleStyle={styles}
        bubbleOptionStyle={styles}
        steps={steps}
      />
    </>
  );
}

