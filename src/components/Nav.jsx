// Nav.jsx
import "./Nav.scss";

export default function Nav() {
  return (
    <nav className="nav">
      <button className="nav__btn nav__btn--blue">
        ABOUT ME
      </button>

      <button className="nav__btn nav__btn--yellow">
        BUG PORTFOLIO
      </button>

      <button className="nav__btn nav__btn--red">
        CONTACT
      </button>

      <button className="nav__btn nav__btn--green">
        PROJECTS
      </button>
    </nav>
  );
}
