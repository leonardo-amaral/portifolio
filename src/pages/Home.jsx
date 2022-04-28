import React from 'react'
import ContentComp from '../components/ContentComp'
import RepoSlider from '../components/RepoSlider'
import Nav from '../components/Nav'
import IntroContent from '../components/IntroContent'
import Sobre from '../components/Sobre'
import Midias from '../components/subComponents/Midias'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Nav />
      <IntroContent />
      <Midias />
      {/* <Sobre /> */}
      <ContentComp />
      <RepoSlider />
      <Footer />
    </div>
  )
}

export default Home