import { useState } from "react";
import "./ProductSectionComponent.css";
import "./../../Components/TitleComponent/TitleComponent";
import TitleComponent from "./../../Components/TitleComponent/TitleComponent";
import ProductCardComponent from "../ProductCardComponent/ProductCardComponent";
import { ProductCardData, ProductCardData2 } from "../../Data/ProductCardData";
export default function ProductSectionComponent() {
  const [toggleState, setToggleState] = useState(1);
  const [fade, setFade] = useState(false);

  // function to move and fade effect of tabs
  const toggleTab = (index) => {
    setFade(true);
    setTimeout(() => {
      setToggleState(index);
      setFade(false);
    }, 300);
  };
  // arr of tabs
  const productTabs = [
    { id: 1, label: "For Individuals", data: ProductCardData },
    { id: 2, label: "For Businesses", data: ProductCardData2 },
  ];

  return (
    <section className="AM-product-sec pb-150">
      <div
        className="title-tabs  px-162 title-product mb-100 
      "
      >
        <TitleComponent
          title="Our Products"
          desc="Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations"
          highlightedWords={["Products"]}
          fw={false}
        />
        <div className="tabs">
          {productTabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab fw-400 ${
                toggleState === tab.id ? "active-tab" : ""
              }`}
              onClick={() => toggleTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className={`fading ${fade ? "fade-out" : "fade-in"}`}>
        {productTabs.map((tab) => (
          <div
            key={tab.id}
            className={`row-cards px-162 ${
              toggleState === tab.id ? "active-content" : ""
            }`}
          >
            {tab.data.map((e, index) => (
              <ProductCardComponent key={index} data={e} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
