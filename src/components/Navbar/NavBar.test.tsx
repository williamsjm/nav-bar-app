import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar component", () => {
  test("renders NavBar correctly", () => {
    render(<NavBar />);

    expect(screen.getByTestId("navBar")).toBeInTheDocument();

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Rick and Morty")).toBeInTheDocument();
    expect(screen.getByText("Harry Potter")).toBeInTheDocument();

    expect(screen.getByTestId("languageButton")).toBeInTheDocument();
  });
});
