import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {
  CredentialsProvider,
  LocationProvider,
  SymptomsProvider,
} from "./contexts";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="1003135220595-1uqu94v5934mgev6fcvka78uj16apgg2.apps.googleusercontent.com">
    <BrowserRouter>
      <CredentialsProvider>
        <SymptomsProvider>
          <LocationProvider>
            <App />
          </LocationProvider>
        </SymptomsProvider>
      </CredentialsProvider>
    </BrowserRouter>
  </GoogleOAuthProvider>
);
