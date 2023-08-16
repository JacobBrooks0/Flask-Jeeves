import React, {useEffect, useContext} from "react";
import { describe, it, expect, beforeEach,afterEach, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { NavLink, Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { CredentialsProvider, useCredentials ,CredentialsContext} from "../../contexts";



expect.extend(matchers)

describe("Select Answer", () => {

    beforeEach(() => {
        render(
            <Router>
                <CredentialsProvider>
                    <SelectAnswer/>
                </CredentialsProvider>
            </Router>
        )
    })
    
     
    afterEach(() => {
        cleanup();
    })
})
