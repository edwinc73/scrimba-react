import React from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Main.css"



export default function Main(){
  const [meme, setMeme] = React.useState({
    top:"",
    bottom: "",
    imgUrl: "https://i.imgflip.com/1g8my4.jpg"
  })

  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    console.log("ran")
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
  }, [])

  function createMeme(event) {
    event.preventDefault()
    getRandomImg()
    notify()
  }

  function getRandomImg() {
    const randomNum = Math.floor(Math.random() * 100) + 1
    setMeme(prev => {
      return {
        ...prev,
        imgUrl: allMemes[randomNum].url
      }
    })
  }

  const notify = () => toast(
    "Loading new image", {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light"
  });


  function updateInput(e) {
    setMeme(prev =>{
      const {name, value} = e.target
      return {
        [name]: value
      }
    })
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
          <h2 className="top-display">{meme.top}</h2>
          <h2 className="bottom-display">{meme.bottom}</h2>
        <img src={meme.imgUrl} alt="Meme image" className="meme-image" />
      </div>
      <ToastContainer />
    </main>
    </>
  )
}
