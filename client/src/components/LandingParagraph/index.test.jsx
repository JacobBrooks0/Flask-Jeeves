import React, {useEffect, useContext} from "react";
import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { screen, render, cleanup, within , getByText} from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { NavLink, Link } from "react-router-dom";
import LandingTitle from "../LandingTitle";
import LandingParagraph from "../LandingParagraph";
import { CredentialsProvider } from "../../contexts";

expect.extend(matchers);

describe("Landing Paragraph", () => {

    
      
        

    it("Component is rendered", () => {
        render(
            <Router>
                <CredentialsProvider>
                    <LandingParagraph/>
                </CredentialsProvider>
            </Router>
        );
      });

     
      
    
})
