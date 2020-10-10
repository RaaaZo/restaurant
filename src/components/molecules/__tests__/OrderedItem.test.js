import React from "react";
import { render, screen } from "@testing-library/react";
import OrderedItem from "../OrderedItem";
import { ThemeProvider } from "styled-components";
import { MainTheme } from "theme/MainTheme";

test("renders ordered items without crashing", () => {
  render(
    <ThemeProvider theme={MainTheme}>
      <OrderedItem dish="stek" amount={2} price={10} />
    </ThemeProvider>
  );

  expect(screen.getByText("stek")).toBeInTheDocument();
});

test("should not render component when dish prop is undefined", () => {
  render(
    <ThemeProvider theme={MainTheme}>
      <OrderedItem price={10} />
    </ThemeProvider>
  );

  expect(screen.queryByText("stek")).not.toBeInTheDocument();
});
