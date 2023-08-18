import React from "react"

import "./Nav.css"

export default function Nav(){
  return (
    <>
      <nav className="d-flex justify-content-between align-items-center nav-container">
        <div className="logo-container d-flex">
          <img src="../images/Troll Face.svg" alt="Troll face" />
          <div className="logo-text">Meme Generator</div>
        </div>
        <div className="nav-title">React Course - Project 3</div>
      </nav>
    </>
  )
}
