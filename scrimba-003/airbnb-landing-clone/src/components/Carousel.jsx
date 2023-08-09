import React from "react"
import "./Carousel.css"
import data from "../../data/data.json"
import Card from "../components/Card"

export default function Carousel() {
  console.log(data)
  return (
    <>
      <div className="carousel">
        {
          data.map(item =>
            <Card
              image ={item.image}
              status ={item.status}
              rating={item.rating}
              ratingCount={item.reviewCount}
              country={item.country}
              description={item.description}
              price={item.price}
              key={item.id}
            />
            )
        }
      </div>
    </>
  )
}
//
