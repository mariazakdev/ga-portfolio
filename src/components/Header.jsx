// import { Link } from "react-router-dom"
// import Nav from "./Nav"
// import "./Header.scss"

// export default function Header() {
//   return (
//     <header className="header">

//     <a href="/" className="header__home">
   
//         <div className="header__inner">
//           <h1 className="header__name">RYAN PIRNASAR</h1>
//           <p className="header__role">QA TESTER</p>
//         </div>
//       </a>

//       <Nav />

//     </header>
//   )
// }

// Header.jsx (clean BEM: Header owns nav block)
import { Link } from "react-router-dom"
import Nav from "./Nav"
import "./Header.scss"

export default function Header() {
  return (
    <header className="siteHeader">
      <Link to="/" className="siteHeader__home">
        <div className="siteHeader__panel">
          <h1 className="siteHeader__name">RYAN PIRNASAR</h1>
          <p className="siteHeader__role">QA TESTER</p>
        </div>
      </Link>

      <Nav />
    </header>
  )
}