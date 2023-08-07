import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import style from "./style.module.css";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
  StandaloneSearchBox,
} from "@react-google-maps/api";

export default function MapPage() {
  const [markers, setMarker] = useState([]);
  const [location, setLocation] = useState();
  const mapRef = useRef();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
    libraries: ["places"],
  });

  function useLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      setMarker([
        {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      ]);
    });
  }

  const onLoad = useCallback((map) => (mapRef.current = map), []);

  useEffect(() => {
    useLocation();
    setTimeout(() => {
      setMarker([{ lat: 10, lng: 30 }]);
      mapRef.current?.panTo(markers[0]);
    }, 5000);
  }, []);

  const hanldePlacesChanged = () => {
    null;
  };

  return (
    <div className={style["header"]}>
      {!isLoaded || markers.length == 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className={style["header"]}>
          <GoogleMap
            zoom={10}
            onLoad={onLoad}
            center={markers[0]}
            mapContainerClassName={style["map-container"]}
          >
            <Marker position={markers[0]} />
          </GoogleMap>
        </div>
      )}
    </div>
  );
}
