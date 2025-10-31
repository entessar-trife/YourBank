import "./FeaturesCardComponent.css"

export default function FeaturesCardComponent({ title, img, content, index }) {
  return (
    <>
      <div className="featuresCard" data-aos="flip-right" data-aos-delay={index * 100}>
        <div className="ET-cardTitle">
          <span className="fw-400"> {title} </span>
          <img src={img} alt="arrow icon" />
        </div>
        <p className="f-18 fw-300"> {content} </p>
      </div>
    </>
  )
}
