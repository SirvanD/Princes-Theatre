import { render, screen } from "@testing-library/react";

import Header from "../Header";

const testProps = {
  content: "Prince's Theatre",
};

describe("Header", () => {
  it("should render header content", () => {
    render(<Header />);
    expect(screen.getByTestId("header").textContent).toEqual(testProps.content);
  });
});
