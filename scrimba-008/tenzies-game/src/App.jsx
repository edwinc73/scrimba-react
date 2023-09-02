import { useState, useEffect } from 'react'
import './App.css'
import Dice from "./components/Dice"
import LeaderBoard from "./components/LeaderBoard"
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'


function App() {
  const [die, setDie] = useState([])
  const [start, setStart] = useState(false)
  const [timer, setTimer] = useState(0)
  const [win, setWin] = useState(false)
  const [scores, setScores] = useState(JSON.parse(localStorage.getItem("scores"))||[])

  console
  useEffect(() => {
    startTimer()
  }, [start])

  useEffect(()=>{
    const arr = []
    for (let i = 0; i < 10; i++) {
      arr.push({id: nanoid(), value: randomNumber(), locked: false, id: i})
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
      }, 10);
      return interval;
    }
  }

  function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 100);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  // change dice value related js

  const randomNumber = () => {
    return Math.floor(Math.random() * 10) + 1
  }

  const rollNumbers = () =>{
    !start && startGame()
    setDie(prev =>{
      console.log(typeof prev)
      return prev.map(dice =>{
        return dice.locked ? dice : {...dice, value: randomNumber()}
      })
    }
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
    // if(die.length > 0 && die.every(dice => dice?.value === die[0].value)){
    if(true){
      setScores(prev => {
        console.log(prev)
        prev.push({id: nanoid(), time: timer, name: "player 1"})
        localStorage.setItem("scores", JSON.stringify(prev))
        return prev
      })
      setWin(true)
    }
  }

  const resetGame = () => {
    setStart(false)
    setTimer(0)
    setWin(false)
    setDie(prev =>
      prev.map(dice =>{
        return dice.locked ? dice : {...dice, value: randomNumber()}
      })
    )
  }

  const intro = <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

  const gameLayout = () =>{
    return (
      <>
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
    </>
    )
  }

  const leaderBoardLayout = () => {
    return(
      <>
        <h1>Leaderboard</h1>
        <LeaderBoard
        scores = {scores}
        formatTime = {formatTime}
        />
      </>
    )
  }

  const rollButton = <button className="btn-roll" onClick={rollNumbers}>Roll</button>


  const resetButton = <button className="btn-roll" onClick={resetGame}>Play again</button>

  return (
    <>
      <div className='game'>
        <div className="game-board">
          {win ? leaderBoardLayout() : gameLayout()}
          <div className="button-container">
            {win && start ? resetButton : rollButton }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
