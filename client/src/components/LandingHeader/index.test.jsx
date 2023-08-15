import React, {useEffect, useContext} from "react";
import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { screen, render, cleanup, within , getByText} from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { NavLink, Link } from "react-router-dom";

import { CredentialsProvider } from "../../contexts";


import LandingHeader from ".";

expect.extend(matchers);

describe("Join US", () => {

    
        beforeAll(() => {
          
          render(
            <Router>
                <CredentialsProvider>
                    
                    <LandingHeader/>
                </CredentialsProvider>
            </Router>
        );
        });
        


     

      it("Links to register", () => {
       
       
        expect(screen.getByText("Join Us").href).toBe("http://localhost:3000/register")
      })
    
      it('should render 2 buttons', () => {
        expect(screen.getByRole('link', { name: "Log In" })).toBeTruthy();
        expect(screen.getByRole('link', { name: "Join Us" })).toBeTruthy();
        })

    afterAll(() => {
        cleanup();
    });
})
