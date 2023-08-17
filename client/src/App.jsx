import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import {
  HomePage,
  LandingPage,
  LoginPage,
  MapPage,
  RegisterPage,
  SymptomPage,
  UserPage,
  VideoPage,
  AboutPage,
  NotFoundPage,

} from "./pages";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<Navbar />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/symptom" element={<SymptomPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/video" element={<VideoPage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
