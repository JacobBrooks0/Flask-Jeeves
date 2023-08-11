import style from "./style.module.css";
import { useCredentials } from "../../contexts";
// import {
//   GoogleMap,
//   Marker,
//   InfoWindow,
//   useLoadScript,
//   StandaloneSearchBox,
// } from "@react-google-maps/api";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";
// import "@reach/combobox/styles.css";

// const libraries = ["places"];

// export default function MapPage() {
//   const [markers, setMarker] = useState([]);
//   const [location, setLocation] = useState();
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
//     libraries,
//   });
//   const mapRef = useRef();

//   function useLocation() {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       setMarker([
//         {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         },
//       ]);
//     });
//     // searchForVets();
//   }

//   const onLoad = useCallback((map) => (mapRef.current = map), []);

//   useEffect(() => {
//     useLocation();
//   }, []);

//   const hanldePlacesChanged = async (val) => {
//     setValue(val, false);
//     clearSuggestions();

//     const results = await getGeocode({ address: val });
//     const { lat, lng } = await getLatLng(results[0]);
//     setMarker([
//       {
//         lat: lat,
//         lng: lng,
//       },
//     ]);
//     mapRef.current?.panTo(markers[0]);
//   };

//   const {
//     ready,
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutocomplete();

//   return (
//     <div className={style["header"]}>
//       {!isLoaded || markers.length == 0 ? (
//         <h1>Loading...</h1>
//       ) : (
//         <div className={style["header"]}>
//           <Combobox onSelect={hanldePlacesChanged}>
//             <ComboboxInput
//               value={value}
//               onChange={(e) => setValue(e.target.value)}
//               // disabled={!ready}
//               className="combobox-input"
//               placeholder="Search for an address"
//             />
//             <ComboboxPopover>
//               <ComboboxList>
//                 {status === "OK" &&
//                   data.map(({ place_id, description }) => (
//                     <ComboboxOption key={place_id} value={description} />
//                   ))}
//               </ComboboxList>
//             </ComboboxPopover>
//           </Combobox>
//           <GoogleMap
//             zoom={13}
//             onLoad={onLoad}
//             center={markers[0]}
//             options={{ mapId: "713a483497249211" }}
//             mapContainerClassName={style["map-container"]}
//           >
//             <Marker position={markers[0]} />
//           </GoogleMap>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import GMap from "./GMap";
import InfoBar from "../../components/InfoBar";

// API key of the google map
const GOOGLE_MAP_API_KEY = import.meta.env.VITE_MAPS_API_KEY;

const MapPage = () => {
  const [loadMap, setLoadMap] = useState(false);
  const { dark, setDark } = useCredentials();

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
        <h1
          style={{
            fontFamily: "Jua",
            marginBottom: "20px",
            color: dark ? "whitesmoke" : "black",
          }}
        >
          See nearby vets in our own Google Map
        </h1>
        <p style={{ color: dark ? "whitesmoke" : "black" }}>
          Click on or tap a marker to see information about Vets near you
        </p>
      </div>

      <div className={style["map-container"]}>
        {!loadMap ? <div>Loading...</div> : <GMap />}
        <InfoBar />
      </div>
    </div>
  );
};

export default MapPage;
