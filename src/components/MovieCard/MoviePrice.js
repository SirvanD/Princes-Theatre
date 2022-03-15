import React from "react";

import style from "./MovieCard.module.scss";

function MoviePrice({ fwPrice, cwPrice }) {
  return (
    <div>
      <section>
        <p data-testid="FilmWorld">
          Film World:{" "}
          <span
            data-testid="FilmWorldPrice"
            className={fwPrice < cwPrice ? style.highlight : ""}
          >
            ${fwPrice}
          </span>
        </p>
        <p data-testid="CinemaWorld">
          Cinema World:{" "}
          <span
            data-testid="CinemaWorldPrice"
            className={cwPrice < fwPrice ? style.highlight : ""}
          >
            ${cwPrice}
          </span>
        </p>
      </section>
    </div>
  );
}

export default MoviePrice;
