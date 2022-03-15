import style from "./About.module.scss";
function About() {
  return (
    <div className={style.description}>
      <h4 className={style.subtitle}>Streaming services at the best value</h4>
      <p>
        We are committed to bring to you the most popular Star Wars titles at
        the best value to stream at your convenience.
      </p>
    </div>
  );
}

export default About;
