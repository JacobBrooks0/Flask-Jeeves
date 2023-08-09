import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useLocations } from "../../contexts/";
import style from "./style.module.css";

const GMap = () => {
  const googleMapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState([{ lat: 100, lng: 100 }]);
  const { details, setDetails } = useLocations();

  let infowindow;

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

  let request = {
    location: marker[0],
    radius: "500",
    query: `vets`,
  };

  const service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }

  function detailsCallback(place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      setDetails(place);
    }
  }

  function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;

    const marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
    });

    google.maps.event.addListener(marker, "click", () => {
      let extraDetails = {
        placeId: place.place_id,
        fields: [
          "name",
          "photo",
          "website",
          "formatted_phone_number",
          "rating",
          "formatted_address",
        ],
      };
      service.getDetails(extraDetails, detailsCallback);
    });
  }

  useEffect(() => {
    useLocation();
  }, []);

  useEffect(() => {
    const googleMap = initGoogleMap();
    setMap(googleMap.googMap);
  }, [marker]);

  // useEffect(() => {
  //   if (!map) return;

  //   // new window.google.maps.Marker({
  //   //   position: marker[0],
  //   //   map: map,
  //   // });
  // }, [map]);

  const initGoogleMap = () => {
    let googMap = new window.google.maps.Map(googleMapRef.current, {
      center: marker[0],
      zoom: 11,
    });
    // infowindow = new window.google.maps.InfoWindow({ content: "Hello" });
    console.log(googMap.center.lat());
    console.log(googMap.center.lng());
    return { googMap: googMap };
  };

  return (
    <>
      <div ref={googleMapRef} style={{ width: "60%", height: "750px" }} />
    </>
  );
};

export default GMap;
