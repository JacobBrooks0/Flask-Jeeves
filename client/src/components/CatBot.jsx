import React from "react";
import ChatBot from "react-simple-chatbot";

export default function CatBot() {
  const styles = { backgroundColor: "#7CAECA" };

  const steps = [
    {
      id: "1",
      message: "What is wrong with your cat?",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: 1, label: "Gastrointestinal", trigger: "3" },
        { value: 2, label: "Respiratory", trigger: "4" },
        { value: 4, label: "Urinal", trigger: "5" },
        { value: 5, label: "Dermatological", trigger: "6" },
        { value: 6, label: "Musculoskeletal", trigger: "7" },
        { value: 7, label: "Neurological", trigger: "8" },
        { value: 8, label: "Ocular", trigger: "9" },
        { value: 9, label: "I Don't know", trigger: "10" },
      ],
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you!",
      end: true,
    },
    {
      id: "4",
      message: "Hi {previousValue}, nice to meet you!",
      end: true,
    },
    {
      id: "5",
      message: "Hi {previousValue}, nice to meet you!",
      end: true,
    },
    {
      id: "6",
      message: "Hi {previousValue}, nice to meet you!",
      end: true,
    },
    {
      id: "7",
      message: "Hi {previousValue}, nice to meet you!",
      end: true,
    },
    {
      id: "8",
      message: "Hi {previousValue}, nice to meet you!",
      end: true,
    },
    {
      id: "9",
      message: "Hi {previousValue}, nice to meet you!",
      end: true,
    },
    {
      id: "10",
      message: "Hi {previousValue}, nice to meet you!",
      end: true,
    },
  ];

  // import openai

  // openai.api_key = "YOUR_API_KEY"

  // completion = openai.ChatCompletion.create(
  //   model = "gpt-3.5-turbo",
  //   temperature = 0.8,
  //   max_tokens = 2000,
  //   messages = [
  //     {"role": "system", "content": "You are a funny comedian who tells dad jokes."},
  //     {"role": "user", "content": "Write a dad joke related to numbers."},
  //     {"role": "assistant", "content": "Q: How do you make 7 even? A: Take away the s."},
  //     {"role": "user", "content": "Write one related to programmers."}
  //   ]
  // )

  // print(completion.choices[0].message)
  // JS version of this model for use in this project using the answer provided above

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
