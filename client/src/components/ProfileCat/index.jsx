import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useCredentials } from "../../contexts";
import Alex from "../../assets/alex.jpg";
import CatImage from "../../assets/images/pitr-Kitty-icon.svg";
import CatImageWhite from "../../assets/images/kitty-white.svg";
import CatImageBrown from "../../assets/images/kitty-brown.svg";
import CatImageYellow from "../../assets/images/kitty-yellow.svg";
import CatImageBlack from "../../assets/images/kitty-black.svg";
import CatRegisterForm from "../CatRegisterForm/index";
import Modal from "@mui/material/Modal";

export default function ProfileCat({ cat, index }) {
  const { dark, setDark } = useCredentials();
  const [modalOpen, setModalOpen] = useState(false);
  const [backgroundtButtonColor, setBackgroundtButtonColor] = useState(
    "#d3ccfa"
  );

  const handleOpen = () => {
    // onChange();
    setModalOpen(true);
  };
  const handleClose = () => setModalOpen(false);

  const imageHandler = (index) => {
    if (index % 4 === 0) {
      return <CatImageWhite style={{ width: "100px" }} />;
    } else if (index % 3 === 0) {
      return <CatImageBrown style={{ width: "100px" }} />;
    } else if (index % 2 === 0) {
      return <CatImageYellow style={{ width: "100px" }} />;
    } else {
      return <CatImage style={{ width: "100px" }} />;
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        // onMouseEnter={() => setBackgroundtButtonColor("#826BF5")}
        // onMouseLeave={() => setBackgroundtButtonColor("#D3CCFA")}
        // style={{
        //   display: "flex",
        //   flexDirection: "row",
        //   marginBottom: "20px",
        //   padding: "20px",
        //   width: "100%",
        //   height: "175px",
        //   cursor: "pointer",
        //   justifyContent: "space-evenly",
        //   backgroundColor: dark ? "#826BF5" : backgroundtButtonColor,
        //   borderRadius: "10px",
        //   alignItems: "center",
        // }}
        sx={{
          mr: 2,
          px: 4,
          py: 1,
          fontSize: "0.9rem",
          display: "flex",
          flexDirection: "row",
          marginBottom: "20px",
          padding: "20px",
          width: "100%",
          height: "175px",
          cursor: "pointer",
          justifyContent: "space-evenly",
          borderRadius: "10px",
          alignItems: "center",
          textTransform: "capitalize",
          borderRadius: 3,
          borderColor: "#14192d",
          margin: "30px 0",
          color: "whitesmoke",
          backgroundColor: "#D3CCFA",
          "&&:hover": {
            backgroundColor: "#ADA0F2",
          },
          "&&:focus": {
            backgroundColor: "#ADA0F2",
          },
        }}
      >
        {imageHandler(index)}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography
            variant="p"
            component="p"
            sx={{
              fontSize: "16px",
              py: 3,
              pl: 4,
              width: "100%",
              display: "block",
              lineHeight: 1.6,
              fontFamily: "Patua One",
              color: dark ? "whitesmoke" : "#121212",
              textTransform: "capitalize",
            }}
          >
            Name: {cat.name}
            <br />
            DOB: {new Date(cat.dob).toLocaleDateString("en-GB")}
            <br />
            Breed: {cat.breed}
            <br />
            Diet: {cat.diet}
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
            variant="p"
            component="p"
            sx={{
              fontSize: "16px",
              py: 3,
              pl: 4,
              width: "100%",
              display: "block",
              lineHeight: 1.6,
              fontFamily: "Patua One",
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
            Contact with Pets: {cat.contactWithOtherPets.toString()}
          </Typography>
        </div>
      </Button>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          height: "100%",
          position: "asbolute",
          top: "15%",
          left: "25%",
          height: "50%",
          width: "50%",
        }}
      >
        <CatRegisterForm
          id={cat.id}
          nameToUpdate={cat.name}
          dietToUpdate={cat.diet}
          dobToUpdate={cat.dob}
          breedToUpdate={cat.breed}
          outdoorToUpdate={cat.outdoor}
          neuterToUpdate={cat.neutered}
          sexToUpdate={cat.sex}
          contactWithOtherPetsToUpdate={cat.contactWithOtherPets}
          update
          backgroundColor="#D3CCFA"
          width="100%"
        />
      </Modal>
    </>
  );
}
