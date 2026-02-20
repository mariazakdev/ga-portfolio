import Header from './components/Header'
import Nav from './components/Nav'

import Home from './pages/Home'
import About from './pages/About'
import BugPortfolio from './pages/BugPortfolio'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import './App.scss'

function App() {
  return (
    <>
      <div className="topbar">
        <Header />
     
      </div>

      <main className="page">
        <Home />
        <About />
        <BugPortfolio />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App