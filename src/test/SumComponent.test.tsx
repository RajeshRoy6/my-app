// src/test/SumComponent.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import SumComponent from "../components/SumComponent";

describe("SumComponent", () => {
  test("displays the correct sum of two numbers", () => {
    render(<SumComponent a={2} b={3} />);
    expect(screen.getByText("Sum: 5")).toBeInTheDocument();
  });
});
