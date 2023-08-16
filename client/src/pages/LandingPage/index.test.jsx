import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import LandingPage from ".";
import JoinUs from "../../components/JoinUs";
import { CredentialsProvider } from "../../contexts";
import { GoogleOAuthProvider } from "@react-oauth/google";

expect.extend(matchers);

describe("Landing Page", () => {

    
     

        beforeEach(() => {
              render(
      
                  <Router>
                    <GoogleOAuthProvider>
                      <CredentialsProvider>
                          <LandingPage />
                      </CredentialsProvider>
                      </GoogleOAuthProvider>
                  </Router>
                
              );
          });
      
          it("renders without crashing", async () => {
            render(
              <Router>
                <CredentialsProvider>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                    </Routes>   
                </CredentialsProvider>
              </Router>
            );
          });
    
          afterEach(() => {
            cleanup();
        });
      
      
      

    
})
