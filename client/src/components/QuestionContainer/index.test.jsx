import React, { useEffect, useContext } from "react";
import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import {
  screen,
  render,
  cleanup,
  within,
  getByText,
} from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { NavLink, Link } from "react-router-dom";
import QuestionContainer from "../QuestionContainer";
import { CredentialsProvider } from "../../contexts";

expect.extend(matchers);

describe("Question Container", () => {
  it("Component is rendered", () => {
    render(
      <Router>
        <CredentialsProvider>
          <QuestionContainer />
        </CredentialsProvider>
      </Router>
    );
  });
});
