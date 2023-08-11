import style from "./style.module.css";
import React, { useState, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import GMap from "./GMap";
import InfoBar from "../../components/InfoBar";

// API key of the google map
const GOOGLE_MAP_API_KEY = import.meta.env.VITE_MAPS_API_KEY;

const MapPage = () => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    const options = {
      apiKey: GOOGLE_MAP_API_KEY,
      version: "weekly",
      libraries: ["places"],
    };

    new Loader(options)
      .load()
      .then(() => {
        setLoadMap(true);
      })
      .catch((e) => {
        console.error(
          "Sorry, something went wrong: Please try again later. Error:",
          e
        );
      });
  }, []);

  return (
    <div className={style["map-page"]}>
      <div className={style["header-text-container"]}>
        <h1 style={{ fontFamily: "Jua", marginBottom: "20px" }}>
          See nearby vets in our own Google Map
        </h1>
        <p>Click on or tap a marker to see information about Vets near you</p>
      </div>

      <div className={style["map-container"]}>
        {!loadMap ? <div>Loading...</div> : <GMap />}
        <InfoBar />
      </div>
    </div>
  );
};

export default MapPage;
