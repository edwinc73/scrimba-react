import { useState, useEffect } from 'react'
import './App.css'
import Dice from "./components/Dice"

function App() {
  const [die, setDie] = useState([])

  useEffect(()=>{
    const arr = []
    for (let i = 0; i < 10; i++) {
      arr.push({value: randomNumber(), locked: false})
    }
    console.log(arr)
    setDie(arr)
  }, [])

  const randomNumber = () => {
    return Math.floor(Math.random() * 10) + 1
  }

  const handleClick = (e) =>{
    // console.log("lock")
  }

  const rollNumbers = () =>{
    setDie(prev =>
      prev.map(dice =>{
        return dice.locked ? dice : {...dice, value: randomNumber()}
      })
    )
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
            {die.map((dice, i) =>
              <Dice
              key={`dice${i}`}
              value={dice.value}
              handleClick={handleClick()}
              />
            )}
          </div>
          <div className="button-container">
            <button className="btn-roll" onClick={rollNumbers}>Roll</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
