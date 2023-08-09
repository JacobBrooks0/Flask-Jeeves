import React, { useState } from "react";
import { useLocations } from "../contexts/";
import { IconButton, Snackbar } from "@mui/material/";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

export default function InfoBar() {
  const [open, setOpen] = useState(false);
  const { details, setDetails } = useLocations();

  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(
      details.formatted_phone_number ? details.formatted_phone_number : null
    );
  };

  //   console.log(details.photos[0].html_attributions[0]);

  return (
    <div
      style={{
        width: "40%",
        height: "75%",
        padding: "0",
        backgroundColor: "#D3CCFA",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "no-wrap",
        justifyContent: "flex-start",
      }}
    >
      {Object.keys(details).length == 0 ? (
        <p>No details to show </p>
      ) : (
        <>
          <div
            style={{
              width: "100%",
              //   minHeight: "250px",
              border: "1px solid #D3CCFA",
            }}
          >
            {!details.photos ? (
              <img
                style={{
                  objectFit: "contain",
                  maxHeight: "250px",
                  width: "100%",
                  backgroundColor: "whitesmoke",
                }}
                src="src/assets/cat-logo.png"
              />
            ) : (
              <img
                style={{
                  objectFit: "contain",
                  maxHeight: "250px",
                  width: "100%",
                  backgroundColor: "whitesmoke",
                }}
                src={details.photos[0].getUrl()}
              />
            )}
          </div>

          {console.log(details)}
          {/* {parse(details.photos[0].html_attributions[0])} */}
          {/* {details.photos[0].html_attributions[0]} */}
          <h2
            style={{
              textAlign: "center",
              marginTop: "20px",
              padding: "0 20px",
            }}
          >
            {details.name}
          </h2>
          <div style={{ margin: "10px 10px 0 10px" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => window.open(`${details.website}`)}
              edge="end"
              sx={{ mr: 0.5 }}
            >
              <LanguageIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleClick}
              edge="end"
              sx={{ mr: 0.5 }}
            >
              <PhoneEnabledIcon />
            </IconButton>
            <Snackbar
              message="Copied to clipboard"
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              autoHideDuration={2000}
              onClose={() => setOpen(false)}
              open={open}
            />
          </div>
          <p style={{ textAlign: "center", margin: "20px 0" }}>
            {details.formatted_address}
          </p>
          <p>Phone Number: {details.formatted_phone_number}</p>
          <p style={{ textAlign: "center", margin: "20px 0" }}>
            Rating: {details.rating}
          </p>
        </>
      )}
    </div>
  );
}
