import React from 'react'
import './Details.css'

export default function Details(){
  return (
    <>
    <div className="info-general">
      <div className="info-name">
        <h1>Edwin Cheng</h1>
        <h5 className='text-orange'>Frontend Developer</h5>
        <a href=""><small>IDEC.website</small></a>
      </div>
      <div className="info-links">
        <div className="info-link"><i class="fa-solid fa-envelope"></i>Email</div>
        <div className="info-link"><i className="fa-brands fa-linkedin"></i>Linkedin</div>
      </div>
      <div className="section">
        <h3>About</h3>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
      </div>
      <div className="section">
        <h3>Interests</h3>
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>
    </div>
    </>
  )
}
