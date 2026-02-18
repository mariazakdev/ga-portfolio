import { useNavigate } from 'react-router-dom'
import "./Nav.scss";

// export default function Nav() {
//   return (
//     <nav className="nav">
//       <button className="nav__btn nav__btn--blue">
//         ABOUT ME
//       </button>

//       <button className="nav__btn nav__btn--yellow">
//         BUG PORTFOLIO
//       </button>

//       <button className="nav__btn nav__btn--red">
//         CONTACT
//       </button>

//       <button className="nav__btn nav__btn--green">
//         PROJECTS
//       </button>
//     </nav>
//   );
// }

export default function Nav() {
  const navigate = useNavigate()

  return (
    <nav className="nav">
      <button
        className="nav__btn nav__btn--blue"
        onClick={() => navigate('about')}
        type="button"
      >
        ABOUT ME
      </button>

      <button
        className="nav__btn nav__btn--yellow"
        onClick={() => navigate('portfolio')}
        type="button"
      >
        BUG PORTFOLIO
      </button>

      <button
        className="nav__btn nav__btn--red"
        onClick={() => navigate('contact')}
        type="button"
      >
        CONTACT
      </button>

      <button
        className="nav__btn nav__btn--green"
        onClick={() => navigate('/portfolio')}
        type="button"
      >
        PROJECTS
      </button>
    </nav>
  )
}