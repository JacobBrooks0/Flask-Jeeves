import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import CatImage from "../../assets/images/pitr-Kitty-icon.svg";
import Tooltip from "@mui/material/Tooltip";
import { useSymptoms } from "../../contexts";
import Results from "../Results";
import { useCredentials } from "../../contexts";
import classNames from "classnames";

export default function QuestionContainer({ cat }) {
  const {
    questionNumber,
    setQuestionNumberquestions,
    questions,
    setQuestions,
    answers,
    setAnswers,
    animation,
    setDifferentAnswersIndex,
    differentAnswersIndex,
  } = useSymptoms();
  const { dark, setDark } = useCredentials();

  async function getQuestions() {
    const response = await fetch(
      "https://catcareserver.onrender.com/variables_questions"
    );
    if (response.status == 200) {
      const data = await response.json();
      setQuestions(data);
    } else {
      console.log("Question fetch failed");
    }
  }

  function arrayMap() {
    console.log(questions);
    let pos = questions
      .map(function(e) {
        return e.id;
      })
      .indexOf(35);
    setDifferentAnswersIndex(pos);
  }
  useEffect(() => {
    getQuestions();
  }, []);

  const toolTip = `Gender: ${cat.sex}, Breed: ${cat.breed}, DOB: ${cat.dob}, Outdoor: ${cat.outdoor}, Neutered: ${cat.neutered}, Diet: ${cat.diet}, Contact with other pets: ${cat.contactWithPets}`;

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
      <div className={style["question-container"]}>
        {questions.length === 0 ? null : questionNumber == 15 ? (
          <Results cat={cat} />
        ) : (
          <h1
            className={classNames(
              style["question-text"],
              animation
                ? style["animation-class"]
                : style["animation-class-two"]
            )}
            style={{
              backgroundColor: dark ? "#826BF5" : "#D3CCFA",
              color: dark ? "whitesmoke" : "#121212",
            }}
          >
            {questions.length === 0 ? null : arrayMap()}Q{questionNumber + 1}:{" "}
            {questions[questionNumber].question}
            {console.log(differentAnswersIndex)}
          </h1>
        )}
      </div>
    </div>
  );
}
