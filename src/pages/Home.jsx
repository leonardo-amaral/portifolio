import React from 'react'
import ContentComp from '../components/ContentComp'
import RepoSlider from '../components/RepoSlider'
import Nav from '../components/Nav'
import IntroContent from '../components/IntroContent'
import Sobre from '../components/Sobre'
import Midias from '../components/subComponents/Midias'
import Footer from '../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

function Home() {
  AOS.init();
  return (
    <div data-aos="fade-down">
      <Nav />
      <IntroContent />
      <Midias/>
      {/* <Sobre /> */}
      <ContentComp />
      <RepoSlider />
      <Footer />
    </div>
  )
}

export default Home