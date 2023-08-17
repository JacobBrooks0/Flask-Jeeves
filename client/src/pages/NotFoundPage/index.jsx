import { Link } from "react-router-dom";
import "./styles.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div
        className="text"
        style={{
          backgroundColor: "#D3CCFA",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "2rem",
          borderRadius: "10px",
          opacity: "90%",
        }}
      >
        <h1 style={{ fontFamily: "'Patua One', sans-serif" }}>
          Oops! You seem to be lost.
        </h1>
        <div className="p-and-img">
          <Typography
            variant="h6"
            component="p"
            sx={{
              py: 3,
              px: 3,
              // pl: 6,
              width: "100%",
              display: "block",
              lineHeight: 1.6,
              fontFamily: "Patua One",
              textAlign: "center",
              color: "#121212",
              // borderTop: "1px solid",
            }}
          >
            Here are some links to our site:
          </Typography>
        </div>
        <div className="links">
          <div
            className="first3"
            style={{ display: "flex", gap: "2rem", justifyContent: "center" }}
          >
            <Link to="/home">
              <Button
                sx={{
                  my: 0.5,
                  px: 4,
                  py: 0.8,
                  width: "9rem",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  borderRadius: 1,
                  borderColor: "#14192d",
                  color: "white",
                  backgroundColor: "#826BF5",
                  "&&:hover": {
                    backgroundColor: "#7958D6",
                  },
                  "&&:focus": {
                    backgroundColor: "#7958D6",
                  },
                }}
              >
                Home
              </Button>
            </Link>
            <Link to="/user">
              <Button
                sx={{
                  my: 0.5,
                  px: 4,
                  py: 0.8,
                  width: "9rem",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  borderRadius: 1,
                  borderColor: "#14192d",
                  color: "white",
                  backgroundColor: "#826BF5",
                  "&&:hover": {
                    backgroundColor: "#7958D6",
                  },
                  "&&:focus": {
                    backgroundColor: "#7958D6",
                  },
                }}
              >
                Profile
              </Button>
            </Link>
            <Link to="/map">
              <Button
                sx={{
                  my: 0.5,
                  px: 4,
                  py: 0.8,
                  width: "9rem",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  borderRadius: 1,
                  borderColor: "#14192d",
                  color: "white",
                  backgroundColor: "#826BF5",
                  "&&:hover": {
                    backgroundColor: "#7958D6",
                  },
                  "&&:focus": {
                    backgroundColor: "#7958D6",
                  },
                }}
              >
                Map
              </Button>
            </Link>
          </div>
          <div className="last4" style={{ display: "flex", gap: "2rem" }}>
            <Link to="/symptom">
              <Button
                sx={{
                  my: 0.5,
                  px: 4,
                  py: 0.8,
                  width: "9rem",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  borderRadius: 1,
                  borderColor: "#14192d",
                  color: "white",
                  backgroundColor: "#826BF5",
                  "&&:hover": {
                    backgroundColor: "#7958D6",
                  },
                  "&&:focus": {
                    backgroundColor: "#7958D6",
                  },
                }}
              >
                Profile
              </Button>
            </Link>
            <Link to="/video">
              <Button
                sx={{
                  my: 0.5,
                  px: 4,
                  py: 0.8,
                  width: "9rem",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  borderRadius: 1,
                  borderColor: "#14192d",
                  color: "white",
                  backgroundColor: "#826BF5",
                  "&&:hover": {
                    backgroundColor: "#7958D6",
                  },
                  "&&:focus": {
                    backgroundColor: "#7958D6",
                  },
                }}
              >
                Video Chat
              </Button>
            </Link>
            <Link to="/login">
              <Button
                sx={{
                  my: 0.5,
                  px: 4,
                  py: 0.8,
                  width: "9rem",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  borderRadius: 1,
                  borderColor: "#14192d",
                  color: "white",
                  backgroundColor: "#826BF5",
                  "&&:hover": {
                    backgroundColor: "#7958D6",
                  },
                  "&&:focus": {
                    backgroundColor: "#7958D6",
                  },
                }}
              >
                Log In
              </Button>
            </Link>
            <Link to="/register">
              <Button
                sx={{
                  my: 0.5,
                  px: 4,
                  py: 0.8,
                  width: "9rem",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                  borderRadius: 1,
                  borderColor: "#14192d",
                  color: "white",
                  backgroundColor: "#826BF5",
                  "&&:hover": {
                    backgroundColor: "#7958D6",
                  },
                  "&&:focus": {
                    backgroundColor: "#7958D6",
                  },
                }}
              >
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
