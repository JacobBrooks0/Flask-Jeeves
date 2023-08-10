import Typography from "@mui/material/Typography";
import { useCredentials } from "../../contexts";

export default function ProfileCat({ cat }) {
  const { dark, setDark } = useCredentials();
  return (
    <div
      className="cat"
      style={{
        display: "flex",
        flexDirection: "row",
        marginBottom: "20px",
        padding: "20px",
        width: "90%",
        justifyContent: "space-around",
        gap: "5rem",
        backgroundColor: dark ? "#826BF5" : "#D3CCFA",
        borderRadius: "10px",
      }}
    >
      <img
        src="src/assets/alex.jpg"
        alt=""
        style={{ width: "40%", borderRadius: "50%" }}
      />
      <div
        className="cat-info"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Typography
          variant="h6"
          component="p"
          sx={{
            py: 3,
            pl: 6,
            width: "100%",
            display: "block",
            lineHeight: 1.6,
            color: dark ? "whitesmoke" : "#121212",
            textTransform: "capitalize",
          }}
        >
          Name: {cat.name}
          <br />
          DOB: {cat.DOB}
          <br />
          Breed: {cat.breed}
          <br />
          Outdoor: {cat.outdoor.toString()}
          <br />
          Neutered: {cat.neutered.toString()}
          <br />
          Sex: {cat.sex}
          <br />
        </Typography>
      </div>
    </div>
  );
}
