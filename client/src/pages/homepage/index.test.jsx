import React from "react";
import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";

import HomePage from '.';
import { CredentialsProvider } from "../../contexts";

expect.extend(matchers);

describe("Homepage", () => {

    it("renders without crashing", async () => {
        render(
        
          <Router>
            <CredentialsProvider>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                </Routes>   
            </CredentialsProvider>
          </Router>
        );
      });

    

    
})
