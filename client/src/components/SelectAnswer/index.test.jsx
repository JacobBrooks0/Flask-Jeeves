import React, { useEffect, useContext } from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { NavLink, Link } from "react-router-dom";
import SelectAnswer from "../../components/SelectAnswer";
import {
  CredentialsProvider,
  useCredentials,
  CredentialsContext,
} from "../../contexts";

import { Outlet } from "react-router-dom";
import { Info } from "@mui/icons-material";

expect.extend(matchers);

describe("SelectAnswer", () => {
  beforeEach(() => {
    render(
      <Router>
        <CredentialsProvider>
          <SelectAnswer />
        </CredentialsProvider>
      </Router>
    );
  });

  afterEach(() => {
    cleanup();
  });

  //   Doesnt run
  it("Displays a div", () => {
    const div = screen.getByRole("container");
    expect(div).toBeInTheDocument();
  });
  it("Displays a div2", () => {
    const div2 = screen.getByRole("container2");
    expect(div2).toBeInTheDocument();
  });
  it("Displays a div3", () => {
    const div3 = screen.getByRole("container3");
    expect(div3).toBeInTheDocument();
  });
  it("Displays a list", () => {
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
    expect(list.childNodes.length).toBe(11);
  });
  it("Displays buttons", () => {
    const buttons = screen.getAllByRole("buttons");
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[1]).toBeInTheDocument();
    expect(buttons[2]).toBeInTheDocument();
    expect(buttons[3]).toBeInTheDocument();
  });
  // doesnt run
});
