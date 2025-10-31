import React from 'react'
import PressReleasesSectionComponent from '../../Components/PressReleasesSectionComponent/PressReleasesSectionComponent'
import HeroComponent2 from '../../Components/HeroComponent2/HeroComponent2'
import IMG2 from '../../assets/imgs/Hero/HeroImage2.webp'
import MissionVisionComponent from '../../Components/MissionVisionComponent/MissionVisionComponent'
export default function About() {
  return (
    <>
      <HeroComponent2
        bool={true}
        image={IMG2}
        head={"Where Banking Meets Excellence!"}
        light={"Excellence!"}
        disc={"At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence."}
      />
      <MissionVisionComponent/>
      <PressReleasesSectionComponent />
    </>
  )
}
