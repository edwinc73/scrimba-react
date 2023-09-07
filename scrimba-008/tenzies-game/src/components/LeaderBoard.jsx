import React from "react"

import "../components/LeaderBoard.css"

export default function LeaderBoard(props){
  const {scores,formatTime} = props
  const currectScore = scores[scores.length - 1]
  const sortedScores = scores.sort((x,y) => x.time - y.time )
  const top5Scores = sortedScores.slice(0,5).map(score => {
    return (
      <div className="score">
        <span><p>{formatTime(score.time)}</p></span>
      </div>
    )
  })

  return (
    <>
      <div className="scores">
        {top5Scores}
        <hr />
        <div className="button-section">
          <p>Your Score:</p>
          <p>{formatTime((currectScore.time))}</p>
        </div>
      </div>
    </>
  )
}
