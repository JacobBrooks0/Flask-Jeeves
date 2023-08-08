import style from "./style.module.css";
import Button from "@mui/material/Button";

export default function HomePage() {
  return (
    <>
      <div className={style["first-content"]}>
        <div className={style["first-content-container"]}>
          <h1
            style={{
              margin: "50px 0 20px 0",
              fontFamily: "Jua",
              fontSize: "48px",
              fontWeight: "500",
            }}
          >
            Let's check your cat!
          </h1>
          <p>
            Our symptom checker will help you understand your cat's problems,
            and we can advise you on the best course of action.
          </p>
          <Button
            variant="contained"
            // component={Link}
            to="/register"
            sx={{
              mr: 2,
              px: 4,
              py: 1,
              fontSize: "0.9rem",
              textTransform: "capitalize",
              borderRadius: 0,
              borderColor: "#14192d",
              margin: "30px 0",
              color: "whitesmoke",
              backgroundColor: "#826BF5",
              "&&:hover": {
                backgroundColor: "#7958D6",
              },
              "&&:focus": {
                backgroundColor: "#7958D6",
              },
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className={style["second-content"]}>
        <p>Book an appointment</p>
      </div>
      <div className={style["third-content"]}>
        <p>Book an appointment</p>
      </div>
      <div className={style["fourth-content"]}>
        <p>Book an appointment</p>
      </div>
    </>
  );
}
