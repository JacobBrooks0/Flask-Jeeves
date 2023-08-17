import React, { useEffect, useContext } from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CredentialsProvider } from "../../contexts";
import UserPage from ".";

expect.extend(matchers);

describe("UserPage", () => {
  beforeEach(() => {
    render(
      <Router>
        <CredentialsProvider>
          <UserPage />
        </CredentialsProvider>
      </Router>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Should display information", () => {
    expect(screen.getByText(/First Name/i)).toBeTruthy();
  });

  it("Should display User Image", () => {
    const image = screen.getByRole("image");

    expect(image.alt).toBe("user picture");
  });

  it("Should display User Image", () => {
    const image = screen.getByRole("image");

    expect(image.alt).toBe("user picture");
  });
});
