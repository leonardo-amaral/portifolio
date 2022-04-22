import React from 'react'
import Nav from '../components/Nav'
import IntroContent from '../components/IntroContent'
import '../styles/Introduction.css'

function Introduction() {
  return (
    <div className='page1'>
      <Nav />
      <div className='Intro'>
        <IntroContent />
      </div>
    </div>
  )
}

export default Introduction