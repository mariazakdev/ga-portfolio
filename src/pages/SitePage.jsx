import Home from "./Hero"
import About from "../pages/About"
import Hero from "../pages/Hero"

import BugPortfolio from '../pages/BugPortfolio'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

import './SitePage.scss'

function SitePage(){
  return (

      <main className="page">
        <Hero />
        <About />
        <BugPortfolio />
        <Projects />
        <Contact />
      </main>
    
  )
}

export default SitePage