import React, { useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import { Configuration, OpenAIApi } from "openai";

export default function CatBot() {
  const styles = { backgroundColor: "#826bf5" };

  const steps = [
    {
      id: "1",
      message: "Hi! Can you tell me what is wrong with your cat today?",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: 1, label: "Gastrointestinal", trigger: "3" },
        { value: 2, label: "Respiratory", trigger: "3" },
        { value: 3, label: "Respiratory", trigger: "3" },
        // { value: 4, label: "Urinal", trigger: "5" },
        // { value: 5, label: "Dermatological", trigger: "6" },
        // { value: 6, label: "Musculoskeletal", trigger: "7" },
        // { value: 7, label: "Neurological", trigger: "8" },
        // { value: 8, label: "Ocular", trigger: "9" },
        // { value: 9, label: "I Don't know", trigger: "10" },
      ],
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you!",
      end: true,
    },
  ];

  const openAIFunc = async () => {
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
            content: "Hello! My Cat is being sick",
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
  };

  // useEffect(() => {
  //   openAIFunc();
  // }, []);

  return (
    <>
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
