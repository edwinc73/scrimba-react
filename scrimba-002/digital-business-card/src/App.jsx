import { useState } from 'react'
import './App.css'
import Profile from "../components/Profile"
import Details from "../components/Details"
import Links from "../components/Links"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='business-card'>
        <Profile />
        <Details />
        <Links />
      </div>
    </>
  )
}

export default App
