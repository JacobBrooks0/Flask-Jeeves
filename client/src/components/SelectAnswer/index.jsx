import React, { useState } from "react";
import style from "./style.module.css";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DoneIcon from "@mui/icons-material/Done";
import Button from "@mui/material/Button";
import { useSymptoms } from "../../contexts";
import { useCredentials } from "../../contexts";

export default function SelectAnswer() {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [selectedTick, setSelectedTick] = React.useState(null);
  const [errorText, setErrorText] = useState(false);
  const { dark, setDark } = useCredentials();
  const {
    questionNumber,
    setQuestionNumber,
    answers,
    setAnswers,
  } = useSymptoms();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setSelectedTick(index);
    errorText ? setErrorText(false) : null;
  };

  const nextQuestion = () => {
    if (selectedTick === null) {
      setErrorText(true);
    } else {
      setAnswers([...answers, selectedIndex + 1]);
      //this may change
      setQuestionNumber(questionNumber + 1);
      setSelectedTick(null);
      setSelectedIndex(null);
    }
  };

  return (
    <div className={style["container"]}>
      {questionNumber == 15 ? (
        <>
          <h2
            className={style["end-of-quiz-text"]}
            style={{
              color: dark ? "whitesmoke" : "#121212",
            }}
          >
            It is important that you seek the correct medical help as our
            calculations may not always be correct. You can book a video
            appointment in with one of our vets or see where local vets are in
            your area by clicking on the right button below.
          </h2>
          <div className={style["buttons-container"]}>
            <Button
              variant="contained"
              sx={{
                mt: 4,
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
              }}
              // onClick={nextQuestion}
            >
              Book A Video Call
            </Button>
            <Button
              variant="contained"
              sx={{
                mt: 4,
                mb: 4,
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
              }}
              // onClick={nextQuestion}
            >
              See A Map of Local Vets
            </Button>
          </div>
        </>
      ) : (
        <>
          <div>
            <List
              component="nav"
              sx={{ color: dark ? "whitesmoke" : "#121212" }}
            >
              <Divider />
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                {console.log(answers)}
                <ListItemText primary="Yes" />
                {selectedTick === 0 ? (
                  <ListItemIcon style={{ color: "green", paddingLeft: "50px" }}>
                    <DoneIcon />
                  </ListItemIcon>
                ) : null}
              </ListItemButton>
              <Divider />
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemText primary="Probably yes" />
                {selectedTick === 1 ? (
                  <ListItemIcon style={{ color: "green", paddingLeft: "50px" }}>
                    <DoneIcon />
                  </ListItemIcon>
                ) : null}
              </ListItemButton>
              <Divider />
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemText primary="I don't know" />
                {selectedTick === 2 ? (
                  <ListItemIcon style={{ color: "green", paddingLeft: "50px" }}>
                    <DoneIcon />
                  </ListItemIcon>
                ) : null}
              </ListItemButton>
              <Divider />
              <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemText primary="Probably not" />
                {selectedTick === 3 ? (
                  <ListItemIcon style={{ color: "green", paddingLeft: "50px" }}>
                    <DoneIcon />
                  </ListItemIcon>
                ) : null}
              </ListItemButton>
              <Divider />
              <ListItemButton
                selected={selectedIndex === 4}
                onClick={(event) => handleListItemClick(event, 4)}
              >
                <ListItemText primary="No" />
                {selectedTick === 4 ? (
                  <ListItemIcon style={{ color: "green", paddingLeft: "50px" }}>
                    <DoneIcon />
                  </ListItemIcon>
                ) : null}
              </ListItemButton>
              <Divider />
            </List>
          </div>
          <div className={style["button-container"]}>
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
              onClick={nextQuestion}
            >
              Submit
            </Button>
            {errorText ? (
              <p className={style["error-text"]}>You must select an answer!</p>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}
