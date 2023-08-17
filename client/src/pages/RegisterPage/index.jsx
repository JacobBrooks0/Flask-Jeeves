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
import { useNavigate } from "react-router-dom";
import CatLogo from "../../assets/cat-logo.png";

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

  const navigate = useNavigate();

  const registerRequest = async () => {
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        withCredentials: true,
      },
      body: JSON.stringify({
        first_name: firstNameValue,
        last_name: lastNameValue,
        email: emailValue,
        password: passwordValue,
      }),
    };
    const response = await fetch(
      "https://catcareserver.onrender.com/user",
      options
    );
    const data = await response.json();

    if (response.status == 201) {
      // localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/login");
      setEmailValue("");
      setPasswordValue("");
      setFirstNameValue("");
      setLastNameValue("");
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
    registerRequest();
  };
  return (
    <div className="login-body">
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <img className="logo" src={CatLogo} alt="logo" />
        <Typography
          component="h1"
          variant="h4"
          className="sign-in"
          fontFamily={"'Patua One', sans-serif"}
          sx={{
            fontWeight: "400",
            textAlign: "center",
          }}
        >
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
          type="password"
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
          onClick={registerRequest}
          className="button"
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            px: 4,
            py: 1,
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
          Register
        </Button>
        <Link href="/login" variant="body2" style={{ color: "black" }}>
          Already have an account? Sign In
        </Link>
      </form>
    </div>
  );
}
