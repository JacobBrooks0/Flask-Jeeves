import React, { useState, useContext, createContext } from "react";

const CredentialsContext = createContext();

export const CredentialsProvider = ({ children }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [dark, setDark] = React.useState(false);

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
        user,
        setUser,
        profile,
        setProfile,
        dark,
        setDark,
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

const SymptomsContext = createContext();

export const SymptomsProvider = ({ children }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [animation, setAnimation] = useState(true);
  const [differentAnswersIndex, setDifferentAnswersIndex] = useState(true);

  return (
    <SymptomsContext.Provider
      value={{
        questionNumber,
        setQuestionNumber,
        questions,
        setQuestions,
        answers,
        setAnswers,
        animation,
        setAnimation,
        differentAnswersIndex,
        setDifferentAnswersIndex,
      }}
    >
      {children}
    </SymptomsContext.Provider>
  );
};

export const useSymptoms = () => useContext(SymptomsContext);
