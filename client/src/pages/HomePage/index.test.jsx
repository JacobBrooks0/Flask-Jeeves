import React from "react";
import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";

import HomePage from ".";
import { CredentialsProvider } from "../../contexts";

expect.extend(matchers);

describe("Homepage", () => {
  beforeAll(() => {
    render(
      <Router>
        <CredentialsProvider>
          <HomePage />
        </CredentialsProvider>
      </Router>
    );
  });

  afterAll(() => {
    cleanup();
  });

  it("Should send to Symptom", () => {
    expect(screen.getByText("Get Started").href).toBe(
      "http://localhost:3000/symptom"
    );
  });

  it("Should send to profile", () => {
    expect(screen.getByText("Profile").href).toBe("http://localhost:3000/user");
  });

  it("Should send to Map", () => {
    expect(screen.getByText("Maps").href).toBe("http://localhost:3000/map");
  });

  it("Should send to Appointment", () => {
    expect(screen.getByText("Appointments").href).toBe(
      "http://localhost:3000/video"
    );
  });
});
