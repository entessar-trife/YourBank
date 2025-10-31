import React, { useState, useEffect, useRef } from "react";
import surprise from "../../assets/imgs/surprise.webp";
import giftImage from "../../assets/imgs/gift.svg";
import Fireworks from "fireworks-js";
import "./GiftComponent.css";

export default function GiftComponent() {
  const [showFireworks, setShowFireworks] = useState(false);
  const [isNewUser, setIsNewUser] = useState(true);
  const fireworkContainerRef = useRef(null);

  useEffect(() => {
    const storedIsNewUser = localStorage.getItem("isNewUser");
    setIsNewUser(storedIsNewUser === null || storedIsNewUser === "true");

    // Function to handle storage change
    const handleStorageChange = () => {
      const isNewUser = localStorage.getItem("isNewUser");
      setIsNewUser(isNewUser === "true");
    };

    // Add event listener for storage changes
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  //  add Fireworks animation
  useEffect(() => {
    if (showFireworks) {
      const container = fireworkContainerRef.current;

      if (container) {
        const options = {
          hue: { min: 0, max: 360 },
          delay: { min: 15, max: 30 },
          speed: 2,
          acceleration: 1.05,
          friction: 0.98,
          gravity: 1.5,
          particles: 50,
          trace: 3,
          explosion: 5,
          autoReSize: true,
          brightness: { min: 50, max: 80 },
          decay: { min: 0.015, max: 0.03 },
          boundaries: {
            x: 0,
            y: 0,
            width: container.clientWidth,
            height: container.clientHeight,
          },
          mouse: { click: false, move: false },
          sound: { enable: false },
        };

        const fireworks = new Fireworks(container, options);
        fireworks.start();

        const timer = setTimeout(() => {
          fireworks.stop();
          setShowFireworks(false);
        }, 5000);

        return () => {
          clearTimeout(timer);
          fireworks.stop();
        };
      }
    }
  }, [showFireworks]);

  // Function to handle gift click
  const handleGiftClick = () => {
    localStorage.setItem("isNewUser", "false");
    setIsNewUser(false);
    setShowFireworks(true);

    Swal.fire({
      imageUrl: surprise,
      imageWidth: 200,
      imageAlt: "gift image",
      title: "Congratulations!",
      text: "You’ve won $50 as a reward for signing up!",
      customClass: {
        title: "custom-title",
        confirmButton: "custom-confirm-btn",
      },
      scrollbarPadding: false,
      showClass: {
        popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
                `,
      },
      hideClass: {
        popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
                `,
      },
    });
  };

  return (
    <div>
      <div
        ref={fireworkContainerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: showFireworks ? 1000 : -1,
          pointerEvents: "none",
        }}
      ></div>

      {isNewUser && (
        <img
          src={giftImage}
          alt="gift image"
          className="giftIcon"
          onClick={handleGiftClick}
        />
      )}
    </div>
  );
}
