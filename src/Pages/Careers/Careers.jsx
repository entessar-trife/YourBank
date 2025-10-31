import React from 'react'
import FAQSectionComponent from '../../Components/FAQSectionComponent/FAQSectionComponent'
import HeroComponent2 from '../../Components/HeroComponent2/HeroComponent2'
import IMG1 from '../../assets/imgs/Hero/HeroImage1.webp'
import OurValuesSectionComponent from '../../Components/OurValuesSectionComponent/OurValuesSectionComponent'
import JobComponent from "../../Components/JobComponent/JobComponent";
import OurBenefitsSectionComponenet from '../../Components/OurBenefitsSectionComponenet/OurBenefitsSectionComponenet'
import AdSectionComponent from '../../Components/AdSectionComponent/AdSectionComponent'

export default function Careers() {
  return (
    <>
      <HeroComponent2
        bool={false}
        image={IMG1}
        head={"Welcome to YourBank Careers!"}
        light={"YourBank"}
        disc={"Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking."}
      />
      <OurValuesSectionComponent />
      <OurBenefitsSectionComponenet />
      <JobComponent />
      <FAQSectionComponent />
      <AdSectionComponent fixedContent={false} />
    </>
  )
}

