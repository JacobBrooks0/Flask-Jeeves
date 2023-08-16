import React, { useEffect, useContext } from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { NavLink, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import {
  CredentialsProvider,
  useCredentials,
  CredentialsContext,
} from "../../contexts";

import { Outlet } from "react-router-dom";
import { Info } from "@mui/icons-material";

expect.extend(matchers);

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <Router>
        <CredentialsProvider>
          <Navbar />
        </CredentialsProvider>
      </Router>
    );
  });

  afterEach(() => {
    cleanup();
  });

  //   Doesnt run
  it("Displays a nav bar with 8 children", () => {
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
    expect(nav.childNodes.length).toBe(8);
  });
  // doesnt run

  it("Should send to home", () => {
    const nav = screen.getByRole("navigation");

    expect(nav.childNodes[0].href).toBe("http://localhost:3000/home");
  });

  it("Should send to about", () => {
    const nav = screen.getByRole("navigation");

    expect(nav.childNodes[1].href).toBe("http://localhost:3000/about");
  });

  it("Should send to user", () => {
    const nav = screen.getByRole("navigation");
    expect(nav.childNodes[2].href).toBe("http://localhost:3000/user");
  });

  it("Should send to Symptom", () => {
    const nav = screen.getByRole("navigation");
    expect(nav.childNodes[3].href).toBe("http://localhost:3000/symptom");
  });

  it("Should send to video", () => {
    const nav = screen.getByRole("navigation");
    expect(nav.childNodes[4].href).toBe("http://localhost:3000/video");
  });
});
