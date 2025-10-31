import React from 'react'
import HeroComponent from './../../Components/HeroComponent/HeroComponent'
import ProductSectionComponent from './../../Components/ProductSectionComponent/ProductSectionComponent'
import UseCasesSectionComponent from './../../Components/UseCasesSectionComponent/UseCasesSectionComponent'
import FAQSectionComponent from './../../Components/FAQSectionComponent/FAQSectionComponent'
import FeaturesSectionComponent from './../../Components/FeaturesSectionComponent/FeaturesSectionComponent'
import AdSectionComponent from './../../Components/AdSectionComponent/AdSectionComponent'
import TestimonialsSectionComponent from './../../Components/TestimonialsSectionComponent/TestimonialsSectionComponent'
import './Home.css'

export default function Home() {
  return (
    <div className='Home'>
      <HeroComponent />
      <ProductSectionComponent />
      <UseCasesSectionComponent />
      <FeaturesSectionComponent />
      <FAQSectionComponent mode="Home" />
      <TestimonialsSectionComponent />
      <AdSectionComponent fixedContent={true} />
    </div>
  )
}

