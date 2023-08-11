import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import spinner from "../../assets/images/ConventionalOblongFairybluebird-size_restricted.gif";

export default function Results() {
  const [calculating, setCalculating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCalculating(false);
    }, 2000);
  }, []);

  return (
    <>
      {calculating ? (
        <img src={spinner} style={{ width: "150px", height: "150px" }} />
      ) : (
        <div className={style["question-text"]}>
          <p>
            We believe your cat could be suffering with a Urinary Tract
            Infection.
          </p>
        </div>
      )}
    </>
  );
}
