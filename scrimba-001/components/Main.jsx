import React from 'react'
import './Main.css'

export default function Main(){
  return (
    <>
      <div className="main" >
          <h1 className="title">
            Fun facts about React
          </h1>
          <ul>
            <li><p>Was first released in 2013</p></li>
            <li><p>Was originally created by Jordan Walke</p></li>
            <li><p>Has well over 100K stars on GitHub</p></li>
            <li><p>Is maintained by Facebook</p></li>
            <li><p>Powers thousands of enterprise apps, including mobile apps</p></li>
          </ul>
          <img className="bg-logo" src="../images/reactjs-icon.svg" alt="background react logo" />
      </div>
    </>
  )
}
