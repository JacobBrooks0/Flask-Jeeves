import { useState, useEffect } from "react";
import style from "./style.module.css";
import CatList from "../../components/CatList";
import CatRegisterForm from "../../components/CatRegisterForm/CatRegisterForm";
import Button from "@mui/material/Button";

const testData = [
  {
    name: "Kat",
    gender: "Female",
    breed: "Tabby",
  },
  {
    name: "Harry",
    gender: "Male",
    breed: "Siamese",
  },
  {
    name: "Peter",
    gender: "Female",
    breed: "Tabby",
  },
];

export default function SymptomPage() {
  const [catData, setCatData] = useState(testData);
  const [selectedCat, setSelectedCat] = useState({});
  const [showCatSelectionPage, setShowCatSelectionPage] = useState(true);
  const [errorText, setErrorText] = useState(false);

  const goToForm = () => {
    Object.keys(selectedCat).length == 0
      ? setErrorText(true)
      : setShowCatSelectionPage(false);
  };

  return (
    <>
      {showCatSelectionPage ? (
        <div>
          <div className={style["first-container"]}>
            <h1 className={style["text"]}>Choose a registered cat</h1>
            <div className={style["registered-div"]}>
              {catData.map((cat) => {
                return (
                  <CatList
                    setErrorText={setErrorText}
                    cat={cat}
                    selectedCat={selectedCat}
                    setSelectedCat={setSelectedCat}
                  />
                );
              })}
            </div>
            <Button
              variant="contained"
              sx={{
                mt: 4,
                mb: !errorText ? 4 : null,
                px: 4,
                py: 0.8,
                fontSize: "0.9rem",
                textTransform: "capitalize",
                borderRadius: 1,
                borderColor: "#14192d",
                color: "#fff",
                backgroundColor: "#826BF5",
                "&&:hover": {
                  backgroundColor: "#7958D6",
                },
                "&&:focus": {
                  backgroundColor: "#7958D6",
                },
              }}
              onClick={goToForm}
            >
              Check Symptoms
            </Button>
            {errorText ? (
              <p className={style["error-text"]}>You must select a cat!</p>
            ) : null}
          </div>
          <div className={style["second-container"]}>
            <h1 className={style["text"]}>Register a cat</h1>
            <div className={style["registered-div-second"]}>
              <CatRegisterForm />
              <div className={style["image-container"]}>
                <img
                  className={style["cat-image"]}
                  src="src/assets/cat-9152.png"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Hi</div>
      )}
    </>
  );
}
