// import './Nav.scss'

// export default function Nav() {
//   return (
//     <nav className="nav">
//       <a className="nav__btn nav__btn--blue" href="#about">ABOUT ME</a>
//       <a className="nav__btn nav__btn--yellow" href="#portfolio">BUG PORTFOLIO</a>
//       <a className="nav__btn nav__btn--green" href="#projects">PROJECTS</a>
//       <a className="nav__btn nav__btn--red" href="#contact">CONTACT</a>
//     </nav>
//   )
// }

import './Nav.scss'

import btnAbout from '../assets/buttons/btn-about.png'
import btnPortfolio from '../assets/buttons/btn-portfolio.png'
import btnContact from '../assets/buttons/btn-contact.png'
import btnProjects from '../assets/buttons/btn-projects.png'

export default function Nav() {
  return (
    <nav className="nav">

      <a href="#about">
        <img src={btnAbout} alt="About Me" />
      </a>

      <a href="#portfolio">
        <img src={btnPortfolio} alt="Bug Portfolio" />
      </a>

      <a href="#projects">
        <img src={btnProjects} alt="Projects" />
      </a>
      
      <a href="#contact">
        <img src={btnContact} alt="Contact" />
      </a>


    </nav>
  )
}