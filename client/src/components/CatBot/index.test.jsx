import React, { useEffect, useContext } from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { NavLink, Link } from "react-router-dom";
import CatBot from "../../components/CatBot";
import {
  CredentialsProvider,
  useCredentials,
  CredentialsContext,
} from "../../contexts";

import { Outlet } from "react-router-dom";
import { Info } from "@mui/icons-material";

expect.extend(matchers);

describe("CatBot", () => {
  beforeEach(() => {
    render(
      <Router>
        <CredentialsProvider>
          <CatBot />
        </CredentialsProvider>
      </Router>
    );
  });

  afterEach(() => {
    cleanup();
  });

  //   Doesnt run
  it("Displays a button", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("Displays a container", () => {
    const container = screen.getByRole("container");
    expect(container).toBeInTheDocument();
  });

  // doesnt run
});
