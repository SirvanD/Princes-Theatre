import { render, screen } from "@testing-library/react";

import MoviePrice from "../MoviePrice";

const testProps = {
  cwPrice: 25,
  fwPrice: 20,
};

describe("MoviePrice", () => {
  it("should render movie prices", () => {
    render(
      <MoviePrice fwPrice={testProps.fwPrice} cwPrice={testProps.cwPrice} />
    );
    expect(screen.getByTestId("FilmWorld").textContent).toEqual(
      `Film World: $${testProps.fwPrice}`
    );
    expect(screen.getByTestId("CinemaWorld").textContent).toEqual(
      `Cinema World: $${testProps.cwPrice}`
    );
  });

  it("should highlight film world price as the lowest and Cinema World rendered not highlighted", () => {
    render(
      <MoviePrice fwPrice={testProps.fwPrice} cwPrice={testProps.cwPrice} />
    );
    expect(screen.getByTestId("FilmWorldPrice")).toHaveClass("highlight");
    expect(screen.getByTestId("CinemaWorldPrice").className).toBe("");
  });
});
