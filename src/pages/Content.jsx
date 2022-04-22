import React from 'react'
import ContentComp from '../components/ContentComp'
import RepoSlider from '../components/RepoSlider'
import '../styles/Content.css'

function Content() {
  return (
    <div className='content'>
      <ContentComp />
      <RepoSlider />
    </div>
  )
}

export default Content