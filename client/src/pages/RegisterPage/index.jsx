import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useCredentials } from "../../contexts";
import "../LoginPage/styles.css";

export default function RegisterPage() {
  const {
    emailValue,
    setEmailValue,
    passwordValue,
    setPasswordValue,
    firstNameValue,
    setFirstNameValue,
    lastNameValue,
    setLastNameValue,
  } = useCredentials();

  const registerRequest = async (formData) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
      }),
    };
    const response = await fetch(
      "http://localhost:3000/user/register",
      options
    );
    const data = await response.json();

    if (response.status == 201) {
      localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/login");
    } else {
      alert(data.error);
    }
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstNameValue(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastNameValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerRequest({
      email: emailValue,
      password: passwordValue,
      firstName: firstNameValue,
      lastName: lastNameValue,
    });
    setEmailValue("");
    setPasswordValue("");
    setFirstNameValue("");
    setLastNameValue("");
  };
  return (
    <div className="login-body">
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <img className="logo" src="src/assets/cat-logo.png" alt="logo" />
        <Typography component="h1" variant="h5" className="sign-in">
          Register
        </Typography>
        <TextField
          margin="normal"
          fullWidth
          required
          variant="standard"
          value={emailValue}
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={handleEmailChange}
        />
        <TextField
          margin="normal"
          fullWidth
          required
          value={firstNameValue}
          variant="standard"
          id="first-name"
          label="First Name"
          name="first-name"
          autoComplete="first-name"
          autoFocus
          onChange={handleFirstNameChange}
        />
        <TextField
          margin="normal"
          fullWidth
          required
          value={lastNameValue}
          variant="standard"
          id="last-name"
          label="Last Name"
          name="last-name"
          autoComplete="last-name"
          autoFocus
          onChange={handleLastNameChange}
        />
        <TextField
          margin="normal"
          fullWidth
          required
          value={passwordValue}
          variant="standard"
          id="password"
          label="Password"
          name="password"
          autoComplete="current-password"
          onChange={handlePasswordChange}
        />
        <FormControlLabel
          control={<Checkbox value="allowExtraEmails" color="primary" />}
          label="I want to receive inspiration, marketing promotions and updates via email."
        />
        <Button
          type="submit"
          className="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          style={{ backgroundColor: "#FFD9C0", color: "black" }}
        >
          Sign Up
        </Button>
        <Link href="/login" variant="body2" style={{ color: "black" }}>
          Already have an account? Sign In
        </Link>
      </form>
    </div>
  );
}
