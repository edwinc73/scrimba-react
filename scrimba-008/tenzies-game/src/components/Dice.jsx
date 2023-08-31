import React, {useState} from "react"

import "../components/Dice.css"

export default function Dice(props){
  const {value, handleClick} = props
  const [locked, setLocked] = useState(false)

  return(
    <>
    <h3 className={locked ? "active square": "square"} onClick={handleClick}>
      {value}
    </h3>
    </>
  )
}
