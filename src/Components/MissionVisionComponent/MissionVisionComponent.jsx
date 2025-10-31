import TitleComponent from "../TitleComponent/TitleComponent";
import MissionVisionCardComponent from "../MissionVisionCardComponent/MissionVisionCardComponent";
import "./MissionVisionComponent.css";

export default function MissionVisionComponent() {
  return (
    <section className="AM-missionVision-sec pb-150 px-162">
        <TitleComponent
          title="Mission & Vision"
          desc="We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development"
          highlightedWords={["Mission &", "Vision"]}
          fw={true}
        />
      <MissionVisionCardComponent reverse={false} />
      <MissionVisionCardComponent reverse={true} />
    </section>
  );
}
