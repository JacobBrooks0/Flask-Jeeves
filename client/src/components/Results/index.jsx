import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import spinner from "../../assets/images/ConventionalOblongFairybluebird-size_restricted.gif";
import { useCredentials } from "../../contexts";
import { useSymptoms } from "../../contexts";

export default function Results({ cat }) {
  const [calculating, setCalculating] = useState(true);
  const { dark, setDark } = useCredentials();
  const { questions, answers } = useSymptoms();
  const [illness, setIllness] = useState("");

  async function postDiary() {
    const questionIds = questions.map((question) => {
      return question.id;
    });
    console.log(questionIds);
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        questionsArray: questionIds,
        answersArray: answers,
        pet_id: cat.id,
      }),
    };
    const response = await fetch(
      "https://catcareserver.onrender.com/diary",
      options
    );
    if (response.status == 201) {
      const data = await response.json();
      getDiary(data.instance_id);
    } else {
      console.log("Diary post failed");
    }
  }

  async function getDiary(id) {
    const response = await fetch(
      `https://catcareserver.onrender.com/diary/${id}`
    );
    if (response.status == 200) {
      const data = await response.json();
      setIllness(data.possiblesDiagnosis);
      setCalculating(false);
      console.log(data);
    } else {
      console.log("Could not fetch diary");
    }
  }

  useEffect(() => {
    postDiary();
  }, []);

  return (
    <>
      {calculating ? (
        <img
          role="image"
          src={spinner}
          style={{ width: "150px", height: "150px" }}
        />
      ) : (
        <div
          className={style["question-text"]}
          style={{
            backgroundColor: dark ? "#826BF5" : "#D3CCFA",
            opacity: "90%",
          }}
        >
          <p
            style={{
              color: dark ? "whitesmoke" : "#121212",
              fontFamily: "Roboto",
            }}
          >
            We believe your cat could be suffering with one of:{" "}
            <strong>
              {illness[0]}, {illness[1]}
            </strong>{" "}
            or <strong> {illness[2]}</strong>.
          </p>
          {/* <p
            style={{
              color: dark ? "whitesmoke" : "#121212",
              fontFamily: "Roboto",
            }}
          >
            We believe your cat could be suffering with one of:{" "}
            <strong>Flea Allergy, Atopic Dermatitis</strong> or{" "}
            <strong> Scabies</strong>.
          </p> */}
        </div>
      )}
    </>
  );
}
