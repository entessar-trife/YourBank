import { exportedMissionVisionCardData } from "../../Data/MissionVisionCardData";
import "./MissionVisionCardComponent.css";
export default function MissionVisionCardComponent({ reverse }) {
  const index = reverse ? 1 : 0;

  return (
    <div
      className={
        reverse ? "AM-mission-vision-card-reverse" : "AM-mission-vision-card"
      }
      data-aos={reverse ? 'fade-left' : 'fade-right'}
      data-aos-delay={reverse ? '100' : '500'}
    >
      <div className="mission-vision-img" data-aos="flip-left" data-aos-delay="500">
        <div className="img-container">
          <img
            src={exportedMissionVisionCardData[index].img}
            alt={exportedMissionVisionCardData[index].alt}
          />
        </div>
      </div>

      <div className="content" data-aos="zoom-in">
        <h3 className="title fw-500">
          {exportedMissionVisionCardData[index].title}
        </h3>
        <p className="desc fw-300 f-18">
          {exportedMissionVisionCardData[index].desc}
        </p>
      </div>
    </div>
  );
}
