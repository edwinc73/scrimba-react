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



/* Challenge:
- App should render 4-5 <Joke /> components
  (Joke component defined in its own file too)
    - Each Joke should receive a "setup" prop and a "punchline" prop
      and render those however you'd like
- Use your favorite 2-part jokes (setup & punchline), or check
  jokes.md file for some examples.



EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because
they always take things literally."

If you don't pass in a "question" prop, how might you make it only
show the punchline?
*/
