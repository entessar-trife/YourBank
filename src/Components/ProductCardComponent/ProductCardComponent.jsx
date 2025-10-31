import IconGradient from "../IconGradient/IconGradient";
import "./ProductCardComponent.css";
export default function ProductCardComponent({ data }) {
  return (
    <div className="AM-product-card" data-aos="fade-up">
      <IconGradient 
      button={false}
      img={data.icon}
      />
      <div className="AM-card-info">
        <h3 className="title fw-400 fs-24" data-aos="fade-up" data-aos-delay="200">{data.title}</h3>
        <p className="desc fw-300 f-18" data-aos="fade-up" data-aos-delay="300">{data.desc}</p>
      </div>
    </div>
  );
}