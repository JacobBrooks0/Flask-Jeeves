import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts";import axios from "axios";
import { UsernameInput, PasswordInput } from "../../components";
import { writePopup } from "../../components";
import LoginPage from './index'
import { screen, render, cleanup } from '@testing-library/react';
import { CredentialsProvider } from '../../contexts';
import userEvent from '@testing-library/user-event';


describe('Login component', () => {
    beforeEach(() => {
        render(

        <BrowserRouter>
            <CredentialsProvider>
              <App />
            </CredentialsProvider>
          </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

})
