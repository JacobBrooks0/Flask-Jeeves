import React, { useEffect, useContext } from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { NavLink, Link } from "react-router-dom";
import UserPage from "../../components/UserPage";
import {
  CredentialsProvider,
  useCredentials,
  CredentialsContext,
} from "../../contexts";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Outlet } from "react-router-dom";
import { Info } from "@mui/icons-material";

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
    })

    it("Should display User Image", () => {
      const image = screen.getByRole("image"); 
        
        expect(image.alt).toBe("user picture")
    })

    it("Should display User Image", () => {
      const image = screen.getByRole("image"); 
        
        expect(image.alt).toBe("user picture")
    })


    
})
