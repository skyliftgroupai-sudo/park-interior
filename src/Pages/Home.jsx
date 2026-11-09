import React from 'react'
import Hero from '../Components/Hero'
import AboutSection from './AboutSection'
import WhatweDo from './WhatweDo'
import CTASection from './Cta'
import OurWork from './OurWork'
import HowWeWork from './HowWeWork'
import ExperienceSection from './Experinece'
import ContactSection from './Contact'
import AreasServed from './AreasServed'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <WhatweDo/>
      <CTASection/>
      <OurWork/>
      <HowWeWork/>
      <ExperienceSection/>
      <AreasServed/>
      {/* <ContactSection/> */}
    </div>
  )
}

export default Home
