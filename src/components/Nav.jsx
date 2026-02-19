// import { useNavigate } from 'react-router-dom'
// import './Nav.scss'

// export default function Nav() {
//   const navigate = useNavigate()

//   return (
//     <nav className="nav">
//       <button className="nav__btn nav__btn--blue" onClick={() => navigate('/about')} type="button">
//         ABOUT ME
//       </button>

//       <button className="nav__btn nav__btn--yellow" onClick={() => navigate('/portfolio')} type="button">
//         BUG PORTFOLIO
//       </button>

//       <button className="nav__btn nav__btn--red" onClick={() => navigate('/contact')} type="button">
//         CONTACT
//       </button>

//       <button className="nav__btn nav__btn--green" onClick={() => navigate('/')} type="button">
//         PROJECTS
//       </button>
//     </nav>
//   )
// }
import { Link } from 'react-router-dom'

import './Nav.scss'

export default function Nav() {
  return (
    <nav className="nav">
      <Link className="nav__btn nav__btn--blue" to="/about">ABOUT ME</Link>
      <Link className="nav__btn nav__btn--yellow" to="/portfolio">BUG PORTFOLIO</Link>
      <Link className="nav__btn nav__btn--red" to="/contact">CONTACT</Link>
      <Link className="nav__btn nav__btn--green" to="/projects">PROJECTS</Link>
    </nav>
  )
}
