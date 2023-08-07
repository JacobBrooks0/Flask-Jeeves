import { useEffect, useState } from "react";
import style from "./style.module.css";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
  LoadScript,
  StandaloneSearchBox,
} from "@react-google-maps/api";

export default function MapPage() {
  const libraries = ["drawing", "places"];
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
    libraries: libraries,
  });
  const [mapRef, setMapRef] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [markers, setMarker] = useState([]);
  const [infoWindowData, setInfoWindowData] = useState();

  const onMapLoad = (map) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  const handleMarkerClick = (id, lat, lng, address) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, address });
    setIsOpen(true);
  };

  function useLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      setMarker([
        {
          address: "Your position",
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      ]);
    });
  }

  function hanldePlacesChanged() {}

  // const searchBox = new google.maps.places.SearchBox();

  useEffect(() => {
    useLocation();
  }, []);

  return (
    <div className={style["header"]}>
      {!isLoaded || !markers ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName={style["map-container"]}
          onLoad={onMapLoad}
          onClick={() => setIsOpen(false)}
        >
          <StandaloneSearchBox onPlacesChanged={hanldePlacesChanged}>
            <input
              type="text"
              placeholder="Customized your placeholder"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px",
              }}
            />
          </StandaloneSearchBox>
          {markers.map(({ address, lat, lng }, ind) => (
            <Marker
              key={ind}
              position={{ lat, lng }}
              onClick={() => {
                handleMarkerClick(ind, lat, lng, address);
              }}
            >
              {isOpen && infoWindowData?.id === ind && (
                <InfoWindow
                  onCloseClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <h3>{infoWindowData.address}</h3>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      )}
    </div>
  );
}
