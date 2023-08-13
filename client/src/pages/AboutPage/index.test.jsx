import React from "react";
import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { CredentialsProvider } from "../../contexts";
import AboutPage from ".";

expect.extend(matchers);

describe("AboutPage", () => {

    it("renders without crashing", async () => {
        render(
          <Router>
            <CredentialsProvider>
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                </Routes>   
            </CredentialsProvider>
          </Router>
        );
      });

    
})
