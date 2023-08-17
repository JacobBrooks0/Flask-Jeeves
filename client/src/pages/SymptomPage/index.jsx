import { useState, useEffect } from "react";
import style from "./style.module.css";
import CatList from "../../components/CatList";
import CatRegisterForm from "../../components/CatRegisterForm";
import Button from "@mui/material/Button";
import SymptomForm from "../../components/SymptomForm";
import QuestionContainer from "../../components/QuestionContainer";
import { useSymptoms } from "../../contexts/";
import { useCredentials } from "../../contexts";
import SymptomCat from "../../assets/cat-9152.png";
import { useNavigate } from "react-router-dom";

export default function SymptomPage() {
  const [catData, setCatData] = useState([]);
  const [selectedCat, setSelectedCat] = useState({});
  const [showCatSelectionPage, setShowCatSelectionPage] = useState(true);
  const [errorText, setErrorText] = useState(false);
  const { dark, setDark, profile, setProfile } = useCredentials();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.length === 0 ? navigate("/login") : null;
  }, []);
  const {
    questionNumber,
    setQuestionNumber,
    setAnswers,
    setQuestions,
  } = useSymptoms();

  async function getCats() {
    const response = await fetch("https://catcareserver.onrender.com/pets");
    const array = await response.json();
    const cats = array.filter(
      (cat) => cat.user_id == JSON.parse(localStorage.getItem("user")).id
    );
    setCatData(cats);
  }

  useEffect(() => {
    setQuestionNumber(0);
    setAnswers([]);
    setQuestions([]);
    getCats();
  }, []);

  const goToForm = () => {
    Object.keys(selectedCat).length == 0
      ? setErrorText(true)
      : setShowCatSelectionPage(false);
  };

  return (
    <>
      {showCatSelectionPage ? (
        <div role="container1">
          {catData.length !== 0 ? (
            <>
              <div
                className={style["first-container"]}
                style={{ backgroundColor: dark ? "#121212" : "whitesmoke" }}
              >
                <h1
                  className={style["text"]}
                  style={{ color: dark ? "whitesmoke" : "#121212" }}
                >
                  Choose a registered cat
                </h1>
                <div className={style["registered-div"]}>
                  {catData.map((cat, index) => {
                    return (
                      <CatList
                        index={index}
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
            </>
          ) : null}

          <div
            className={style["second-container"]}
            style={{ backgroundColor: dark ? "#826BF5" : "#D3CCFA" }}
          >
            <h1
              className={style["text"]}
              style={{ color: dark ? "whitesmoke" : "#121212" }}
            >
              Register a cat
            </h1>
            <div className={style["registered-div-second"]}>
              <CatRegisterForm />
              <div className={style["image-container"]}>
                <img className={style["cat-image"]} src={SymptomCat} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={style["main-page"]}>
          <div className={style["top-container"]}>
            <QuestionContainer cat={selectedCat} />
          </div>
          <div
            className={style["bottom-container"]}
            style={{ backgroundColor: dark ? "#826BF5" : "#D3CCFA" }}
          >
            <SymptomForm />
          </div>
        </div>
      )}
    </>
  );
}
