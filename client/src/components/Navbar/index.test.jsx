import React, {useEffect, useContext} from "react";
import { describe, it, expect, beforeAll,beforeEach,afterEach, afterAll, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { NavLink, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { CredentialsProvider } from "../../contexts";
import { useCredentials } from "../../contexts";
import { Outlet } from "react-router-dom";

expect.extend(matchers);

describe("Navbar", () => {

    
        beforeEach(() => {
           useCredentials();
           useContext(CredentialsContext)
            
          render(

            <BrowserRouter>
            <Router>
                <CredentialsProvider>
                    <Navbar/>
                </CredentialsProvider>
            </Router>
            </BrowserRouter>
        );
        });
        

    it("Navbar is rendered", () => {
        const { getByText } = render(<Navbar number="one" word="about" />);
        expect(getByText("About")).toBeInTheDocument();
      });

    it("Displays a nav bar with 8 children", () => {
        const nav = screen.getByRole("link");
        expect(nav).toBeInTheDocument();
        expect(nav.childNodes.length).toBe(8);
    });
    
     

    it("Should send to about",() => {
        
        const { getByText } = render(<Navbar number="one" word="about" />);
     expect(getByText("About").href).toBe("http://localhost:5173/about")
    })

    it("Should send to Video",() => {
        const { getByText } = render(<Navbar number="one" word="video" />);
     expect(getByText("Video").href).toBe("http://localhost:5173/video")
    })

    it("Should send to Symptom",() => {
        const { getByText } = render(<Navbar number="one" word="symptom" />);
     expect(getByText("Symptom").href).toBe("http://localhost:5173/symptom")
    })

    it("Should send to Map",() => {
        const { getByText } = render(<Navbar number="one" word="maps" />);
     expect(getByText("Maps").href).toBe("http://localhost:5173/map")
    })




    afterEach(() => {
        cleanup();
    });
})
