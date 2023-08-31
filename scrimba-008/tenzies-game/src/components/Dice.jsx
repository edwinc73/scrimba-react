import React, {useState} from "react"

import "../components/Dice.css"

export default function Dice(props){
  const {value} = props
  const [locked, setLocked] = useState(false)
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
