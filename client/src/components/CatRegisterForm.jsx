import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

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

export default function CatRegisterForm() {
  return (
    <>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          variant="filled"
          label="Name"
          onChange={(e) => e.target.value}
          value=""
          color="secondary"
          sx={{
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
          }}
        />
        <TextField
          variant="filled"
          label="Date of Birth"
          onChange={(e) => e.target.value}
          value=""
          color="secondary"
          sx={{
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
          }}
        />
        <TextField
          variant="filled"
          label="Breed"
          onChange={(e) => e.target.value}
          value=""
          color="secondary"
          sx={{
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
          }}
        />
        <TextField
          variant="filled"
          label="Outdoor/Indoor"
          select
          defaultValue="Outdoor"
          color="secondary"
          sx={{
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
            width: "100%",
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
          onChange={(e) => e.target.value}
          value=""
          color="secondary"
          sx={{
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
          }}
        />
        <TextField
          variant="filled"
          label="Sex"
          onChange={(e) => e.target.value}
          value=""
          color="secondary"
          sx={{
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
          }}
        />
        <TextField
          variant="filled"
          label="Diet"
          onChange={(e) => e.target.value}
          value=""
          color="secondary"
          sx={{
            backgroundColor: "whitesmoke",
            borderRadius: "5px",
          }}
        />
        {/* <Button onClick={() => null}>Submit</Button>
        <Button onClick={() => null}>Reset</Button> */}
      </form>
    </>
  );
}
