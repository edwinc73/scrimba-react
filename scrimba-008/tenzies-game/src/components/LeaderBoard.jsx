import React from "react"

import "../components/LeaderBoard.css"

export default function LeaderBoard(props){
  const {scores} = props
  console.log(scores)
  return (
    <>
      <div className="scores">
        <p>1:1 : Name</p>
        <p>1:1 : Name</p>
        <p>1:1 : Name</p>
        <p>1:1 : Name</p>
        <p>1:1 : Name</p>
        <p>1:1 : Name</p>
        <p>1:1 : Name</p>
        <p>1:1 : Name</p>
        <p>1:1 : Name</p>
        <p>1:1 : Name</p>
        <p>1:1 : Name</p>
        <hr />
        <div className="button-section">
          <p>Your Scores: 1:2</p>
          <button class="btn-roll">Play Again</button>
        </div>
      </div>
    </>
  )
}
