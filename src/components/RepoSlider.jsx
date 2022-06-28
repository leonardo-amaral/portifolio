import React from 'react'
import RepoImages from '../assets/RepoImages'
import '../styles/RepoSlider.css'
import Carousel from './subComponents/Carrousel'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function RepoSlider() {
  AOS.init({
    duration: 1000,
    easing: 'ease'
  });

  return (
    <div>
      <section className="Slider-section">
        <div className="slide" data-aos="fade-down">
          <h2 className='title-slider'>Projects and Github:</h2>
          <Carousel />
        </div>
      </section>
    </div>
  )
}

export default RepoSlider