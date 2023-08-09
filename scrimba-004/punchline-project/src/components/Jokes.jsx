import React from "react"
import './Jokes.css'

export default function Jokes(props) {
  const {setup, punchline} = props
  return (
    <>
      <h2>{setup}</h2>
      {setup == null ? <h2>{punchline}</h2> : <p>{punchline}</p>}
    </>
  )
}
