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
  nameToUpdate = "",
  dietToUpdate = "",
  breedToUpdate = "",
  dobToUpdate = "",
  outdoorToUpdate = "",
  neuterToUpdate = "",
  sexToUpdate = "",
  contactWithOtherPetsToUpdate = "",
  id = "",
  update = false,
}) {
  const { dark, setDark, profile, setProfile } = useCredentials();
  const [name, setName] = update ? useState(nameToUpdate) : useState();
  const [breed, setBreed] = update ? useState(breedToUpdate) : useState();
  const [dob, setDob] = update ? useState(dobToUpdate) : useState();
  const [outdoor, setOutdoor] = update
    ? useState(outdoorToUpdate)
    : useState(true);
  const [neutered, setNeutered] = update
    ? useState(neuterToUpdate)
    : useState(true);
  const [sex, setSex] = update ? useState(sexToUpdate) : useState("Male");
  const [diet, setDiet] = update
    ? useState(dietToUpdate)
    : useState("Processed");
  const [contact, setContact] = update
    ? useState(contactWithOtherPetsToUpdate)
    : useState(true);
  const [cat, setCat] = useState({});

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleBreed = (e) => {
    setBreed(e.target.value);
  };
  const handleDob = (value) => {
    setDob(value.toISOString().split("T")[0]);
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
      user_id: JSON.parse(localStorage.getItem("user")).id,
      name: name,
      dob: dob,
      breed: breed,
      outdoor: outdoor,
      neutered: neutered,
      sex: sex,
      diet: diet,
      contactWithOtherPets: contact,
    });

    update ? putCat() : postCat();
  };

  const postCat = async () => {
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        withCredentials: true,
      },
      body: JSON.stringify({
        user_id: JSON.parse(localStorage.getItem("user")).id,
        name: name,
        dob: dob,
        breed: breed,
        outdoor: outdoor,
        neutered: neutered,
        sex: sex,
        diet: diet,
        contactWithOtherPets: contact,
      }),
    };
    const response = await fetch("http://127.0.0.1:5000/pet", options);
    const data = await response.json();
    if (response.status == 201) {
      alert(`Cat registered!`);
      window.location.reload();
    } else {
      alert(data.error);
    }
  };

  const putCat = async (id) => {
    const options = {
      method: "PUT",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        withCredentials: true,
      },
      body: JSON.stringify({
        id: id,
        user_id: JSON.parse(localStorage.getItem("user")).id,
        name: name,
        dob: dob,
        breed: breed,
        outdoor: outdoor,
        neutered: neutered,
        sex: sex,
        diet: diet,
        contactWithOtherPets: contact,
      }),
    };
    const response = await fetch(`http://127.0.0.1:5000/pet/${id}`, options);
    const data = await response.json();
    if (response.status == 200) {
      alert(`Cat Updated!`);
      window.location.reload();
    } else {
      alert(data.error);
    }
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
      >
        {update ? (
          <h2 style={{ fontFamily: "Jua", paddingTop: "30px" }}>
            Update your cat's details
          </h2>
        ) : null}
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
            defaultValue={update ? new Date(dobToUpdate) : null}
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
          defaultValue={
            update
              ? outdoorToUpdate === true
                ? "Outdoor"
                : "Indoor"
              : "Indoor"
          }
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
          defaultValue={
            update ? (outdoorToUpdate === true ? "Yes" : "No") : "Yes"
          }
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
          defaultValue={
            update
              ? contactWithOtherPetsToUpdate === true
                ? "Yes"
                : "No"
              : "Yes"
          }
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
          onClick={handleSubmit}
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
        >
          {update ? "Update" : "Submit"}
        </Button>
      </form>
    </>
  );
}
