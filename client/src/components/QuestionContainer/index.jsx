import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import CatImage from "../../assets/images/pitr-Kitty-icon.svg";
import Tooltip from "@mui/material/Tooltip";
import { useSymptoms } from "../../contexts";
import Results from "../Results";
import { useCredentials } from "../../contexts";

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

  async function getQuestions() {
    const response = await fetch("http://127.0.0.1:5000/variables_questions");
    if (response.status == 200) {
      const data = await response.json();
      setQuestions(data);
    } else {
      console.log("Question fetch failed");
    }
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
      {/* this may change */}
      <div className={style["question-container"]}>
        {questions.length === 0 ? null : questionNumber == 15 ? (
          <Results cat={cat} />
        ) : (
          <h1
            className={style["question-text"]}
            style={{
              backgroundColor: dark ? "#826BF5" : "#D3CCFA",
              color: dark ? "whitesmoke" : "#121212",
            }}
          >
            Q{questionNumber + 1}: {questions[questionNumber]}
          </h1>
        )}
      </div>
    </div>
  );
}
