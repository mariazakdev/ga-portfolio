import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./pages/Hero"
import About from "./pages/About"
import BugPortfolio from "./pages/BugPortfolio"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import "./App.scss"

export default function App() {
  return (
  
 <div className="app">
      <Header />
      <main className="page">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<BugPortfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      </div>
   
  )
}
// fix tablet sizes of img in bug and video in proj
// add avator to home 