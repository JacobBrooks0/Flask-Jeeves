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
        username: formData.username,
        password: formData.password,
      }),
    };
    const response = await fetch("http://localhost:3000/users/login", options);
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
    loginRequest({ username: usernameValue, password: passwordValue });
    setUsernameValue("");
    setPasswordValue("");
  };

  return (
    <div className="login-body">
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          fullWidth
          required
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
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}
