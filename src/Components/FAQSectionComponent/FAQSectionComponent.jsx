import React, { useState } from "react";
import FAQCardComponent from "../FAQCardComponent/FAQCardComponent";
import "./FAQSectionComponent.css";
import { exportedFAQCardData } from "./../../Data/FAQCardData";
import TitleComponent from "../TitleComponent/TitleComponent";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function FAQSectionComponent() {
  // State to determine whether all FAQs are displayed or only a limited set

  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the visibility of all FAQs
  const toggleFAQs = () => {
    setIsExpanded((prev) => !prev);
  };

  // Limit the number of FAQs displayed based on the state
  const displayedFAQs = isExpanded
    ? exportedFAQCardData
    : exportedFAQCardData.slice(0, 4);

  return (
    <div className="MR-faqSectionContainer px-162 pb-150">
      <TitleComponent
        title="Frequently Asked Questions"
        desc="Still you have any questions? Contact our Team via support@yourbank.com"
        highlightedWords={["Frequently"]}
        fw={false}
      />

      <div className="MR-faqCardContainer">
        <div>
          {/* Render FAQ Cards */}
          <div className="MR-faqCardList">
            {displayedFAQs.map((data, index) => (
              <FAQCardComponent
                key={index}
                Question={data.Question}
                Answer={data.Answer}
              />
            ))}
          </div>

          {/* Gradient layer to create a fading effect at the end of the FAQ list */}
          <div className="MR-linearGradient"></div>
        </div>
        {/* Toggle button to switch between showing all FAQs and limited FAQs */}
        <button className="MR-faqButton f-18 fw-400" onClick={toggleFAQs}>
          {isExpanded ? "Hide FAQ's" : "Load All FAQ's"}
          {isExpanded ? (
            <MdKeyboardArrowUp className="MR-faqArrowButton" />
          ) : (
            <MdKeyboardArrowDown className="MR-faqArrowButton" />
          )}
        </button>
      </div>
    </div>
  );
}
