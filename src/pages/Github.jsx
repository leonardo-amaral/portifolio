import React from 'react'
import Nav from '../components/Nav'
import GitHubAPI from '../services/GitHubAPI'
import '../styles/GithubStyle/Github.css'
import aos from 'aos'

function Github() {

  return (
    <div className='Github'>
      <Nav />
      <div className="fadeup" >
        <GitHubAPI />
      </div>
    </div>
  )
}

export default Github