import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "../components/Nav"
import Main from "../components/Main"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Nav />
      <Main />
    </div>
    </>
  )
}

export default App
