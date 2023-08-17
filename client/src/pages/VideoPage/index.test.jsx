import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CredentialsProvider } from "../../contexts";

import VideoPage from ".";

expect.extend(matchers);

describe("User Page", () => {

      beforeEach(() => {
        render(

            <Router>
              <GoogleOAuthProvider>
                <CredentialsProvider>
                    <VideoPage />
                </CredentialsProvider>
                </GoogleOAuthProvider>
            </Router>
          
        );
    });

    afterEach(() => {
    cleanup();
    });

    it("Should display Title", () => {
      expect(screen.getAllByText(/Your Video Page/i)).toBeTruthy();
    })

    it("Should display 2 buttons", () => {
        expect(screen.getByRole('button', { name: /Join/i })).toBeTruthy();
        expect(screen.getByRole('button', { name: /Create New Meeting/i })).toBeTruthy();
        
        
    })

    


    
})
