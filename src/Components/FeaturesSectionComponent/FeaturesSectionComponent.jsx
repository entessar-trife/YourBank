import { useState } from "react"
import "./FeaturesSectionComponent.css"
import FeaturesCardComponent from "../FeaturesCardComponent/FeaturesCardComponent"
import TitleComponent from "../TitleComponent/TitleComponent"
import { exportedFeaturesCardData } from "../../Data/FeaturesCardData"

export default function FeaturesSectionComponent() {
  const btns = [
    {
      filter: "Online Banking",
      txt: "Online Banking"
    },
    {
      filter: "Financial Tools",
      txt: "Financial Tools"
    },
    {
      filter: "Customer Support",
      txt: "Customer Support"
    }
  ]
  const [activeBtn, setActiveBtn] = useState("Online Banking");
  const [fade, setFade] = useState(false);

  function activeTab(filter) {
    setFade(true)
    setTimeout(() => {
      setActiveBtn(filter);
      setFade(false);
    }, 300)
  }

  return (
    <section className="features px-162 pb-150">
      <div className="featuresTitle mb-80">
        <TitleComponent
          title="Our Features"
          desc="Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience"
          highlightedWords={["Features"]}
          fw={false}
        />
      </div>

      <div className="featuresContent">
        <div className="ET-btns p-50" data-aos="fade-right" data-aos-duration="2000">
          {btns.map((btn, index) => {
            return (
              <button
                key={index}
                className={`fw-400 f-18 ${activeBtn == btn.filter ? "ET-activeBtn" : "ET-btn"}`}
                onClick={() => activeTab(btn.filter)}
              >
                {btn.txt}
              </button>
            );
          })}
        </div>

        <div className="featuresCards">
          <div className={`fading ${fade ? 'fade-out' : 'fade-in'}`}>
            {exportedFeaturesCardData.map((e) => {
              if (activeBtn == e.filter) {
                return e.btn.map((b, index) => {
                  return (
                    <FeaturesCardComponent
                      key={index}
                      title={b.title}
                      img={b.img}
                      content={b.content}
                      index={index}
                    />
                  );
                });
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
