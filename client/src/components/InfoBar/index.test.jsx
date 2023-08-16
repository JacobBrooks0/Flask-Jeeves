import React, { useEffect, useContext } from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { NavLink, Link } from "react-router-dom";
import { useLocations } from "../../contexts";
import InfoBar from "../../components/InfoBar";
import {
  CredentialsProvider,
  useCredentials,
  CredentialsContext,
} from "../../contexts";

import { Outlet } from "react-router-dom";
import { Info } from "@mui/icons-material";

expect.extend(matchers);

describe("InfoBar", () => {
  beforeEach(() => {
    render(
      <Router>
        <CredentialsProvider>
          <InfoBar />
        </CredentialsProvider>
      </Router>
    );
  });

  afterEach(() => {
    cleanup();
  });

  //   Doesnt run
  it("Displays a div", () => {
    const div = screen.getByRole("container");
    expect(div).toBeInTheDocument();
  });
  //   it("Displays a div2", () => {
  //     const div = screen.getByRole("container2");
  //     expect(div).toBeInTheDocument();
  //   });
  //   it("Displays a h2", () => {
  //     const h2 = screen.getByRole("dontpaws");
  //     expect(h2).toBeInTheDocument();
  //     expect(h2.textContent).toBe("Don't 'paws' to read this!");
  //   });
  //   it("Displays a h2", () => {
  //     const h3 = screen.getByRole("select");
  //     expect(h3).toBeInTheDocument();
  //     expect(h3.textContent).toBe(
  //       "Select a marker to see information about that Veterinary business"
  //     );
  //   });
  // doesnt run
});
