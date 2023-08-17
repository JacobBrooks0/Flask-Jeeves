import React from "react";
// import axios from axios
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";

import RegisterPage from ".";
import { CredentialsProvider } from "../../contexts";
import { GoogleOAuthProvider } from "@react-oauth/google";

expect.extend(matchers);

describe("Register Page", () => {
  beforeEach(() => {
    render(
      <Router>
        <GoogleOAuthProvider>
          <CredentialsProvider>
            <RegisterPage />
          </CredentialsProvider>
        </GoogleOAuthProvider>
      </Router>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("renders without crashing", async () => {
    render(
      <Router>
        <CredentialsProvider>
          <Routes>
            <Route path="/login" element={<RegisterPage />} />
          </Routes>
        </CredentialsProvider>
      </Router>
    );
  });

  it("should render Login page with form fields", () => {
    expect(screen.getByText("Email Address")).toBeTruthy();
    expect(screen.getByText("Password")).toBeTruthy();
    expect(screen.getByText("First Name")).toBeTruthy();
    expect(screen.getByText("Last Name")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Register" })).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "Already have an account? Sign In" })
    ).toBeTruthy();
    expect(
      screen.getByRole("checkbox", {
        name:
          "I want to receive inspiration, marketing promotions and updates via email.",
      })
    ).toBeTruthy();
  });

  it("Should send to login", () => {
    expect(screen.getByRole("link").href).toBe("http://localhost:3000/login");
  });

  //   it('should register a new user and redirect to login page', async () => {
  //     vi.spyOn(axios, 'post').mockResolvedValueOnce({
  //         status: 201,
  //         data: {
  //             error: 'This is a successful registration response',
  //         },
  //     });

  //     const usernameInput = screen.getByPlaceholderText(/username/i);
  //     const passwordInput = screen.getByPlaceholderText(/password/i);
  //     const registerButton = screen.getByRole('button', { name: /register account/i });

  //     await userEvent.type(usernameInput, 'new_user');
  //     await userEvent.type(passwordInput, 'new_password');
  //     userEvent.click(registerButton);

  //     await new Promise((resolve) => setTimeout(resolve, 100));

  //     expect(screen.findByText(/Your account has been registered!/i)).toBeTruthy();

  //     waitFor(() => {
  //         expect(window.location.pathname).toBe('/login').toBeTruthy(); //cannot get this to work.
  //     });
  // });
});
