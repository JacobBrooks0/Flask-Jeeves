import { Button, Stack } from "@mui/material";
import LandingTitle from "./LandingTitle";
import LandingParagraph from "./LandingParagraph";
import { Link } from "react-router-dom";

export default function JoinUs() {
  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      sx={{
        py: 7,
        mx: 6,
      }}
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
      </style>
      <LandingTitle
        text={"Join us for quick, convenient care for your cat"}
        textAlign={"center"}
      />
      <LandingParagraph
        text={
          "It is our commitment to ensure a professional and easy to use \
                insight into your cat's health. \
                If you want to join us in diagnosing your pet's problems  \
                before you see a vet click the button below."
        }
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />
      <Button
        component={Link}
        to={"/register"}
        variant="contained"
        type="submit"
        size="medium"
        sx={{
          fontSize: "0.9rem",
          textTransform: "capitalize",
          py: 1,
          px: 4,
          mt: 3,
          mb: 0,
          borderRadius: 1,
          backgroundColor: "#826BF5",
          "&:hover": {
            backgroundColor: "#7958D6",
          },
        }}
      >
        Join Us
      </Button>
    </Stack>
  );
}
