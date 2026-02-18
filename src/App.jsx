// import { useState } from 'react'
// import Header from './components/Header'
// import Home from './pages/Home'

// import './App.scss'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//      <Header/>
      
//       </div>
//       <Home/>
   
    
    
//     </>
//   )
// }

// export default App

import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import BugPortfolio from './pages/BugPortfolio'
import { Routes, Route } from 'react-router-dom'

import './App.scss'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
<Route  path="/portfolio" element={< BugPortfolio/>} />


        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
