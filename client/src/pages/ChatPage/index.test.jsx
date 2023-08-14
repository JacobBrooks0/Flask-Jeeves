import React from "react";
import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { CredentialsProvider } from "../../contexts";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ChatPage } from ".";

expect.extend(matchers);

describe("ChatPage", () => {



    beforeAll(() => {
        render(

            <Router>
                <GoogleOAuthProvider>
                <CredentialsProvider>
                    <ChatPage />
                </CredentialsProvider>
                </GoogleOAuthProvider>
            </Router>
           
        );
    });

    afterAll(() => {
        cleanup();
    });


    it("renders without crashing", async () => {
        render(
          <Router>
            <GoogleOAuthProvider>
            <CredentialsProvider>
                <Routes>
                    <Route path="/http-call" element={<ChatPage />} />
                </Routes>   
            </CredentialsProvider>
            </GoogleOAuthProvider>
          </Router>
        );
      });

    
})
