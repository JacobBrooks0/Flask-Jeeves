import { Typography } from "@mui/material";

export default function LandingTitle({ text, textAlign }) {
  return (
    <Typography
      variant="h4"
      component="h3"
      sx={{
        fontWeight: "400",
        textAlign: textAlign,
      }}
      style={{ fontFamily: "'Jua', sans-serif" }}
    >
      {text}
    </Typography>
  );
}
