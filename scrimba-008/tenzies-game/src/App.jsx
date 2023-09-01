import { useState, useEffect } from 'react'
import './App.css'
import Dice from "./components/Dice"

function App() {
  const [die, setDie] = useState([])
  const [start, setStart] = useState(false)
  const [timer, setTimer] = useState(0)
  const [win, setWin] = useState(false)

  useEffect(() => {
    startTimer()
  }, [start])

  useEffect(()=>{
    const arr = []
    for (let i = 0; i < 10; i++) {
      arr.push({value: randomNumber(), locked: false, id: i})
    }
    setDie(arr)
  }, [])

  useEffect(() => {
    winCondition()
    win && console.log("you win")
  }, [die])

  // timer related js

  const startTimer = () => {
    if(start && timer == 0){
      const interval = setInterval(() => {
        setTimer(prevTime => prevTime + 1)
      }, 1000);
      return interval;
    }
  }

  // change dice value related js

  const randomNumber = () => {
    return Math.floor(Math.random() * 10) + 1
  }

  const rollNumbers = () =>{
    !start && startGame()
    setDie(prev =>
      prev.map(dice =>{
        return dice.locked ? dice : {...dice, value: randomNumber()}
      })
    )
  }

  const handleClick = (e) =>{
    const id = e.target.id
    setDie(prev => {
      return prev.map(dice =>
        dice.id == id ?{...dice, locked:!dice.locked} : dice
      )
    })
  }

  // game  logic
  const startGame = () => {setStart(true)}

  const winCondition = () => {
    if(die.length > 0 && die.every(dice => dice?.value === die[0].value)){
      setWin(true)
    }
  }

  const intro = <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <>
      <div className='game'>
        <div className="game-board">
          <div className="text-container">
            <h1>Tenzies</h1>
            {start ? <p>{formatTime(timer)}</p>: intro}

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
