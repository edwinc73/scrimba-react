import React from "react"

import "../components/Dice.css"

export default function Dice(props){
  return(
    <>
      <div className="square">
        {props.value}
      </div>
    </>
  )
}
