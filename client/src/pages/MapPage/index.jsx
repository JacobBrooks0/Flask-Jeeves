import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import style from "./style.module.css";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

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
  }, []);

  const hanldePlacesChanged = async (val) => {
    setValue(val, false);
    clearSuggestions();

    const results = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(results[0]);
    setMarker([
      {
        lat: lat,
        lng: lng,
      },
    ]);
    mapRef.current?.panTo(markers[0]);
  };

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  return (
    <div className={style["header"]}>
      {!isLoaded || markers.length == 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className={style["header"]}>
          <Combobox onSelect={hanldePlacesChanged}>
            <ComboboxInput
              value={value}
              onChange={(e) => setValue(e.target.value)}
              disabled={!ready}
              className="combobox-input"
              placeholder="Search office address"
            />
            <ComboboxPopover>
              <ComboboxList>
                {status === "OK" &&
                  data.map(({ place_id, description }) => (
                    <ComboboxOption key={place_id} value={description} />
                  ))}
              </ComboboxList>
            </ComboboxPopover>
          </Combobox>
          <GoogleMap
            zoom={13}
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
