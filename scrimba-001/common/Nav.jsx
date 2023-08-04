import React from 'react'
import './Nav.css'

export default function Nav(){
  return (
    <nav>
      <div className="logo">
        <img src="../images/reactjs-icon.svg" alt="ReactFacts logo" />
        <div className="logo-text">ReactFacts</div>
      </div>
      <div className="description">React Course - Project 1</div>
    </nav>
  )
}
