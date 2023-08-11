import React from "react";
import { useCredentials } from "../../contexts";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./styles.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Alex from "../../assets/alex.jpg";
import Harry from "../../assets/harry.jpg";
import Jacob from "../../assets/jacob.jpg";
import Lais from "../../assets/lais.png";
import Roberta from "../../assets/roberta.png";

export default function AboutPage() {
  const { dark, setDark } = useCredentials();
  return (
    <div
      className="about-page"
      style={{
        backgroundColor: dark ? "#121212" : "whitesmoke",
        color: dark ? "whitesmoke" : "#121212",
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{ fontFamily: "'Jua', sans-serif", mt: 4 }}
      >
        Meet the crew
      </Typography>
      <div className="us">
        <div className="person">
          <img src={Alex} alt="alex" />
          <Typography
            variant="h6"
            component="h6"
            sx={{ fontFamily: "'Jua', sans-serif" }}
          >
            Alex Earle
            <IconButton href="https://github.com/ajearle11">
              <GitHubIcon sx={{ color: dark ? "whitesmoke" : "#121212" }} />
            </IconButton>
          </Typography>
        </div>
        <div className="person">
          <img src={Lais} alt="lais" />
          <Typography
            variant="h6"
            component="h6"
            sx={{ fontFamily: "'Jua', sans-serif" }}
          >
            Lais de Jesus Moraes
            <IconButton href="https://github.com/laisjmvet">
              <GitHubIcon sx={{ color: dark ? "whitesmoke" : "#121212" }} />
            </IconButton>
          </Typography>
        </div>
        <div className="person">
          <img src={Jacob} alt="jacob" />
          <Typography
            variant="h6"
            component="h6"
            sx={{ fontFamily: "'Jua', sans-serif" }}
          >
            Jacob Brooks
            <IconButton href="https://github.com/JacobBrooks0">
              <GitHubIcon sx={{ color: dark ? "whitesmoke" : "#121212" }} />
            </IconButton>
          </Typography>
        </div>
        <div className="person">
          <img src={Roberta} alt="roberta" />
          <Typography
            variant="h6"
            component="h6"
            sx={{ fontFamily: "'Jua', sans-serif" }}
          >
            Roberta Capuano
            <IconButton href="https://github.com/Bibi0506">
              <GitHubIcon sx={{ color: dark ? "whitesmoke" : "#121212" }} />
            </IconButton>
          </Typography>
        </div>
        <div className="person">
          <img src={Harry} alt="harry" />
          <Typography
            variant="h6"
            component="h6"
            sx={{ fontFamily: "'Jua', sans-serif" }}
          >
            Harry Turner-Burns
            <IconButton href="https://github.com/HarryTB2112">
              <GitHubIcon sx={{ color: dark ? "whitesmoke" : "#121212" }} />
            </IconButton>
          </Typography>
        </div>
      </div>
    </div>
  );
}
