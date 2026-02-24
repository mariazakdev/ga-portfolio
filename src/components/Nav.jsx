import { Link } from "react-router-dom"
import "./Nav.scss"

import btnAbout from "../assets/buttons/btn-about.png"
import btnPortfolio from "../assets/buttons/btn-portfolio.png"
import btnContact from "../assets/buttons/btn-contact.png"
import btnProjects from "../assets/buttons/btn-projects.png"

export default function Nav() {
  return (
    <nav className="nav">

      <Link to="/about">
        <img src={btnAbout} alt="About Me" />
      </Link>

      <Link to="/portfolio">
        <img src={btnPortfolio} alt="Bug Portfolio" />
      </Link>

      <Link to="/projects">
        <img src={btnProjects} alt="Projects" />
      </Link>

      <Link to="/contact">
        <img src={btnContact} alt="Contact" />
      </Link>

    </nav>
  )
}