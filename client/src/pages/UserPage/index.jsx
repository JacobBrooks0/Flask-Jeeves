import Typography from "@mui/material/Typography";
import { useCredentials } from "../../contexts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { ProfileCat } from "../../components";
import Alex from "../../assets/alex.jpg";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import DoneIcon from "@mui/icons-material/Done";
import { createNewRoom } from "../VideoPage/API";
import CatRegisterForm from "../../components/CatRegisterForm/CatRegisterForm";

export default function UserPage() {
  const { dark, setDark } = useCredentials();
  const [value, onChange] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [time, setTime] = useState();
  const [catData, setCatData] = useState([]);

  async function getCats() {
    const response = await fetch("http://127.0.0.1:5000/pets");
    const array = await response.json();
    const cats = array.filter(
      (cat) => cat.user_id == JSON.parse(localStorage.getItem("user")).id
    );
    setCatData(cats);
  }

  async function postAppointment() {
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        withCredentials: true,
      },
      body: JSON.stringify({
        date: appointmentDate,
        time: time,
        user_id: JSON.parse(localStorage.getItem("user")).id,
      }),
    };
    const response = await fetch("http://127.0.0.1:5000/appointment", options);
    const data = await response.json();
  }

  useEffect(() => {
    getCats();
  }, []);

  const handleOpen = () => {
    onChange();
    setModalOpen(true);
  };
  const handleClose = () => setModalOpen(false);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: dark ? "#121212" : "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleAppointment = async () => {
    const meetingId = await createNewRoom();
    setAppointmentDate({
      date: value,
      time: selectedTime,
      meetingId: meetingId,
    });
    postAppointment();
  };

  useEffect(() => {
    console.log(value);
  }, [value]);
  useEffect(() => {
    console.log(selectedTime);
  }, [selectedTime]);
  useEffect(() => {
    console.log(appointmentDate);
  }, [appointmentDate]);

  const testUser = {
    userId: 1,
    firstName: "Alex",
    lastName: "Earle",
    email: "stinkyal@hotmail.com",
    DOB: "21/12/1970",
    petsId: [1, 2],
  };

  const pets = [
    {
      petId: 1,
      name: "Stan",
      DOB: "04/02/2002",
      breed: "mixed",
      outdoor: true,
      neutered: true,
      sex: "male",
      diet: "processed",
    },
    {
      petId: 2,
      name: "Alfie",
      DOB: "21/04/2002",
      breed: "mixed",
      outdoor: true,
      neutered: true,
      sex: "male",
      diet: "processed",
    },
  ];

  function renderRow(props) {
    const { index, style } = props;

    return (
      <ListItem
        style={{
          backgroundColor: dark ? "#121212" : "white",
          color: dark ? "whitesmoke" : "black",
        }}
        key={index}
        component="div"
        disablePadding
      >
        <ListItemButton>
          <ListItemText
            primary={`${index + 9}:00`}
            color="white"
            onClick={() => setSelectedTime(`${index + 9}:00`)}
          />
          {selectedTime === `${index + 9}:00` ? (
            <DoneIcon style={{ color: "green" }} />
          ) : null}
        </ListItemButton>
      </ListItem>
    );
  }

  return (
    <div
      className="profile-page"
      style={{
        backgroundColor: dark ? "#121212" : "whitesmoke",
        marginBottom: "-100px",
      }}
    >
      <div
        className="top-section"
        style={{
          display: "flex",
          flexDirection: "row",
          paddingRight: "2rem",
          paddingLeft: "2rem",
        }}
      >
        <div
          className="side-section"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: dark ? "#121212" : "whitesmoke",
            paddingTop: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              backgroundColor: dark ? "#826BF5" : "#D3CCFA",
              color: dark ? "whitesmoke" : "#121212",
              fontFamily: "'Jua', sans-serif",
              fontSize: "3rem",
            }}
          >
            {JSON.parse(localStorage.getItem("user")).first_name[0]}
            {JSON.parse(localStorage.getItem("user")).last_name[0]}
          </div>
          <Typography
            variant="h6"
            component="p"
            sx={{
              py: 3,
              px: 3,
              // pl: 6,
              width: "100%",
              display: "block",
              lineHeight: 1.6,
              fontFamily: "Jua",
              textAlign: "center",
              color: dark ? "whitesmoke" : "#121212",
              // borderTop: "1px solid",
              borderColor: dark ? "purple" : "#121212",
            }}
          >
            First Name: {JSON.parse(localStorage.getItem("user")).first_name}
            <br />
            <br />
            Last Name: {JSON.parse(localStorage.getItem("user")).last_name}
            <br />
            <br />
            Email: {JSON.parse(localStorage.getItem("user")).email}
            <br />
            <br />
          </Typography>
        </div>
        <div className="calender-section">
          <Calendar
            onChange={onChange}
            onClickDay={handleOpen}
            showWeekNumbers
            value={value}
            className="calender"
          />
          {catData.map((cat) => {
            return <ProfileCat cat={cat} key={cat.id} />;
          })}
        </div>
      </div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{
              fontFamily: "'Jua', sans-serif",
              color: dark ? "whitesmoke" : "black",
            }}
          >
            Choose a time
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: 300,
              maxWidth: 360,
              pt: 2,
              bgcolor: dark ? "#121212" : "background.paper",
            }}
          >
            <FixedSizeList
              height={260}
              width={360}
              itemSize={46}
              itemCount={8}
              overscanCount={5}
            >
              {renderRow}
            </FixedSizeList>
          </Box>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={handleAppointment}
              sx={{
                my: 0.5,
                px: 4,
                py: 0.8,
                fontSize: "0.9rem",
                textTransform: "capitalize",
                borderRadius: 1,
                borderColor: "#14192d",
                color: "white",
                backgroundColor: "#826BF5",
                "&&:hover": {
                  backgroundColor: "#7958D6",
                },
                "&&:focus": {
                  backgroundColor: "#7958D6",
                },
              }}
            >
              Set Appointment
            </Button>
            <Button
              onClick={handleClose}
              sx={{
                my: 0.5,
                px: 4,
                py: 0.8,
                fontSize: "0.9rem",
                textTransform: "capitalize",
                borderRadius: 1,
                color: "red",
              }}
            >
              Close
            </Button>
          </div>
        </Box>
      </Modal>
      <div
        style={{
          width: "100%",
          backgroundColor: dark ? "#826BF5" : "#D3CCFA",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Jua",
            padding: "40px 20px",
          }}
        >
          Want to register a cat?
        </h1>
        <CatRegisterForm backgroundColor="#D3CCFA" width="100%" />
      </div>
    </div>
  );
}
