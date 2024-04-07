import React from 'react'
import Hero from '../../Components/Hero/Hero'
import HeroBottom from '../../Components/HeroBottom/HeroBottom'
import ByBrands from '../../Components/ByBrands/ByBrands'
import Footer from '../../Components/Footer/Footer'
import FlyingOffTheShelves from '../../Components/FlyingOffTheShelves/FlyingOffTheShelves'

const Home = () => {
  return (
    <div>
      <Hero/>
      <HeroBottom/>
      <ByBrands/>
      <FlyingOffTheShelves/>
      <Footer/>
    </div>
  )
}

export default Home