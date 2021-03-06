import { useEffect, useState } from "react";

import getData from "../../utilities/getData";
import MovieCard from "../MovieCard/MovieCard";

import style from "./MovieList.module.scss";

function MovieList() {
  const [movies, setMovies] = useState(null);

  const getMoviesData = async () => {
    let response = await getData();
    setMovies(response.movies);
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  return (
    <section className={style.movies_container}>
      {!movies && (
        <span data-testid="loading" className={style.loading}>
          loading movies...
        </span>
      )}
      {movies &&
        movies.map((movie, key) => {
          return <MovieCard movie={movie} key={key} />;
        })}
    </section>
  );
}

export default MovieList;
