import style from "./MovieCard.module.scss";
function Movie({ movie }) {
  return (
    <div className={style.card}>
      <img className={style.poster} src={movie.poster} alt="" />
      <section className={style.movie_details}>
        <h4>{movie.title}</h4>
        <h4>Cinema World:$ {movie.cwPrice} </h4>
        <h4>Film World:$ {movie.fwPrice} </h4>
      </section>
    </div>
  );
}

export default Movie;
