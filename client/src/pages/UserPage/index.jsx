import Typography from "@mui/material/Typography";
import { useCredentials } from "../../contexts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { ProfileCat } from "../../components";

export default function UserPage() {
  const { dark, setDark } = useCredentials();
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    console.log(value);
  }, [value]);

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
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          className="side-section"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: dark ? "#826BF5" : "#D3CCFA",
            paddingTop: "50px",
          }}
        >
          <img
            src="src/assets/alex.jpg"
            alt="user picture"
            style={{ width: "80%", borderRadius: "50%", marginBottom: "2rem" }}
          />
          <Typography
            variant="h6"
            component="p"
            sx={{
              py: 3,
              pl: 6,
              width: "100%",
              display: "block",
              lineHeight: 1.6,
              color: dark ? "whitesmoke" : "#121212",
              borderTop: "1px dotted",
              borderColor: dark ? "purple" : "#121212",
            }}
          >
            First Name: {testUser.firstName}
            <br />
            Last Name: {testUser.lastName}
            <br />
            Email: {testUser.email}
            <br />
            DOB: {testUser.DOB}
            <br />
          </Typography>
        </div>
        <div className="calender-section">
          <Calendar
            onChange={onChange}
            showWeekNumbers
            value={value}
            className="calender"
          />
          {pets.map((pet) => {
            return <ProfileCat cat={pet} key={pet.petId} />;
          })}
        </div>
      </div>
    </div>
  );
}
