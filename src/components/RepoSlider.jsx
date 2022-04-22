import React from 'react'
import RepoImages from '../assets/RepoImages'
import '../styles/RepoSlider.css'
import Carousel from './subComponents/Carrousel'

function RepoSlider() {
  return (
    <div>
      <section className="Slider-section">
        <div className="slide">
          <h2 className='title-slider'>Projects and Github:</h2>
          <Carousel />
        </div>
      </section>
    </div>
  )
}

export default RepoSlider