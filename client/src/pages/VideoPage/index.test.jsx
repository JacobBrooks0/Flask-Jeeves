import React from "react";
import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import LandingPage from ".";
import JoinUs from "../../components/JoinUs";
import { CredentialsProvider } from "../../contexts";
import UserPage from ".";
import VideoPage from ".";

expect.extend(matchers);

describe("Video Page", () => {

    it("renders without crashing", async () => {
        render(
          <Router>
            <CredentialsProvider>
                <Routes>
                    <Route path="/video" element={<VideoPage />} />
                </Routes>   
            </CredentialsProvider>
          </Router>
        );
      });

    
})
