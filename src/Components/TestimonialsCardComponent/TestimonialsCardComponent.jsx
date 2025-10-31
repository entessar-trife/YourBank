import React from 'react'
import image from "./../../assets/imgs/TestimonialsIcons/Icon.png"
import './TestimonialsCardComponent.css'

export default function TestimonialsCardComponent({data}) {
  return (
    <>
        {/* left shadow for card in small screen */}
        <div className="AA-left-shadow-card" />
        {/* start card testimony*/}
        <div className="AA-testimony-card" data-aos="zoom-in">
            <div className="AA-icon-container">
              <img className="AA-icon" src={image} alt="icon"/>
            </div>
            <p className="AA-card-desc f-18 fw-400">{data.opinion}</p>
            <span className="AA-card-name AA-f-18 fw-500">{data.userName}</span>
        </div>
        {/* end card testimony*/}
        {/* right shadow for card in small screen */}
        <div className="AA-right-shadow-card" />
      </>

  )
}

