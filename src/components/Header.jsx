import { Link } from "react-router-dom"
import Nav from "./Nav"
import "./Header.scss"

export default function Header() {
  return (
    <header className="header">

    <a href="#home" className="header__home">
        <div className="header__inner">
          <h1 className="header__name">RYAN PIRNASAR</h1>
          <p className="header__role">QA TESTER</p>
        </div>
      </a>

      <Nav />

    </header>
  )
}