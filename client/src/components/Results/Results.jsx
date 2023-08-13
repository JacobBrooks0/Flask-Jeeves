import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import spinner from "../../assets/images/ConventionalOblongFairybluebird-size_restricted.gif";
import { useCredentials } from "../../contexts";

export default function Results() {
  const [calculating, setCalculating] = useState(true);
  const { dark, setDark } = useCredentials();

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
        <div
          className={style["question-text"]}
          style={{
            backgroundColor: dark ? "#826BF5" : "#D3CCFA",
            opacity: "90%",
          }}
        >
          <p style={{ color: dark ? "whitesmoke" : "#121212" }}>
            We believe your cat could be suffering with a Urinary Tract
            Infection.
          </p>
        </div>
      )}
    </>
  );
}
