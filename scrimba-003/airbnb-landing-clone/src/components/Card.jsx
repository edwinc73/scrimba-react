import React from "react"
import "./Card.css"

export default function Card(props) {
  const {image, status, rating, ratingCount, country, description, price} = props
  return (
    <>
      <div className="card">
        <div className="image-card">
          <img src={image} alt="swimmer" />
          {status &&
          <div className="tag" >{status}</div>}
        </div>
        <div className="ratings">
          <img src="../../images/Star 1.svg" className="star" alt="" />
          <span className="rating-value">{rating}<span className="text-light">({ratingCount}) {country}</span></span>
        </div>
        <p className="description">{description}</p>
        <div className="price">
          <h4>From ${price}</h4><p>/ person</p>
        </div>
      </div>
    </>
  )
}
//
