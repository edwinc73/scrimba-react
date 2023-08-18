import React from "react"

import "./Main.css"

export default function Main(){
  const url = "https://api.imgflip.com/get_memes"
  const [imgUrl, setImgUrl] = React.useState("https://i.imgflip.com/1ur9b0.jpg")
  const [top, setTop] = React.useState("")
  const [bottom, setBottom] = React.useState("")

  function createMeme(event) {
    event.preventDefault()
    fetchData()
  }

  function updateInput(e) {
    if(e.target.name == "top"){
      setTop(e.target.value)
    } else {
      setBottom(e.target.value)
    }

  }


  function fetchData(){
    fetch(url).then(
      res => res.json()).then(
        data => {
          const randomNumber = Math.floor((Math.random() * 100))
          const randomImg = data.data.memes[randomNumber]
          setImgUrl(randomImg.url)
        }
      )
  }
  return (
    <>
    <main>
      <form onSubmit={createMeme} className="form-container w-100">
        <div className="d-flex input-container">
          <input onChange={updateInput} type="text" className="top-text" placeholder="Top Text" name="top" />
          <input onChange={updateInput} type="text" className="bottom-text" placeholder="Bottom Text" name="bottom" />
        </div>
      <button type="submit" className="w-100">Get a new meme image  🖼</button>
      </form>
      <div className="image-container">
        <img src={imgUrl} alt="Meme image" className="meme-image" />
      </div>
    </main>
    </>
  )
}
