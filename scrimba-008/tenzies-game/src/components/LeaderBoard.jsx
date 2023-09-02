import React from "react"

import "../components/LeaderBoard.css"

export default function LeaderBoard(props){
  const {scores,formatTime} = props
  scores.sort((x,y) => x.time - y.time )
  const top5Scores = scores.splice(0,5).map(score => {
    return (
      <div className="score">
        <span><p>{formatTime(score.time)}</p></span>
        <span><p>{score.name}</p></span>
      </div>
    )
  })
  console.log(scores)
  return (
    <>
      <div className="scores">
        {top5Scores}
        <hr />
        <div className="button-section">
          <input type="text" placeholder="Your Score"/>
          <p>{formatTime((scores[0].time))}</p>
        </div>
      </div>
    </>
  )
}
