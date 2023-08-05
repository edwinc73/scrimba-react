import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "../src/components/Navbar"
import Hero from "../src/components/Hero"
import TextSection from "./components/TextSection"
import Carousel from "./components/Carousel"


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TextSection />
      <Carousel />
    </>
  )
}

export default App
