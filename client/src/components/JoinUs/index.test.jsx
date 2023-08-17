import React, { useEffect, useContext } from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
  screen,
  render,
  cleanup,
  within,
  getByText,
} from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { NavLink, Link } from "react-router-dom";
import LandingTitle from "../LandingTitle";
import LandingParagraph from "../LandingParagraph";
import { CredentialsProvider } from "../../contexts";
import { Outlet } from "react-router-dom";
import JoinUs from ".";

expect.extend(matchers);

describe("Join US", () => {
  beforeEach(() => {
    render(
      <Router>
        <CredentialsProvider>
          <JoinUs />
        </CredentialsProvider>
      </Router>
    );
  });

  afterEach(() => {
    cleanup();
  });

  // it("Component is rendered", () => {
  //   const { getByText } = render(<JoinUs number="one" word="Let's" />);
  //   expect(getByText("Let's")).toBeInTheDocument();
  // });

  it("Displays a button", () => {
    const button = screen.getByRole("link");
    expect(button).toBeInTheDocument();
  });

  it("should render 1 button", () => {
    expect(screen.getByRole("link", { name: "Join Us" })).toBeTruthy();
  });

  it("Links to register", () => {
    expect(screen.getByText("Join Us").href).toBe(
      "http://localhost:3000/register"
    );
  });
});
