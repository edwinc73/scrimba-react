import React from "react"
import './App.css'
import jokes from "../jokes.json"
import Jokes from "./components/Jokes"

function App() {
  return (
    <>
      {
        jokes.map(joke =>{
          return(
          <Jokes
            setup={joke.setup}
            punchline={joke.punchline}
          />
          )
        }
        )
      }
    </>
  )
}

export default App


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

// 0
// :
// {setup: 'I got my daughter a fridge for her birthday.', punchline: "I can't wait to see her face light up when she opens it."}
// 1
// :
// {setup: 'How did the hacker escape the police?', punchline: 'He just ransomware!'}
// 2
// :
// {setup: "Why don't pirates travel on mountain roads?", punchline: 'Scurvy.'}
// 3
// :
// {setup: 'Why do bees stay in the hive in the winter?', punchline: 'Swarm.'}
// 4
// :
// {setup: "What's the best thing about Switzerland?", punchline: "I don't know, but the flag is a big plus!"}
