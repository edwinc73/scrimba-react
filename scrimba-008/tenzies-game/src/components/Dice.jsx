import React, {useState} from "react"

import "../components/Dice.css"

export default function Dice(props){
  const {value, locked,handleClick, id} = props

  return(
    <>
    <h3 className={locked ? "active square": "square"} onClick={handleClick} id={id}>
      {value}
    </h3>
    </>
  )
}
