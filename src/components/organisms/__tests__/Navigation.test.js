import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Navigation from "../Navigation";

describe("<Navigation />", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<Navigation />);

    expect(getByTestId("navigation-wrapper")).toBeInTheDocument();
  });

  it("renders hamburger without crashing", () => {
    const { getByTestId } = render(<Navigation />);

    expect(getByTestId("navigation-hamburger")).toBeInTheDocument();
  });

  it("renders modal with truthy prop", () => {
    const { getByTestId } = render(<Navigation />);

    const hamburgerWrapper = getByTestId("navigation-hamburger");

    fireEvent.click(hamburgerWrapper);

    expect(getByTestId("navigation-modal")).toBeInTheDocument();
  });
});
