import * as React from "react";
import { Outlet } from "react-router-dom";
import CatBot from "./CatBot";
import { NavLink, Link } from "react-router-dom";
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
import "../App.css";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AssignmentIcon from "@mui/icons-material/Assignment";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MapIcon from "@mui/icons-material/Map";

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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  document.body.style.backgroundColor = "whitesmoke";

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
                <img
                  src="src/assets/cat-logo.png"
                  style={{ width: "70px", height: "60px" }}
                />
              </Link>
            </div>
            <div style={{ justifyContent: "flex-end" }}>
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
        <Drawer
          anchor="right"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          open={open}
        >
          <DrawerHeader sx={{ justifyContent: "flex-start" }}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {[
              { name: "Home", icon: <HomeIcon />, route: "/home" },
              { name: "About", icon: <InfoIcon />, route: "/about" },
              {
                name: "Symptom Checker",
                icon: <AssignmentIcon />,
                route: "/symptom",
              },
              { name: "Video Call", icon: <VideoCallIcon />, route: "/video" },
              { name: "Vet Map", icon: <MapIcon />, route: "/map" },
            ].map((text, index) => (
              <ListItem
                key={text.name}
                className="navbar-header"
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
          </List>
          <Divider />
        </Drawer>
        <Main open={open}></Main>
      </Box>

      <Outlet />
      <CatBot />
      <footer>
        <p>Hey</p>
      </footer>
    </>
  );
}
