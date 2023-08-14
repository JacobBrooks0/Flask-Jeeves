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
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";

import RegisterPage from ".";
import { CredentialsProvider } from "../../contexts";
import { GoogleOAuthProvider } from "@react-oauth/google";

expect.extend(matchers);

describe("Register Page", () => {

    beforeEach(() => {
          render(

              <Router>
                <GoogleOAuthProvider>
                  <CredentialsProvider>
                      <RegisterPage />
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
                    <Route path="/login" element={<RegisterPage />} />
                </Routes>   
            </CredentialsProvider>
          </Router>
        );
      });

      it('should render Login page with form fields', () => {
        expect(screen.getByText("Email Address")).toBeTruthy();
        expect(screen.getByText("Password")).toBeTruthy();
        expect(screen.getByText("First Name")).toBeTruthy();
        expect(screen.getByText("Last Name")).toBeTruthy();
        expect(screen.getByRole('button', { name: "Register" })).toBeTruthy();
        expect(screen.getByRole('link', { name: "Already have an account? Sign In" })).toBeTruthy();
        expect(screen.getByRole('checkbox', { name: "I want to receive inspiration, marketing promotions and updates via email." })).toBeTruthy();
        
    });

    it("Should send to login",() => {
      expect(screen.getByRole("link").href).toBe("http://localhost:3000/login")
  })

    
})
