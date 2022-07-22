import React from 'react'
import Navbar from '../Navbar/Navbar'
import AboutSection from './AboutSection/AboutSection'
import StorySection from './StorySection'
import VisionSection from './VisionSection'
import WorkSection from './WorkSection'
import Footer from "../Footer/Footer"

const Company = () => {
  return (
    <div>
        <Navbar/>
        <AboutSection/>
        <StorySection/>
        <WorkSection/>
        <VisionSection/>
        <Footer/>
    </div>
  )
}

export default Company