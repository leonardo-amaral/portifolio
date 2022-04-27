import React from 'react'
import ContentComp from '../components/ContentComp'
import RepoSlider from '../components/RepoSlider'
import Nav from '../components/Nav'
import IntroContent from '../components/IntroContent'

function Home() {
  return (
    <div>
      <Nav />
      <IntroContent />
      <ContentComp />
      <RepoSlider />
    </div>
  )
}

export default Home