import style from "./MovieCard.module.scss";
import MoviePrice from "./MoviePrice";
function Movie({ movie }) {
  return (
    <div className={style.card}>
      <img className={style.poster} src={movie.poster} alt="" />
      <section className={style.movie_details}>
        <h4>{movie.title}</h4>
        <MoviePrice fwPrice={movie.fwPrice} cwPrice={movie.cwPrice} />
      </section>
    </div>
  );
}

export default Movie;
