import React from "react";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./HowWeProtectComponent.css";
import OurBenefitsCardComponent from "../OurBenefitsCardComponent/OurBenefitsCardComponent";
import { exportedHowWeProtectData } from "./../../Data/HowWeProtectDATA";
export default function HowWeProtectComponent() {
  //a function to render the cards passing them the data from the file.
  const renderBenefitsCards = () => {
    return exportedHowWeProtectData.map((data, index) => (
      <OurBenefitsCardComponent key={index} data={data} />
    ));
  };
  return (
    <section className="HowWeProtectComponent px-162 pb-150">
      {/* rendering the title of the section */}
      <TitleComponent
        title={"How We Protect You"}
        desc={
          "At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times"
        }
        highlightedWords={["Protect You"]}
        fw={true}
      />
    <div className="HW-howWeProtectYouContainer">
        <div className="howWeProtectBG">{/*the background of the Section it has two children:*/}
          <div className="hwHowWeProtectGradient"></div>{/*for the gradient*/}
          <div className="hw-HowWeBlendBG"></div>{/*for the blend image*/}
        </div>
        <div className="howWeProtectCardsContainer">
          <div className="howProtectRow">{/*render two cards on each row*/}
            {renderBenefitsCards().slice(0, 2)}
          </div>
          <div className="howProtectRow">
            {renderBenefitsCards().slice(2, 4)}
          </div>
        </div>
      </div>
    </section>
  );
}