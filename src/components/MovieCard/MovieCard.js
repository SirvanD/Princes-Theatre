import MoviePrice from "./MoviePrice";

import style from "./MovieCard.module.scss";

function Movie({ movie }) {
  const { title, poster, fwPrice, cwPrice } = movie;
  return (
    <div className={style.card}>
      <img className={style.poster} src={poster} alt={title} />
      <section className={style.movie_details}>
        <h4 data-testid="title">{title}</h4>
        <MoviePrice fwPrice={fwPrice} cwPrice={cwPrice} />
      </section>
    </div>
  );
}

export default Movie;
