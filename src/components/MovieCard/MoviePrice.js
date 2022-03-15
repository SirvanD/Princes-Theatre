import React from "react";
import style from "./MoviePrice.module.scss";
function MoviePrice({ fwPrice, cwPrice }) {
  return (
    <div>
      {fwPrice < cwPrice ? (
        <section>
          <p>
            Film Word:<span className={style.highlight}>${fwPrice}</span>
          </p>
          <p>Cinema World: ${cwPrice}</p>
        </section>
      ) : (
        <section>
          <p>Film Word:${fwPrice}</p>
          <p>
            Cinema World:<span className={style.highlight}>${cwPrice}</span>
          </p>
        </section>
      )}
    </div>
  );
}

export default MoviePrice;
