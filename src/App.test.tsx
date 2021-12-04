import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("the boys", () => {
  render(<App />);
  const linkElement = screen.getByText(/for the boys/i);
  expect(linkElement).toBeInTheDocument();
});
