import React, { useState, useContext, createContext } from "react";

const CredentialsContext = createContext();

export const CredentialsProvider = ({ children }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");

  return (
    <CredentialsContext.Provider
      value={{
        emailValue,
        setEmailValue,
        passwordValue,
        setPasswordValue,
        firstNameValue,
        setFirstNameValue,
        lastNameValue,
        setLastNameValue,
      }}
    >
      {children}
    </CredentialsContext.Provider>
  );
};

export const useCredentials = () => useContext(CredentialsContext);

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [details, setDetails] = useState({});

  return (
    <LocationContext.Provider
      value={{
        details,
        setDetails,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocations = () => useContext(LocationContext);
