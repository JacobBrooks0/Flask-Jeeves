import React, { useEffect, useState, useRef } from "react";
import ChatBot from "react-simple-chatbot";
import { Configuration, OpenAIApi } from "openai";
import ForumIcon from "@mui/icons-material/Forum";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import style from "./style.module.css";
import TextField from "@mui/material/TextField";
import CatImage from "../../assets/Slack_cvYDvhxcxn.png";
import PersonIcon from "@mui/icons-material/Person";
import { motion } from "framer-motion";

export default function CatBot() {
  const [modalOpen, setModalOpen] = useState(false);
  const [botLoader, setBotLoader] = useState(true);
  const [messagesArray, setMessagesArray] = useState([]);
  const styles = { backgroundColor: "#826bf5" };
  const [botResponse, setBotResponse] = useState(
    `Hi! Can you tell me what is wrong with your cat today? It's important to understand that I am just a bot! My advice isn't always going to be 100% right, so make sure you seek help from a real vet. Explore the website to see how you can book an appointment.`
  );

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

    setMessagesArray([
      ...messagesArray,
      { message: data.choices[0].message.content, user: false },
    ]);
  };

  const [chatBotMessageList, setChatBotMessageList] = useState(
    "Hi my cat is sick"
  );
  const [inputValue, setInputValue] = useState("");

  const handleInputSubmit = () => {
    setBotLoader(true);
    setChatBotMessageList(inputValue);
    setMessagesArray([...messagesArray, { message: inputValue, user: true }]);
    setInputValue("");
    setTimeout(() => {
      setBotLoader(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const openModalHandler = () => {
    setTimeout(() => {
      setBotLoader(false);
    }, 3000);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    setBotLoader(true);
    setChatBotMessageList(inputValue);
    setMessagesArray([...messagesArray, { message: inputValue, user: true }]);
    setInputValue("");
    setTimeout(() => {
      setBotLoader(false);
    }, 3000);
  };

  useEffect(() => {
    setMessagesArray([{ message: botResponse, user: false }]);
  }, []);

  const ref = useRef(null);

  useEffect(() => {
    if (messagesArray.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messagesArray]);

  useEffect(() => {
    openAIFunc(chatBotMessageList);
  }, [chatBotMessageList]);

  return (
    <>
      {!modalOpen ? (
        <button
          role="button"
          className={style["catbot-container"]}
          onClick={() => {
            setModalOpen(true);
            openModalHandler();
          }}
        >
          <ForumIcon style={{ color: "whitesmoke" }} />
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className={style["catbot-modal"]} role="container">
            <div
              style={{
                width: "100%",
                height: "10%",
                backgroundColor: "#826bf5",
                color: "white",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "20px 20px 0  0",
                padding: "0 20px",
              }}
            >
              <h2 style={{ fontFamily: "Patua One", fontWeight: "300" }}>
                Catbot
              </h2>
              <IconButton>
                <CloseIcon
                  style={{ color: "whitesmoke" }}
                  onClick={() => setModalOpen(false)}
                />
              </IconButton>
            </div>
            <div
              id="message-overflow"
              style={{
                width: "100%",
                height: "80%",
                backgroundColor: "#eee",
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <>
                {messagesArray.map((message, index) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: message.user
                          ? "flex-end"
                          : "flex-start",
                        padding: message.user
                          ? "20px 20px 20px 90px"
                          : "20px 90px 20px 20px",
                      }}
                    >
                      {!message.user ? (
                        <div
                          style={{
                            width: "60px",
                            height: "60px",

                            backgroundColor: "#D3CCFA",
                            borderRadius: "10px 0 10px  0",
                          }}
                        >
                          <img
                            style={{ height: "60px", width: "60px" }}
                            src={CatImage}
                          />
                        </div>
                      ) : null}
                      <p
                        className={style["messsage-text"]}
                        style={{
                          fontFamily: "Patua One",
                          fontSize: "14px",
                          backgroundColor: "#d3ccfa",
                          marginRight: message.user ? "15px" : null,
                          marginLeft: !message.user ? "15px" : null,
                          padding: "15px",
                          height: "fit-content",
                          borderRadius: "0 10px 0 10px ",
                        }}
                      >
                        {botLoader && messagesArray.length - 1 === index ? (
                          <p>Loading...</p>
                        ) : (
                          <>
                            {messagesArray.length == 0 ? null : message.message}
                          </>
                        )}
                      </p>
                      {message.user ? (
                        <div
                          style={{
                            width: "60px",
                            height: "60px",
                            backgroundColor: "#D3CCFA",
                            borderRadius: "10px 0 10px  0",
                          }}
                        >
                          <PersonIcon
                            style={{
                              color: "#826bf5",
                              height: "60px",
                              width: "60px",
                            }}
                          />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
                <div ref={ref} />
              </>
            </div>
            <form
              onSubmit={handleFormSubmission}
              style={{
                width: "100%",
                height: "10%",
                display: "flex",
                borderTop: "1px solid #826bf5",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 20px 0 10px",
              }}
            >
              <TextField
                id="standard-basic"
                variant="standard"
                color="secondary"
                onChange={handleChange}
                value={inputValue}
                style={{
                  width: "80%",
                  paddingLeft: "10px",
                }}
              />
              <IconButton onClick={handleInputSubmit}>
                <SendIcon />
              </IconButton>
            </form>
          </div>
        </motion.div>
      )}
    </>
  );
}
