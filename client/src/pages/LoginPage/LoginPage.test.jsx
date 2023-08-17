// import { useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useAuth } from "../../contexts";import axios from "axios";
// import { UsernameInput, PasswordInput } from "../../components";
// import { writePopup } from "../../components";
// import LoginPage from './index'
// import { screen, render, cleanup } from '@testing-library/react';
// import { CredentialsProvider } from '../../contexts';
// import userEvent from '@testing-library/user-event';

// describe('Login component', () => {
//     beforeEach(() => {
//         render(

//         <BrowserRouter>
//             <CredentialsProvider>
//               <App />
//             </CredentialsProvider>
//           </BrowserRouter>
//         );
//     });

//     afterEach(() => {
//         cleanup();
//     });
// })
import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
  screen,
  render,
  cleanup,
  within,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";

import LoginPage from ".";
import { CredentialsProvider } from "../../contexts";
import { GoogleOAuthProvider } from "@react-oauth/google";

expect.extend(matchers);

describe("Login Page", () => {
  beforeEach(() => {
    render(
      <Router>
        <GoogleOAuthProvider>
          <CredentialsProvider>
            <LoginPage />
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
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </CredentialsProvider>
      </Router>
    );
  });

  it("should render Login page with form fields", () => {
    expect(screen.getByText("Email Address")).toBeTruthy();
    expect(screen.getByText("Password")).toBeTruthy();

    expect(screen.getByRole("button", { name: "Sign In" })).toBeTruthy();
    expect(
      screen.getByRole("button", { name: "Sign in with Google" })
    ).toBeTruthy();

    expect(
      screen.getByRole("link", { name: "Don't have an account? Sign Up" })
    ).toBeTruthy();
    expect(screen.getByRole("checkbox", { name: "Remember me" })).toBeTruthy();
  });

  it("Should send to register", () => {
    expect(screen.getByRole("link").href).toBe(
      "http://localhost:3000/register"
    );
  });

  // TEST 3
  it("Should login ", async () => {
    const emailInput = screen.getByRole("textbox", { name: "Email Address" });
    const passwordInput = screen.getByRole("password", { name: "Password" });
    const submitButton = screen.getByRole("button", { name: "Sign In" });

    fireEvent.change(emailInput, { target: { value: "Test2" } });
    fireEvent.change(passwordInput, { target: { value: "Password" } });
    fireEvent.click(submitButton);

    expect(emailInput.value).toBe("Test2");
    expect(passwordInput.value).toBe("Password");

    await waitFor(() => {
      const Home = screen.getByText("Let's check your cat!");
      expect(Home).toBeInTheDocument();
    });
  });
});
