import React, { useEffect, useContext } from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { NavLink, Link } from "react-router-dom";
import CatList from "../../components/CatList";
import {
  CredentialsProvider,
  useCredentials,
  CredentialsContext,
} from "../../contexts";

import { Outlet } from "react-router-dom";
import { Info } from "@mui/icons-material";

expect.extend(matchers);

describe("CatList", () => {
  beforeEach(() => {
    render(
      <Router>
        <CredentialsProvider>
          <CatList />
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
  // doesnt run
});
