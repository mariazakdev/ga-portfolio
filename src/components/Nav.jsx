import { Link } from "react-router-dom"
import "./Nav.scss"

import btnAbout from "../assets/buttons/btn-about.png"
import btnPortfolio from "../assets/buttons/btn-portfolio.png"
import btnContact from "../assets/buttons/btn-contact.png"
import btnProjects from "../assets/buttons/btn-projects.png"

export default function Nav() {
  return (
    <nav className="siteNav" aria-label="Primary">
      <Link className="siteNav__link" to="/about">
        <img className="siteNav__img" src={btnAbout} alt="About Me" />
      </Link>

      <Link className="siteNav__link" to="/portfolio">
        <img className="siteNav__img" src={btnPortfolio} alt="Bug Portfolio" />
      </Link>

      <Link className="siteNav__link" to="/projects">
        <img className="siteNav__img" src={btnProjects} alt="Projects" />
      </Link>

      <Link className="siteNav__link" to="/contact">
        <img className="siteNav__img" src={btnContact} alt="Contact" />
      </Link>
    </nav>
  )
}