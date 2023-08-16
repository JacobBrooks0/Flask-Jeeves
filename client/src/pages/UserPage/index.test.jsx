import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";

import { CredentialsProvider } from "../../contexts";
import UserPage from ".";

expect.extend(matchers);

describe("User Page", () => {

      beforeEach(() => {
        render(

            <Router>
              <GoogleOAuthProvider>
                <CredentialsProvider>
                    <UserPage />
                </CredentialsProvider>
                </GoogleOAuthProvider>
            </Router>
          
        );
    });

    afterEach(() => {
    cleanup();
    });

    


    
})
