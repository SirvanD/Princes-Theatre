import { render, screen } from "@testing-library/react";

import MovieCard from "../MovieCard";

const testProps = {
  poster:
    "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
  title: "Star Wars: Episode VIII - The Last Jedi",
  cwPrice: 25,
  fwPrice: 23,
};

describe("MovieCard", () => {
  it("should render movie title", () => {
    render(<MovieCard movie={testProps} />);
    expect(screen.getByTestId("title").textContent).toEqual(testProps.title);
  });

  it("should render movie poster", () => {
    render(<MovieCard movie={testProps} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", testProps.poster);
    expect(screen.getByRole("img")).toHaveAttribute("alt", testProps.title);
  });
});
