import React from "react";
import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import MapPage from ".";
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
 

import { CredentialsProvider } from "../../contexts";

expect.extend(matchers);

describe("Map Page", () => {

    it("renders without crashing", async () => {
        render(
          <Router>
            <CredentialsProvider>
                <Routes>
                    <Route path="/map" element={<MapPage />} />
                </Routes>   
            </CredentialsProvider>
          </Router>
        );
      });

    
})
