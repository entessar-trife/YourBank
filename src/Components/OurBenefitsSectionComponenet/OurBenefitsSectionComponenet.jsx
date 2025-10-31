import React from "react";
import "./OurBenefitsSectionComponenet.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import OurBenefitsCardComponent from "../OurBenefitsCardComponent/OurBenefitsCardComponent";
import { exportedData } from "./../../Data/OurBenefitsCardData";

export default function OurBenefitsSectionComponenet() {
  // Function to render a row of two cards with a dashed line in between
  const renderCardRow = (leftData, rightData, isFirstRow) => (
    <div className="hw-OurBenefitsCardsRow">
      <OurBenefitsCardComponent
        left={true}
        data={leftData}
        cardType={isFirstRow ? "left" : "right"} // Determines card style based on row position
      />

      {/* Add a dashed vertical line between the two cards */}
      <span className="hw-dashed-lines-vr "></span>{" "}

      <OurBenefitsCardComponent
        left={false}
        data={rightData}
        cardType={isFirstRow ? "right" : "left"}
      />
    </div>
  );

  return (
    <section className="HW-OurBenefitsComponent px-162 pb-150">
      {/* Display the section title and description */}

      <div className="title-head">
        <TitleComponent
          title={"Our Benefits"}
          desc={
            "At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth."
          }
          highlightedWords={["Benefits"]}
          fw={false}
        />
      </div>
      {/* Render the cards */}
      <div className="HW-OurBenefitsCardsContainer">
        {renderCardRow(exportedData[0], exportedData[1], true)}
        <span className="hw-dashed-lines-hr"></span>
        {renderCardRow(exportedData[2], exportedData[3], false)}
      </div>
    </section>
  );
}