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
import "./styles.css";

export default function LoginPage() {
  const {
    emailValue,
    setEmailValue,
    passwordValue,
    setPasswordValue,
  } = useCredentials();

  const loginRequest = async (formData) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    };
    const response = await fetch("http://localhost:3000/user/login", options);
    const data = await response.json();
    console.log(data);

    if (response.status == 200) {
      localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    loginRequest({ email: emailValue, password: passwordValue });
    setEmailValue("");
    setPasswordValue("");
  };

  return (
    <div className="login-body">
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <img className="logo" src="src/assets/cat-logo.png" alt="logo" />
        <Typography component="h1" variant="h5" className="sign-in">
          Sign in
        </Typography>
        <TextField
          margin="normal"
          fullWidth
          required
          variant="standard"
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
          variant="standard"
          id="password"
          label="Password"
          name="password"
          autoComplete="current-password"
          onChange={handlePasswordChange}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          className="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          style={{ backgroundColor: "#FFD9C0", color: "black" }}
        >
          Sign In
        </Button>
        <Link href="/register" variant="body2" style={{ color: "black" }}>
          Don't have an account? Sign Up
        </Link>
      </form>
    </div>
  );
}
