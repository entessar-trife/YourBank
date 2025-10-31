import img1 from '../assets/imgs/Vision/Image1.webp';
import img2 from '../assets/imgs/Vision/Image2.webp';

const storedMissionVisionCardData = localStorage.getItem("MissionVisionCardData");

let MissionVisionCardData = storedMissionVisionCardData
  ? JSON.parse(storedMissionVisionCardData)
  : [
      {
        img: img1,
        title: "Mission",
        desc: "At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.",
        alt: "Vision-img1",
      },
      {
        img: img2,
        title: "Vision",
        desc: "Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.",
        alt: "Vision-img2",
      },
    ];
if (!storedMissionVisionCardData) {
  localStorage.setItem(
    "MissionVisionCardData",
    JSON.stringify(MissionVisionCardData)
  );
}
export const exportedMissionVisionCardData = MissionVisionCardData;
