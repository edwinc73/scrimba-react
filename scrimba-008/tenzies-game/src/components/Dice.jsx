import React from "react"

import "../components/Dice.css"

export default function Dice(props){
  const {value, locked} = props
  return(
    <>
      <div className={locked ? "active square": "square"}>
        <h3>
          {value}
        </h3>
      </div>
    </>
  )
}
