import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/App/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders hit", () => {
  render(<App />);
  const other = screen.getByText(/Cache HIT!!!!!/i);
  expect(other).toBeInTheDocument();
});
