import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
//img
import headerImg from "../../assets/cat-logo.png";

export default function LandingHeader() {
  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(2),
    paddingTop: theme.spacing(5),
    backgroundColor: "#D3CCFA",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
  }));

  const BoxText = styled(Box)(({ theme }) => ({
    flex: "1",
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flex: "2",
      textAlign: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));

  return (
    <CustomBox component="header">
      {/*  Box text  */}
      <BoxText component="section">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
        </style>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 500,
            color: "black",
          }}
          style={{ fontFamily: "'Patua One', sans-serif" }}
        >
          We'll help you look after your cat
        </Typography>

        <Typography
          variant="h6"
          component="p"
          sx={{
            py: 3,
            lineHeight: 1.6,
            color: "black",
          }}
        >
          Join us today to diagnose your cat <br /> using our vetinary
          expertise.
        </Typography>

        <Box>
          <Button
            variant="contained"
            component={Link}
            to="/register"
            sx={{
              mr: 1,
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
            Join Us
          </Button>
          <Button
            component={Link}
            to={"/login"}
            variant="outlined"
            sx={{
              ml: 1,
              px: 4,
              py: 1,
              fontSize: "0.9rem",
              textTransform: "capitalize",
              borderRadius: 1,
              color: "black",
              backgroundColor: "transparent",
              borderColor: "#826BF5",
              "&&:hover": {
                color: "#343a55",
                borderColor: "#7958D6",
              },
              "&&:focus": {
                color: "#343a55",
                borderColor: "#7958D6",
              },
            }}
          >
            Log In
          </Button>
        </Box>
      </BoxText>

      <Box
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            flex: "1",
            paddingTop: "10px",
            alignSelf: "center",
            justifyContent: "center",
          },
          [theme.breakpoints.up("md")]: {
            flex: "1",
            alignSelf: "center",
            justifyContent: "center",
          },
        })}
      >
        <img
          src={headerImg}
          alt="headerImg"
          style={{
            width: "90%",
            marginBottom: "15px",
            alignSelf: "center",
            justifySelf: "center",
          }}
        />
      </Box>
    </CustomBox>
  );
}
