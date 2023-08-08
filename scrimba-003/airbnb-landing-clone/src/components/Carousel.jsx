import React from "react"
import "./Carousel.css"

export default function Carousel() {
  return (
    <>
      <div className="carousel">
        <div className="card">
          <div className="image-card">
            <img src="../../images/image 12.png" alt="swimmer" />
            <div className="tag">Sold out</div>
          </div>
          <div className="ratings">
            <img src="../../images/Star 1.svg" className="star" alt="" />
            <p className="rating-value">5.0<div className="text-light">(6) USA</div></p>
          </div>
          <p className="description">Life Lessons with Katie Zaferes</p>
          <div className="price">
            <h4>From $136</h4><p>/ person</p>
          </div>
        </div>
        <div className="card">
          <div className="image-card">
            <img src="../../images/mountain-bike 1.png" alt="mountain biker" />
            <div className="tag">Sold out</div>
          </div>
          <div className="ratings">
            <img src="../../images/Star 1.svg" className="star" alt="" />
            <p className="rating-value">4.8 <div className="text-light">(2) USA</div></p>
          </div>
          <p className="description">Group Mountain Biking</p>
          <div className="price">
            <h4>From $150</h4><p>/ person</p>
          </div>
        </div>
        <div className="card">
          <div className="image-card">
            <img src="../../images/wedding-photography 1.png" alt="swimmer" />
            <div className="tag">Sold out</div>
          </div>
          <div className="ratings">
            <img src="../../images/Star 1.svg" className="star" alt="" />
            <p className="rating-value">5.0 <div className="text-light">(30) USA</div></p>
          </div>
          <p className="description">Learn wedding photography</p>
          <div className="price">
            <h4>From $125</h4><p>/ person</p>
          </div>
        </div>
      </div>
    </>
  )
}
//
