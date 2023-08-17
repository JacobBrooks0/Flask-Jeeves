import * as React from "react";
import { Outlet } from "react-router-dom";
import CatBot from "../CatBot";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "../../App.css";
import { useCredentials } from "../../contexts";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AssignmentIcon from "@mui/icons-material/Assignment";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MapIcon from "@mui/icons-material/Map";
import LogoutIcon from "@mui/icons-material/Logout";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CatLogo from "../../assets/cat-logo.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { dark, setDark, profile, setProfile } = useCredentials();
  const navigate = useNavigate();
  const [
    backgroundAboutButtonColor,
    setBackgroundAboutButtonColor,
  ] = React.useState(false);
  const [
    backgroundSymptomsButtonColor,
    setBackgroundSymptomsButtonColor,
  ] = React.useState(false);
  const [
    backgroundVideoButtonColor,
    setBackgroundVideoButtonColor,
  ] = React.useState(false);
  const [
    backgroundMapsButtonColor,
    setBackgroundMapsButtonColor,
  ] = React.useState(false);
  const [
    backgroundUserButtonColor,
    setBackgroundUserButtonColor,
  ] = React.useState(false);
  const [
    backgroundHomeButtonColor,
    setBackgroundHomeButtonColor,
  ] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  React.useEffect(() => {
    dark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [dark]);
  // document.body.style.backgroundColor = "whitesmoke";

  const handleThemeChange = () => {
    if (dark) {
      return <Brightness7Icon />;
    } else {
      return <Brightness4Icon />;
    }
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "#826bf5" }}
          open={open}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <div style={{ justifyContent: "flex-start" }}>
              <Link to="/home">
                <img src={CatLogo} style={{ width: "70px", height: "60px" }} />
              </Link>
            </div>
            <div
              role="navigation"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <NavLink
                to="/home"
                onMouseEnter={() => setBackgroundHomeButtonColor(true)}
                onMouseLeave={() => setBackgroundHomeButtonColor(false)}
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive
                      ? "whitesmoke"
                      : !backgroundHomeButtonColor
                      ? "rgba(0, 0, 0, 0.54)"
                      : "rgba(0, 0, 0, 0.24)",
                    textDecoration: "none",
                    width: "100%",
                    marginTop: "5px",
                    marginRight: "30px",
                    backgroundColor: "#826bf5",
                    // backgroundColor: isActive ? "#eee" : null,
                  };
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <HomeIcon />
                  Home
                </div>
              </NavLink>
              <NavLink
                to="/about"
                onMouseEnter={() => setBackgroundAboutButtonColor(true)}
                onMouseLeave={() => setBackgroundAboutButtonColor(false)}
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive
                      ? "whitesmoke"
                      : !backgroundAboutButtonColor
                      ? "rgba(0, 0, 0, 0.54)"
                      : "rgba(0, 0, 0, 0.24)",
                    textDecoration: "none",
                    width: "100%",
                    marginTop: "5px",
                    marginRight: "30px",
                    backgroundColor: "#826bf5",
                    // backgroundColor: isActive ? "#eee" : null,
                  };
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <InfoIcon />
                  About
                </div>
              </NavLink>
              <NavLink
                to="/user"
                onMouseEnter={() => setBackgroundUserButtonColor(true)}
                onMouseLeave={() => setBackgroundUserButtonColor(false)}
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive
                      ? "whitesmoke"
                      : !backgroundUserButtonColor
                      ? "rgba(0, 0, 0, 0.54)"
                      : "rgba(0, 0, 0, 0.24)",
                    textDecoration: "none",
                    width: "100%",
                    marginTop: "5px",
                    marginRight: "30px",
                    backgroundColor: "#826bf5",
                    // backgroundColor: isActive ? "#eee" : null,
                  };
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <AccountCircleIcon />
                  Account
                </div>
              </NavLink>
              <NavLink
                to="/symptom"
                onMouseEnter={() => setBackgroundSymptomsButtonColor(true)}
                onMouseLeave={() => setBackgroundSymptomsButtonColor(false)}
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive
                      ? "whitesmoke"
                      : !backgroundSymptomsButtonColor
                      ? "rgba(0, 0, 0, 0.54)"
                      : "rgba(0, 0, 0, 0.24)",
                    textDecoration: "none",
                    width: "100%",
                    marginTop: "5px",
                    marginRight: "30px",
                    backgroundColor: "#826bf5",
                    // backgroundColor: isActive ? "#eee" : null,
                  };
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <AssignmentIcon />
                  Symptoms
                </div>
              </NavLink>
              <NavLink
                to="/video"
                onMouseEnter={() => setBackgroundVideoButtonColor(true)}
                onMouseLeave={() => setBackgroundVideoButtonColor(false)}
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive
                      ? "whitesmoke"
                      : !backgroundVideoButtonColor
                      ? "rgba(0, 0, 0, 0.54)"
                      : "rgba(0, 0, 0, 0.24)",
                    textDecoration: "none",
                    width: "100%",
                    marginTop: "5px",
                    marginRight: "30px",
                    backgroundColor: "#826bf5",
                    // backgroundColor: isActive ? "#eee" : null,
                  };
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <VideoCallIcon />
                  Video
                </div>
              </NavLink>
              <NavLink
                to="/map"
                onMouseEnter={() => setBackgroundMapsButtonColor(true)}
                onMouseLeave={() => setBackgroundMapsButtonColor(false)}
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive
                      ? "whitesmoke"
                      : !backgroundMapsButtonColor
                      ? "rgba(0, 0, 0, 0.54)"
                      : "rgba(0, 0, 0, 0.24)",
                    textDecoration: "none",
                    width: "100%",
                    marginTop: "5px",
                    marginRight: "30px",
                    backgroundColor: "#826bf5",
                    // backgroundColor: isActive ? "#eee" : null,
                  };
                }}
              >
                {" "}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <MapIcon />
                  Maps
                </div>
              </NavLink>
              <IconButton
                sx={{ mr: 2 }}
                color="inherit"
                onClick={() => (dark ? setDark(false) : setDark(true))}
              >
                {handleThemeChange()}
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="end"
                sx={{ mr: 0.5, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer role="menubar" anchor="right" open={open}>
          <DrawerHeader
            sx={{
              justifyContent: "flex-start",
            }}
          >
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List role="menubar">
            {[
              { name: "Home", icon: <HomeIcon />, route: "/home" },
              { name: "About", icon: <InfoIcon />, route: "/about" },
              { name: "Account", icon: <AccountCircleIcon />, route: "/user" },
              {
                name: "Symptoms Checker",
                icon: <AssignmentIcon />,
                route: "/symptom",
              },
              { name: "Video Call", icon: <VideoCallIcon />, route: "/video" },
              { name: "Vet Map", icon: <MapIcon />, route: "/map" },
            ].map((text, index) => (
              <ListItem
                key={text.name}
                className="navbar-header"
                style={{ marginRight: "20px" }}
                disablePadding
              >
                <NavLink
                  to={text.route}
                  style={({ isActive, isPending }) => {
                    return {
                      color: isActive ? "#826bf5" : "rgba(0, 0, 0, 0.54)",
                      textDecoration: "none",
                      width: "100%",
                      backgroundColor: isActive ? "#eee" : null,
                    };
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>{text.icon}</ListItemIcon>
                    <ListItemText primary={text.name} />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
            <Divider />
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText
                  style={{ color: "rgba(0, 0, 0, 0.54)" }}
                  primary="Logout"
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Main open={open}></Main>
      </Box>

      <Outlet />
      <CatBot />
      <footer style={{ display: "block" }}>
        <div className="footer">
          <div className="row icons">
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <YouTubeIcon />
            </a>
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <TwitterIcon />
            </a>
          </div>

          <div className="row">
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          <div className="row">
            Cat Care Copyright © 2023 - All rights reserved || Designed By:
            Flask Jeeves
          </div>
        </div>
      </footer>
    </>
  );
}
