import React from 'react'
import "./PressCardComponent.css"

export default function PressCardComponent({ image, title, location, date, desc }) {
  return (
    <>
      <div className="PressCardComponent">
        <div className='Af-imgBorder'>
          <img src={image} alt="image card" data-aos="zoom-in" />
        </div>
        <div className="PressCardContent" data-aos="fade-up">
          <h5 className="fs-24 fw-400"> {title} </h5>
          <div className="ET-cardInfo f-18 fw-300">
            <span> {location} </span>
            <span> {date} </span>
          </div>
          <p className="f-18 fw-300"> {desc} </p>
        </div>
      </div>
    </>
  )
}
