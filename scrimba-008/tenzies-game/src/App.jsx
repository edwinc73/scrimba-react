import { useState, useEffect } from 'react'
import './App.css'
import Dice from "./components/Dice"

function App() {
  const [die, setDie] = useState([])

  useEffect(()=>{
    const arr = []
    for (let i = 0; i < 10; i++) {
      arr.push({value: randomNumber(), locked: false, id: i})
    }
    setDie(arr)
  }, [])

  useEffect(() => {
    win()
  }, [die])
  console.log(die)
  const randomNumber = () => {
    return Math.floor(Math.random() * 10) + 1
  }

  const handleClick = (e) =>{
    const id = e.target.id
    setDie(prev => {
      return prev.map(dice =>
        dice.id == id ?{...dice, locked:!dice.locked} : dice
      )
    })
  }

  const rollNumbers = () =>{
    setDie(prev =>
      prev.map(dice =>{
        return dice.locked ? dice : {...dice, value: randomNumber()}
      })
    )
  }

  const win = () => {
    if(die.every(dice => dice.value === die[0].value)){
      console.log("You won!")
    }
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
            {die.map(dice =>
              <Dice
              id= {dice.id}
              key= {`dice${dice.id}`}
              value= {dice.value}
              locked= {dice.locked}
              handleClick= {handleClick}
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
