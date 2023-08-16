import { useState } from "react";
import React from "react";
import CatImage from "../../assets/images/pitr-Kitty-icon.svg";
import { useCredentials } from "../../contexts";
import style from "./style.module.css";

export default function CatList({
  cat,
  selectedCat,
  setSelectedCat,
  setErrorText,
}) {
  const { dark, setDark } = useCredentials();

  return (
    <button
      onClick={() => {
        setSelectedCat(cat);
        setErrorText(false);
      }}
      className={style["cat-container"]}
      style={{
        width: "50%",
        border: selectedCat.name === cat.name ? "3px solid #826bf5" : null,
        display: "flex",
        marginTop: "20px",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 10px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          flex: 0.1,
        }}
      >
        <div
          style={{
            width: "90px",
            height: "90px",
            backgroundColor: "black",
            borderRadius: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "90%", height: "90%" }}>
            <CatImage />
          </div>
        </div>
      </div>

      <div
        style={{
          flex: 0.9,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 10px",
        }}
      >
        <h1 style={{ fontFamily: "Jua" }}>
          {cat.name} - {cat.sex}
        </h1>
        <h1
          style={{
            paddingTop: "10px",
            fontFamily: "Jua",
          }}
        >
          {cat.breed}
        </h1>
      </div>
    </button>
  );
}
