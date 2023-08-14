import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { useCredentials } from "../../contexts";

const outdoorProps = [
  {
    value: "Outdoor",
  },
  {
    value: "Indoor",
  },
];

const genderProps = [
  {
    value: "Male",
  },
  {
    value: "Female",
  },
];

const neuteredProps = [
  {
    value: "Yes",
  },
  {
    value: "No",
  },
];

const dietProps = [
  {
    value: "Processed",
  },
  {
    value: "Natural",
  },
  {
    value: "Mixed",
  },
];

// error={text === ""}

export default function CatRegisterForm({
  width = "50%",
  backgroundColor = "#D3CCFA",
}) {
  const { dark, setDark } = useCredentials();
  const [name, setName] = useState();
  const [breed, setBreed] = useState();
  const [dob, setDob] = useState();
  const [outdoor, setOutdoor] = useState(true);
  const [neutered, setNeutered] = useState(true);
  const [sex, setSex] = useState("Male");
  const [diet, setDiet] = useState("Processed");
  const [contact, setContact] = useState(true);
  const [cat, setCat] = useState({});

  const handleName = (e) => {
    e.target.value ? setName(e.target.value) : "loading";
  };
  const handleBreed = (e) => {
    setBreed(e.target.value);
  };
  const handleDob = (value) => {
    setDob(value.toLocaleDateString("en-GB"));
  };
  const handleOutdoor = (e) => {
    setOutdoor(e.target.value === "Indoor" ? false : true);
  };
  const handleNeutered = (e) => {
    setNeutered(e.target.value === "No" ? false : true);
  };
  const handleSex = (e) => {
    setSex(e.target.value);
  };
  const handleDiet = (e) => {
    setDiet(e.target.value);
  };
  const handleContact = (e) => {
    setContact(e.target.value === "No" ? false : true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCat({
      user_id: 1,
      name: name,
      dob: dob,
      breed: breed,
      outdoor: outdoor,
      neutered: neutered,
      sex: sex,
      diet: diet,
      contact: contact,
    });
    console.log(cat);
  };

  return (
    <>
      <form
        style={{
          display: "flex",
          width: width,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: dark ? "#826BF5" : backgroundColor,
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          variant="filled"
          label="Name"
          onChange={handleName}
          value={name}
          color="secondary"
          sx={{
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
            width: "75%",
            marginTop: "20px",
          }}
        />
        <TextField
          variant="filled"
          label="Breed"
          onChange={handleBreed}
          value={breed}
          color="secondary"
          sx={{
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
            width: "75%",
            marginTop: "40px",
          }}
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date of Birth"
            onChange={(value) => handleDob(value)}
            format="dd/MM/yyyy"
            slotProps={{
              textField: {
                variant: "filled",
                color: "secondary",
                style: {
                  backgroundColor: "whitesmoke",
                  borderRadius: "5px",
                  width: "75%",
                  marginTop: "40px",
                },
              },
            }}
          />
        </LocalizationProvider>
        <TextField
          variant="filled"
          label="Outdoor/Indoor"
          onChange={handleOutdoor}
          select
          defaultValue="Outdoor"
          color="secondary"
          sx={{
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
            marginTop: "40px",
            width: "75%",
          }}
        >
          {outdoorProps.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          variant="filled"
          label="Neutered"
          onChange={handleNeutered}
          select
          defaultValue="Yes"
          color="secondary"
          sx={{
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
            marginTop: "40px",
            width: "75%",
          }}
        >
          {neuteredProps.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              onChange={handleNeutered}
            >
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          variant="filled"
          label="Sex"
          onChange={handleSex}
          value={sex}
          select
          defaultValue="Male"
          color="secondary"
          sx={{
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
            marginTop: "40px",
            width: "75%",
          }}
        >
          {genderProps.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          variant="filled"
          label="Diet"
          onChange={handleDiet}
          value={diet}
          select
          defaultValue="Processed"
          color="secondary"
          sx={{
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
            marginTop: "40px",
            width: "75%",
          }}
        >
          {dietProps.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          variant="filled"
          label="Contact with other Pets"
          onChange={handleContact}
          select
          defaultValue="Yes"
          color="secondary"
          sx={{
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
            marginTop: "40px",
            width: "75%",
          }}
        >
          {neuteredProps.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>

        <Button
          variant="contained"
          type="submit"
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
          Submit
        </Button>
      </form>
    </>
  );
}
