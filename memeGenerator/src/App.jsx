import { useState } from 'react'
import Header from "./components/Header.jsx"
import  Major from "./components/Major.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Major/>
    </>
  )
}

export default App
