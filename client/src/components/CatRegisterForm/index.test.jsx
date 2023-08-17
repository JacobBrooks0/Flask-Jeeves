import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { screen, render, cleanup, within , getByText} from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import style from "./style.module.css";
import { useCredentials } from "../../contexts";
import CatRegisterForm from ".";

import { CredentialsProvider } from "../../contexts";



describe("Cat Register Form", () => {

    
        beforeAll(() => {
          
          render(
            <Router>
                <CredentialsProvider>
                    
                    <CatRegisterForm/>
                </CredentialsProvider>
            </Router>
        );
        });
        


     

        it('should render form fields', () => {
            expect(screen.getByRole('textbox', { name: "Name" })).toBeTruthy();
            expect(screen.getByRole('textbox', { name: "Breed" })).toBeTruthy();
            
            expect(screen.getByRole('textbox', { name: "Date of Birth" })).toBeTruthy();
            expect(screen.getByRole('button', { name: "Outdoor/Indoor Outdoor" })).toBeTruthy();
    
            expect(screen.getByRole('button', { name: "Neutered Yes" })).toBeTruthy();
            expect(screen.getByRole('button', { name: "Sex Male" })).toBeTruthy();

            expect(screen.getByRole('button', { name: "Diet Processed" })).toBeTruthy();
            expect(screen.getByRole('button', { name: "Contact with other Pets Yes" })).toBeTruthy();

            expect(screen.getByRole('button', { name: "Submit" })).toBeTruthy();
           
        });

        afterAll(() => {
            cleanup();
        })
    

    })
