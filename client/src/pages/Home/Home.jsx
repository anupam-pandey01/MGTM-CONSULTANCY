import React from 'react'
import "./Home.css"
import Hero from '../../component/Hero/Hero'
import Features from '../../component/Feature/Feature'
import Stats from '../../component/Stats/Stats'
import Services from '../../component/Services/Services'
import TopDestinations from '../../component/TopDestinations/TopDestinations'

const Home = () => {
  return (
    <div className="home">
      <Hero/>
      <Stats/>
      <Services/>
      <TopDestinations/>
    </div>
  )
}

export default Home