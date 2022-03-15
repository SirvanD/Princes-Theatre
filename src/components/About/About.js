import style from "./About.module.scss";
function About() {
  return (
    <div className={style.description}>
      <h3 data-testid="subtitle" className={style.subtitle}>
        Streaming services at the best value
      </h3>
      <p data-testid="content" className={style.about}>
        We are committed to bring to you the most popular Star Wars titles at
        the best value to stream at your convenience.
      </p>
    </div>
  );
}

export default About;
