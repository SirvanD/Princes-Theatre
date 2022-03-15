import { render, screen } from "@testing-library/react";

import About from "../About";

const testProps = {
  subtitle: "Streaming services at the best value",
  content:
    "We are committed to bring to you the most popular Star Wars titles at the best value to stream at your convenience.",
};

describe("About", () => {
  it("should render about subtitle and content", () => {
    render(<About />);
    expect(screen.getByTestId("subtitle").textContent).toEqual(
      testProps.subtitle
    );
    expect(screen.getByTestId("content").textContent).toEqual(
      testProps.content
    );
  });
});
