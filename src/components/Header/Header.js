import style from "./Header.module.scss";
function NavBar() {
  return (
    <div>
      <nav>
        <h1 data-testid="header" className={style.title}>
          Prince's Theatre
        </h1>
      </nav>
    </div>
  );
}

export default NavBar;
