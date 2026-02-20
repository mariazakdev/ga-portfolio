import './Nav.scss'

export default function Nav() {
  return (
    <nav className="nav">
      <a className="nav__btn nav__btn--blue" href="#about">ABOUT ME</a>
      <a className="nav__btn nav__btn--yellow" href="#portfolio">BUG PORTFOLIO</a>
      <a className="nav__btn nav__btn--green" href="#projects">PROJECTS</a>
      <a className="nav__btn nav__btn--red" href="#contact">CONTACT</a>
    </nav>
  )
}
