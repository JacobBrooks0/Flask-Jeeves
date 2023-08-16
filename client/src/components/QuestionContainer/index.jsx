import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import CatImage from "../../assets/images/pitr-Kitty-icon.svg";
import Tooltip from "@mui/material/Tooltip";
import { useSymptoms } from "../../contexts";
import Results from "../Results";
import { useCredentials } from "../../contexts";

const questionsTest = [
  {
    question: "Is your cat behaving oddly?",
  },
  {
    question: "Is your cat having runny poos?",
  },
  {
    question: "Is your cat in pain?",
  },
  {
    question:
      "Does your cat look like a dog Does your cat look like a dog? Does your cat look like a dog?Does your cat look like a dog? ?",
  },
  {
    question: "Is your cat behaving oddly?",
  },
  {
    question: "Is your cat having runny poos?",
  },
  {
    question: "Is your cat in pain?",
  },
  {
    question:
      "Does your cat look like a dog Does your cat look like a dog? Does your cat look like a dog?Does your cat look like a dog? ?",
  },
  {
    question: "Is your cat behaving oddly?",
  },
  {
    question: "Is your cat having runny poos?",
  },
  {
    question: "Is your cat in pain?",
  },
  {
    question:
      "Does your cat look like a dog Does your cat look like a dog? Does your cat look like a dog?Does your cat look like a dog? ?",
  },
  {
    question: "Is your cat having runny poos?",
  },
  {
    question: "Is your cat in pain?",
  },
  {
    question:
      "Does your cat look like a dog Does your cat look like a dog? Does your cat look like a dog?Does your cat look like a dog? ?",
  },
];

export default function QuestionContainer({ cat }) {
  const {
    questionNumber,
    setQuestionNumberquestions,
    questions,
    setQuestions,
    answers,
    setAnswers,
  } = useSymptoms();
  const { dark, setDark } = useCredentials();

  useEffect(() => {
    //this may change
    setQuestions(questionsTest);
  }, []);

  const toolTip = `Gender: ${cat.gender}, Breed: ${cat.breed}, DOB: ${cat.dateOfBirth}, Outdoor: ${cat.outdoor}, Neutered: ${cat.neutered}, Diet: ${cat.diet}, Contact with other pets: ${cat.contactWithPets}`;

  //double check this is the response
  //   name: "Kat",
  //   gender: "Female",
  //   breed: "Tabby",
  //   dateOfBirth: "22nd Sept",
  //   outdoor: true,
  //   neutered: true,
  //   diet: "processed",
  //   contactWithPets: true,

  return (
    <div className={style["overall-container"]}>
      <div className={style["main-container"]}>
        <Tooltip title={toolTip}>
          <div className={style["image-container"]}>
            <div className={style["cat-image"]}>
              <CatImage />
            </div>

            <div>
              <h3 className={style["cat-text"]}>{cat.name}</h3>
            </div>
          </div>
        </Tooltip>
      </div>
      {/* this may change */}
      <div className={style["question-container"]}>
        {questions.length === 0 ? null : questionNumber == 15 ? (
          <Results />
        ) : (
          <h1
            className={style["question-text"]}
            style={{
              backgroundColor: dark ? "#826BF5" : "#D3CCFA",
              color: dark ? "whitesmoke" : "#121212",
            }}
          >
            Q{questionNumber + 1}: {questions[questionNumber].question}
          </h1>
        )}
      </div>
    </div>
  );
}
