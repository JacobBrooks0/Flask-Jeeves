import { useState } from "react";
import style from "./style.module.css";
import CatList from "../../components/CatList";
import CatRegisterForm from "../../components/CatRegisterForm";
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
  {
    name: "Squirtle",
    gender: "Male",
    breed: "Siamese",
  },
  {
    name: "Meowth",
    gender: "Female",
    breed: "Tabby",
  },
  {
    name: "Persian",
    gender: "Male",
    breed: "Siamese",
  },
];

export default function SymptomPage() {
  const [catData, setCatData] = useState(testData);
  const [selectedCat, setSelectedCat] = useState({});

  const goToForm = () => {
    // Object.keys(selected).length == 0 ? Error : do a thing
  };

  return (
    <div>
      <div className={style["first-container"]}>
        <h1 className={style["text"]}>Choose a registered cat</h1>
        <div className={style["registered-div"]}>
          {catData.map((cat) => {
            return (
              <CatList
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
            my: 4,
            // mx: 2,
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
          // onClick={goToForm}
        >
          Check Symptoms
        </Button>
      </div>
      <div className={style["second-container"]}>
        <h1 className={style["text"]}>Register a cat</h1>
        <div className={style["registered-div"]}>
          <CatRegisterForm />
        </div>
      </div>
    </div>
  );
}
