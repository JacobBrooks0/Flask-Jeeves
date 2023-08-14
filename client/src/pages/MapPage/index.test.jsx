import React from "react";
import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import MapPage from ".";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { CredentialsProvider } from "../../contexts";

expect.extend(matchers);

describe("Map Page", () => {

    it("renders without crashing", async () => {
        render(
          <Router>
            <GoogleOAuthProvider>
                      <CredentialsProvider>
                          <MapPage />
                      </CredentialsProvider>
                      </GoogleOAuthProvider>
          </Router>
        );
      });

    
})
