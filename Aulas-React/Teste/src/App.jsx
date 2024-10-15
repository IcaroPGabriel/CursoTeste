import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrimeiroComponente from './Componentes/PrimeiroComponente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Boa Noite</h1>
      <PrimeiroComponente/>
    </>
  )
}

export default App
