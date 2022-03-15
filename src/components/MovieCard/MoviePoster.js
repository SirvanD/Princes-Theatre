import style from "./MovieCard.module.scss";

function MoviePoster({ poster, title }) {
  return (
    <div>
      <img className={style.poster} src={poster} alt={title} />
    </div>
  );
}

export default MoviePoster;
