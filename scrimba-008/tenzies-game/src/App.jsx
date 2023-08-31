import { useState, useEffect } from 'react'
import './App.css'
import Dice from "./components/Dice"

function App() {

  const randomNumber = () => {
    return Math.floor(Math.random() * 10) + 1
  }

  const randomNumbers = () => {
    return Array(10).fill("").map((x, i) => randomNumber())
  }


  const handleClick = (e) =>{
    e.target.innerText = randomNumber()
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
          {randomNumbers().map((value, index) =>
            <Dice
            key={`dice${index}`}
            value={value}
            handleClick = {handleClick}
            />
          )}
        </div>
        <div className="button-container">
          <button className="btn-roll">Roll</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
