import React, { useState } from "react";
import { useLocations } from "../contexts/";
import { IconButton, Snackbar } from "@mui/material/";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import PetsIcon from "@mui/icons-material/Pets";

export default function InfoBar() {
  const [open, setOpen] = useState(false);
  const { details, setDetails } = useLocations();

  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(
      details.formatted_phone_number ? details.formatted_phone_number : null
    );
  };

  function roundHalf(num) {
    if (Math.round(num * 2) / 2 === 5) {
      return (
        <>
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
        </>
      );
    } else if (Math.round(num * 2) / 2 === 4.5) {
      return (
        <>
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarHalfIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
        </>
      );
    } else if (Math.round(num * 2) / 2 === 4) {
      return (
        <>
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarBorderIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
        </>
      );
    } else if (Math.round(num * 2) / 2 === 3.5) {
      return (
        <>
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarHalfIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarBorderIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
        </>
      );
    } else if (Math.round(num * 2) / 2 === 3) {
      return (
        <>
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarBorderIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarBorderIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
        </>
      );
    } else if (Math.round(num * 2) / 2 === 2.5) {
      return (
        <>
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarHalfIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarBorderIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
          <StarBorderIcon style={{ marginBottom: "3px", color: "#ffa500" }} />
        </>
      );
    } else if (Math.round(num * 2) / 2 === 2) {
      return (
        <>
          <StarIcon style={{ marginBottom: "3px" }} />
          <StarIcon style={{ marginBottom: "3px" }} />
          <StarBorderIcon style={{ marginBottom: "3px" }} />
          <StarBorderIcon style={{ marginBottom: "3px" }} />
          <StarBorderIcon style={{ marginBottom: "3px" }} />
        </>
      );
    } else if (Math.round(num * 2) / 2 === 1.5) {
      return (
        <>
          <StarIcon style={{ marginBottom: "3px" }} />
          <StarHalfIcon style={{ marginBottom: "3px" }} />
          <StarBorderIcon style={{ marginBottom: "3px" }} />
          <StarBorderIcon style={{ marginBottom: "3px" }} />
          <StarBorderIcon style={{ marginBottom: "3px" }} />
        </>
      );
    } else if (Math.round(num * 2) / 2 === 1) {
      return (
        <>
          <StarIcon style={{ marginBottom: "3px" }} />
          <StarBorderIcon style={{ marginBottom: "3px" }} />
          <StarBorderIcon style={{ marginBottom: "3px" }} />
          <StarBorderIcon style={{ marginBottom: "3px" }} />
          <StarBorderIcon style={{ marginBottom: "3px" }} />
        </>
      );
    } else if (Math.round(num * 2) / 2 === 0.5) {
      return (
        <>
          <StarHalfIcon style={{ marginBottom: "3px" }} />
          <StarBorderIcon style={{ marginBottom: "3px" }} />
          <StarBorderIcon style={{ marginBottom: "3px" }} />
          <StarBorderIcon style={{ marginBottom: "3px" }} />
          <StarBorderIcon style={{ marginBottom: "3px" }} />
        </>
      );
    } else {
      return (
        <>
          <StarBorderIcon style={{ marginBottom: "3px" }} />
          <StarBorderIcon style={{ marginBottom: "3px" }} />
          <StarBorderIcon style={{ marginBottom: "3px" }} />
          <StarBorderIcon style={{ marginBottom: "3px" }} />
          <StarBorderIcon style={{ marginBottom: "3px" }} />
        </>
      );
    }
  }

  return (
    <div
      style={{
        width: "40%",
        height: "600px",
        padding: "0",
        backgroundColor: "#D3CCFA",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "no-wrap",
        justifyContent: "space-between",
      }}
    >
      {Object.keys(details).length == 0 ? (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              flex: 0.5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <PetsIcon style={{ height: "90%", width: "90%" }} />
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "0 20px",
              flex: 0.5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              fontFamily: "Jua",
            }}
          >
            <h2 style={{ paddingBottom: "20px" }}>
              Don't 'paws' to read this!
            </h2>
            <h3>
              Select a marker to see information about that Veterinary business
            </h3>
          </div>
        </div>
      ) : (
        <>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
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
          <h2
            style={{
              fontFamily: "Jua",
              textAlign: "center",
              padding: "0 20px",
            }}
          >
            {details.name}
          </h2>
          <div
            style={{
              margin: "10px 10px 0 10px",
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
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
          <p
            style={{ textAlign: "center", margin: "20px 0", padding: "0 20px" }}
          >
            {details.formatted_address}
          </p>
          <p style={{ textAlign: "center", padding: "0 20px" }}>
            Phone Number: {details.formatted_phone_number}
          </p>
          <p
            style={{
              textAlign: "center",
              margin: "20px 0",
              padding: "0 20px",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            {roundHalf(details.rating)}
          </p>
        </>
      )}
    </div>
  );
}
