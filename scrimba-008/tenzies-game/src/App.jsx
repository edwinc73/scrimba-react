import { useState, useEffect } from 'react'
import './App.css'
import Dice from "./components/Dice"

function App() {

  const randomNumber = () => {
    return Math.floor(Math.random() * 10) + 1
  }


  return (
    <>
  <div className='game'>
      <div className="game-board">
        <div className="text-container">
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        </div>
        <div className="die-container">
          {Array(10).fill("").map((dice, index) =>
          <Dice
          key={`dice${index}`}
          value={randomNumber()}
          locked={false}
          />
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
