import style from "./style.module.css";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Doctor from "../../assets/doctor.png";
import Map from "../../assets/map.png";
import Calender from "../../assets/calender.png";
import { useCredentials } from "../../contexts";
import { useEffect } from "react";

export default function HomePage() {
  const { dark, setDark } = useCredentials();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.length === 0 ? navigate("/login") : null;
  }, []);

  return (
    <>
      <div className={style["first-content"]}>
        <div className={style["first-content-container"]}>
          <h1
            style={{
              margin: "50px 0 20px 0",
              fontFamily: "Patua One",
              fontSize: "48px",
              fontWeight: "500",
            }}
          >
            Let's check your cat!
          </h1>
          <p>
            Our Symptoms Checker will help you understand your cat's problems,
            and we can advise you on the best course of action.
          </p>
          <Button
            variant="contained"
            component={Link}
            to="/symptom"
            sx={{
              mr: 2,
              px: 4,
              py: 1,
              fontSize: "0.9rem",
              textTransform: "capitalize",
              borderRadius: 0,
              borderColor: "#14192d",
              margin: "30px 0",
              color: "whitesmoke",
              backgroundColor: "#826BF5",
              "&&:hover": {
                backgroundColor: "#7958D6",
              },
              "&&:focus": {
                backgroundColor: "#7958D6",
              },
            }}
          >
            Get Started
          </Button>
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
            Book an Appointment
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              py: 3,
              pr: 10,
              display: "block",
              lineHeight: 1.6,
              color: dark ? "whitesmoke" : "#121212",
              textAlign: "justify",
            }}
          >
            Head to your profile page using the link below to book a videochat
            appointment with your vet! <br /> <br /> You can also view your
            account information and the information about your registered cats.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/user"
            sx={{
              mr: 2,
              px: 4,
              py: 1,
              fontSize: "0.9rem",
              textTransform: "capitalize",
              borderRadius: 0,
              borderColor: "#14192d",
              margin: "30px 0",
              color: "whitesmoke",
              backgroundColor: "#826BF5",
              "&&:hover": {
                backgroundColor: "#7958D6",
              },
              "&&:focus": {
                backgroundColor: "#7958D6",
              },
            }}
          >
            Profile
          </Button>
        </div>
        <img src={Doctor} alt="doctor" style={{ height: "350px" }} />
      </div>
      <div
        className="mission"
        style={{
          backgroundColor: dark ? "#121212" : "whitesmoke",
          padding: "3rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          height: "fit-content",
          alignItems: "center",
        }}
      >
        <img
          src={Map}
          alt="map"
          style={{ height: "250px", marginRight: "3rem" }}
        />
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
            Find your nearby vet
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              py: 3,
              pr: 10,
              display: "block",
              lineHeight: 1.6,
              color: dark ? "whitesmoke" : "#121212",
              textAlign: "justify",
            }}
          >
            Head to the map page using the link below to search for veterinarian
            clinics close to your location. <br /> <br /> You can also see
            information about the vets, including their website, contact number
            and rating.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/map"
            sx={{
              mr: 2,
              px: 4,
              py: 1,
              fontSize: "0.9rem",
              textTransform: "capitalize",
              borderRadius: 0,
              borderColor: "#14192d",
              margin: "30px 0",
              color: "whitesmoke",
              backgroundColor: "#826BF5",
              "&&:hover": {
                backgroundColor: "#7958D6",
              },
              "&&:focus": {
                backgroundColor: "#7958D6",
              },
            }}
          >
            Maps
          </Button>
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
          marginBottom: "-100px",
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
            Have your appointment
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              py: 3,
              pr: 10,
              display: "block",
              lineHeight: 1.6,
              color: dark ? "whitesmoke" : "#121212",
              textAlign: "justify",
            }}
          >
            Head to the video appointment page using the link below to access
            your video appointment. <br /> <br /> You can view when your next
            appointment is and any information about it.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/video"
            sx={{
              mr: 2,
              px: 4,
              py: 1,
              fontSize: "0.9rem",
              textTransform: "capitalize",
              borderRadius: 0,
              borderColor: "#14192d",
              margin: "30px 0",
              color: "whitesmoke",
              backgroundColor: "#826BF5",
              "&&:hover": {
                backgroundColor: "#7958D6",
              },
              "&&:focus": {
                backgroundColor: "#7958D6",
              },
            }}
          >
            Appointments
          </Button>
        </div>
        <img src={Calender} alt="calender" style={{ height: "250px" }} />
      </div>
    </>
  );
}
