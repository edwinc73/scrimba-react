import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
