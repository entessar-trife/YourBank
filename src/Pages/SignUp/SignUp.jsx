import React from 'react'
import TestimonialsSectionComponent from '../../Components/TestimonialsSectionComponent/TestimonialsSectionComponent'
import FormComponent from '../../Components/FormComponent/FormComponent'

export default function SignUp() {
  return (
    <>
      <FormComponent action={"signup"} />
      <TestimonialsSectionComponent />
    </>
  )
}

