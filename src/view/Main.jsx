import React from 'react'
import Hero from '../components/Hero'
import CompanyList from '../components/CompanyList'
import SwitchingEnergy from '../components/SwitchingEnergy'
import SimpleSteps from '../components/SimpleSteps'
import Comparisons from '../components/Comparisons'
import Utilities from '../components/Utilities'
import Testimonials from '../components/Testimonials'

const Main = () => {
  return (
      <>
          <Hero />
          <CompanyList />
          <SwitchingEnergy />
          <SimpleSteps />
          <Comparisons />
          <Utilities />
          <Testimonials/>
      </>
  )
}

export default Main