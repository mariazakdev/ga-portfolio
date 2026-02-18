import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
     <Header/>
      
      </div>
      <Home/>
   
    
    
    </>
  )
}

export default App
