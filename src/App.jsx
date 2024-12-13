import React from 'react'
import Navbar from '../src/ZyskPages/Navbar'
import Header from '../src/ZyskPages/Header'
import Dashboard from '../src/ZyskPages/Dashboard'
import Features from '../src/ZyskPages/Page2/Features'
import TestimonialCard from '../src/ZyskPages/Page2/TestimonialCard'
import DashboardUI from '../src/ZyskPages/Page2/DashboardUI'
import FAQSection from '../src/ZyskPages/Page3/FAQSection'
import Footer1 from '../src/ZyskPages/Page3/Footer1'
import Footer from '../src/ZyskPages/Footer'
const App = () => {
  return (
    <div>
      
      <Navbar></Navbar>
      <Header></Header>
      <Dashboard></Dashboard>
      <Footer></Footer>
      <Features></Features>
      <TestimonialCard></TestimonialCard>
      <DashboardUI></DashboardUI>
      <FAQSection></FAQSection>
      <Footer1></Footer1>

    </div>
  )
}

export default App