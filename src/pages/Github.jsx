import React from 'react'
import Nav from '../components/Nav'
import GitHubAPI from '../services/GitHubAPI'
import '../styles/GithubStyle/Github.css'
import aos from 'aos'

function Github() {
  aos.init({
    duration: 1000,
    easing: 'ease-in',
  })

  return (
    <div className='Github'>
      <Nav />
      <div className="fadeup" data-aos="fade-up">
        <GitHubAPI />
      </div>
    </div>
  )
}

export default Github