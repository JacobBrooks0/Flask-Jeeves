import React from "react";
import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { CredentialsProvider } from "../../contexts";
import AboutPage from ".";

expect.extend(matchers);

describe("AboutPage", () => {

  beforeAll(() => {
    render(
      <Router>
              <CredentialsProvider>
                  <AboutPage/>
              </CredentialsProvider>
      </Router>
    );
  });

  afterAll(() => {
      cleanup();
  })
    
  

  it("Should send to githubs", () => {

    expect(screen.getByRole("IconButton", {name:"Alex"}).href).toBe("https://github.com/ajearle11")
  })


})
