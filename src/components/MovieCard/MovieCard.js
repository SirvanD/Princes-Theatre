import style from "./MovieCard.module.scss";
function Movie() {
  return (
    <div className={style.card}>
      <img
        className={style.poster}
        src="https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
        alt=""
      />
      <section className={style.movie_details}>
        <h4>title</h4>
        <h4>Cinema World:$ </h4>
        <h4>Film World:$ </h4>
      </section>
    </div>
  );
}

export default Movie;
