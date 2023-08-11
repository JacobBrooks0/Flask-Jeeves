import React from "react";
import style from "./style.module.css";
import catImage from "../../assets/images/pitr-Kitty-icon.svg";
import Tooltip from "@mui/material/Tooltip";

export default function QuestionContainer({ cat }) {
  const questions = [
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
  ];

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
            <img className={style["cat-image"]} src={catImage} />
            <div>
              <h3 className={style["cat-text"]}>{cat.name}</h3>
            </div>
          </div>
        </Tooltip>
      </div>
      <div className={style["question-container"]}>
        <h1 className={style["question-text"]}>{questions[0].question}</h1>
      </div>
    </div>
  );
}
