import "./AdSectionComponent.css";
import toRightDown from "./../../assets/imgs/AbstractDesign3.png";
import { Link } from "react-router-dom";
import adSecBg from "./../../assets/imgs/blend.png";
import TitleComponent from "../TitleComponent/TitleComponent";
import { useEffect, useState } from "react";
import { AdSecData } from "../../Data/AdSectionData";

export default function AdSectionComponent({ fixedContent }) {
  const [isLogin, setIsLogin] = useState(false);
  const [screen, setScreen] = useState(false);

  // handle screen resize and change the content
  const handleResize = () => {
    if (window.innerWidth <= 1440) {
      setScreen(true);
    } else {
      setScreen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screen]);

  // Hide the "Open Account" button when signed in and re-display it again upon logging out
  useEffect(() => {
    const StoredUser = JSON.parse(localStorage.getItem("user"));
    setIsLogin(!!StoredUser);

    const handleLoginStatusChange = () => {
      const updatedUser = JSON.parse(localStorage.getItem("user"));
      setIsLogin(!!updatedUser);
    };

    window.addEventListener("loginStatusChanged", handleLoginStatusChange);

    return () => {
      window.removeEventListener("loginStatusChanged", handleLoginStatusChange);
    };
  }, []);

  return (
    <div className='AdSectionComponent px-162 pb-150'>
      <div className="hw-AdSectionContent" data-aos="zoom-in" data-aos-delay="200">
        {/* <img src={adSecBg} className='hw-AdSecBg' /> */}
        <img src={toRightDown} className='toRightDown' />
        <div className="hw-AdSecRight">
          {AdSecData.map((e, index) => {
            if (fixedContent) {
              if (screen) {
                return (
                  index === 0 && (
                    <TitleComponent
                      key={index}
                      title={e.title}
                      desc={e.desc}
                      highlightedWords={["YourBank today!"]}
                      fw={true}
                    />
                  )
                );
              } else {
                return (
                  index === 1 && (
                    <TitleComponent
                      key={index}
                      title={e.title}
                      desc={e.desc}
                      highlightedWords={["YourBank today!"]}
                      fw={true}
                    />
                  )
                );
              }
            } else {
              return (
                index === 0 && (
                  <TitleComponent
                    key={index}
                    title={e.title}
                    desc={e.desc}
                    highlightedWords={["YourBank today!"]}
                    fw={true}
                  />
                )
              );
            }
          })}
        </div>

        {!isLogin && (
          <button className="hw-AdSecleft">
            <Link
              to="/signUp"
              onClick={() => {
                localStorage.setItem("activePath", JSON.stringify("/signUp"));
                window.dispatchEvent(new Event("activePathChanged"));
              }}
            >
              Open Account
            </Link>
          </button>
        )}
      </div>
    </div>
  );
}