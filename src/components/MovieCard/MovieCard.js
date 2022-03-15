import MoviePrice from "./MoviePrice";
import MovieTitle from "./MovieTitle";
import MoviePoster from "./MoviePoster";

import style from "./MovieCard.module.scss";

function Movie({ movie }) {
  return (
    <div className={style.card}>
      <MoviePoster poster={movie.poster} title={movie.title} />
      <section className={style.movie_details}>
        <MovieTitle title={movie.title} />
        <MoviePrice fwPrice={movie.fwPrice} cwPrice={movie.cwPrice} />
      </section>
    </div>
  );
}

export default Movie;
