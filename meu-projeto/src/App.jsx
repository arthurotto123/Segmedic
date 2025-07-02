import { useState } from 'react'
import Navbar from '../src/section/Navbar'
import Home from '../src/section/Home'
import Sobre from '../src/section/Sobre'
import ComoFunciona from './section/ComoFunciona'
import Depoimentos from './section/Depoimentos'
import Chamada from './section/Chamada'
import Formulario from './section/Formulario'
import Footer from './section/Footer'
import Beneficios from './section/Beneficos'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Navbar />
       <Home />
       <Beneficios/>
       <Sobre />
       <ComoFunciona />
       <Depoimentos />
       <Chamada />
       <Formulario />
       <Footer />
      
    </div>
  )
}

export default App
