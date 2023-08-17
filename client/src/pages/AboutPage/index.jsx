import React, { useEffect } from "react";
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
import MissionCat from "../../assets/mission-cat.png";
import { Carousel } from "react-carousel-minimal";
import Cat1 from "../../assets/carousel/cat1.jpg";
import Cat2 from "../../assets/carousel/cat2.jpg";
import Cat3 from "../../assets/carousel/cat3.jpg";
import Cat4 from "../../assets/carousel/cat4.jpg";
import Cat5 from "../../assets/carousel/cat5.jpg";
import Cat6 from "../../assets/carousel/cat6.jpg";
import Cat7 from "../../assets/carousel/cat7.jpg";
import Cat8 from "../../assets/carousel/cat8.jpg";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const { dark, setDark } = useCredentials();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.length === 0 ? navigate("/login") : null;
  }, []);
  const data = [
    {
      image: Cat1,
      caption: "Francis",
    },
    { image: Cat2, caption: "Felicia" },
    { image: Cat3, caption: "Graham" },
    { image: Cat4, caption: "Juan" },
    { image: Cat5, caption: "Charlotte" },
    { image: Cat6, caption: "Stuart" },
    { image: Cat7, caption: "Elize" },
    { image: Cat8, caption: "Aimee" },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    fontFamily: "'Patua One', sans-serif",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div
      className="about-page"
      style={{
        backgroundColor: dark ? "#121212" : "whitesmoke",
        color: dark ? "whitesmoke" : "#121212",
      }}
    >
      <div
        className="meetus"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingLeft: "5rem",
          paddingRight: "5rem",
          marginBottom: "3rem",
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{ fontFamily: "'Patua One', sans-serif", mt: 4 }}
        >
          Meet the crew
        </Typography>
        <div className="us">
          <div className="person">
            <img src={Alex} alt="alex" />
            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontFamily: "'Patua One', sans-serif",
                display: "flex",
                flexDirection: "row",
              }}
            >
              Alex Earle
              <IconButton
                name="Alex"
                onClick={() => window.open(`https://github.com/ajearle11`)}
              >
                <GitHubIcon sx={{ color: dark ? "whitesmoke" : "#121212" }} />
              </IconButton>
            </Typography>
          </div>
          <div className="person">
            <img src={Lais} alt="lais" />
            <Typography
              variant="h6"
              component="h6"
              sx={{ fontFamily: "'Patua One', sans-serif" }}
            >
              Lais de Jesus Moraes
              <IconButton
                onClick={() => window.open(`https://github.com/laisjmvet`)}
              >
                <GitHubIcon sx={{ color: dark ? "whitesmoke" : "#121212" }} />
              </IconButton>
            </Typography>
          </div>
          <div className="person">
            <img src={Jacob} alt="jacob" />
            <Typography
              variant="h6"
              component="h6"
              sx={{ fontFamily: "'Patua One', sans-serif" }}
            >
              Jacob Brooks
              <IconButton
                onClick={() => window.open(`https://github.com/JacobBrooks0`)}
              >
                <GitHubIcon sx={{ color: dark ? "whitesmoke" : "#121212" }} />
              </IconButton>
            </Typography>
          </div>
          <div className="person">
            <img src={Roberta} alt="roberta" />
            <Typography
              variant="h6"
              component="h6"
              sx={{ fontFamily: "'Patua One', sans-serif" }}
            >
              Roberta Capuano
              <IconButton
                onClick={() => window.open(`https://github.com/Bibi0506`)}
              >
                <GitHubIcon sx={{ color: dark ? "whitesmoke" : "#121212" }} />
              </IconButton>
            </Typography>
          </div>
          <div className="person">
            <img src={Harry} alt="harry" />
            <Typography
              variant="h6"
              component="h6"
              sx={{ fontFamily: "'Patua One', sans-serif" }}
            >
              Harry Turner-Burns
              <IconButton
                onClick={() => window.open(`https://github.com/HarryTB2112`)}
              >
                <GitHubIcon sx={{ color: dark ? "whitesmoke" : "#121212" }} />
              </IconButton>
            </Typography>
          </div>
        </div>
      </div>
      <div
        className="mission"
        style={{
          backgroundColor: dark ? "#7958D6" : "#D3CCFA",
          padding: "3rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          height: "fit-content",
          alignItems: "center",
          marginBottom: "3rem",
        }}
      >
        <div style={{ width: "50%" }}>
          <Typography
            variant="h3"
            component="header"
            sx={{
              fontFamily: "'Patua One', sans-serif",
              color: dark ? "whitesmoke" : "#121212",
              fontSize: "3rem",
            }}
          >
            Our mission
          </Typography>
          <Typography
            variant="h6"
            component="p"
            style={{ textAlign: "justify" }}
            sx={{
              py: 3,
              pr: 10,
              display: "block",
              lineHeight: 1.6,
              color: dark ? "whitesmoke" : "#121212",
            }}
          >
            Our aim is to make looking after your cat easy and stress free. We
            have used real veterinary expertise to create a program that can
            diagnose your cat from the symptoms you provide. Needless to say
            that this does not replace a real veterinary appointment, so if the
            problem is serious, you must go and see a vet. <br /> <br /> We have
            made the process even easier for you by allowing you to book video
            calls with a vet and view nearby veterinarian practices and their
            information!
          </Typography>
        </div>
        <img src={MissionCat} alt="cat" style={{ height: "500px" }} />
      </div>
      <div style={{ textAlign: "center", height: "900px" }}>
        <Typography
          variant="h3"
          component="header"
          sx={{
            fontFamily: "'Patua One', sans-serif",
            color: dark ? "whitesmoke" : "#121212",
            fontSize: "3rem",
          }}
        >
          Gallery
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            py: 3,
            display: "block",
            lineHeight: 1.6,
            color: dark ? "whitesmoke" : "#121212",
          }}
        >
          Enjoy some serotonin!
        </Typography>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}
