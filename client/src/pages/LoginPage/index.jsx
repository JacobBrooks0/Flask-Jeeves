import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { useCredentials } from "../../contexts";
import "./styles.css";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CatLogo from "../../assets/cat-logo.png";

export default function LoginPage() {
  const {
    emailValue,
    setEmailValue,
    passwordValue,
    setPasswordValue,
    user,
    setUser,
    profile,
    setProfile,
  } = useCredentials();

  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
    console.log(profile);
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const loginRequest = async () => {
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    };
    const response = await fetch(
      "https://catcareserver.onrender.com/login",
      options
    );
    const data = await response.json();
    localStorage.setItem("user", JSON.stringify(data));

    if (response.status == 200) {
      // localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/home");
      setEmailValue("");
      setPasswordValue("");
    } else {
      alert("Your email or password is incorrect");
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
    loginRequest();
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
          type="password"
          name="password"
          autoComplete="current-password"
          onChange={handlePasswordChange}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          className="button"
          fullWidth
          variant="contained"
          sx={{
            my: 0.5,
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
          onClick={() => googleLogin()}
        >
          Sign in with Google
        </Button>
        <Button
          onClick={loginRequest}
          className="button"
          fullWidth
          variant="contained"
          sx={{
            my: 0.5,
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
          Sign In
        </Button>
        <Link href="/register" variant="body2" style={{ color: "black" }}>
          Don't have an account? Sign Up
        </Link>
      </form>
    </div>
  );
}
