import React from 'react'
import TestimonialsSectionComponent from './../../Components/TestimonialsSectionComponent/TestimonialsSectionComponent'
import FormComponent from '../../Components/FormComponent/FormComponent'


export default function Login() {
  return (
    <div>
      <FormComponent action={"login"} />
      <TestimonialsSectionComponent/>
    </div>
  )
}

