import Typography from "@mui/material/Typography";
import { useCredentials } from "../../contexts";
import Alex from "../../assets/alex.jpg";
import CatImage from "../../assets/images/pitr-Kitty-icon.svg";

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
        width: "100%",
        height: "175px",
        justifyContent: "space-evenly",
        backgroundColor: dark ? "#826BF5" : "#D3CCFA",
        borderRadius: "10px",
        alignItems: "center",
      }}
    >
      <CatImage style={{ width: "100px" }} />
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
            pl: 4,
            width: "100%",
            display: "block",
            lineHeight: 1.6,
            fontFamily: "Jua",
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
        </Typography>
      </div>
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
            pl: 4,
            width: "100%",
            display: "block",
            lineHeight: 1.6,
            fontFamily: "Jua",
            color: dark ? "whitesmoke" : "#121212",
            textTransform: "capitalize",
          }}
        >
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
