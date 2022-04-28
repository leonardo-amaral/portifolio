import React from 'react'
import ContentComp from '../components/ContentComp'
import RepoSlider from '../components/RepoSlider'
import Nav from '../components/Nav'
import IntroContent from '../components/IntroContent'
import Sobre from '../components/Sobre'
import Midias from '../components/subComponents/Midias'

function Home() {
  return (
    <div>
      <Nav />
      <IntroContent />
      <Midias />
      {/* <Sobre /> */}
      <ContentComp />
      <RepoSlider />
    </div>
  )
}

export default Home