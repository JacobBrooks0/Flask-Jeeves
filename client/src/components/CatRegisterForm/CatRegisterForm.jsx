import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import style from "./style.module.css";

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

export default function CatRegisterForm() {
  return (
    <>
      <form
        style={{
          display: "flex",
          width: "50%",
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
            width: "75%",
            marginTop: "20px",
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
            width: "75%",
            marginTop: "40px",
          }}
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date of Birth"
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
        <TextField
          variant="filled"
          label="Sex"
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
