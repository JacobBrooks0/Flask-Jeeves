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
import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";

import LoginPage from ".";
import { CredentialsProvider } from "../../contexts";

expect.extend(matchers);

describe("Landing Page", () => {

    it("renders without crashing", async () => {
        render(
        
          <Router>
            <CredentialsProvider>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                </Routes>   
            </CredentialsProvider>
          </Router>
        );
      });

    
})
