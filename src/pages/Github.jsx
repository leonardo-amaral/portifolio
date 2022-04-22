import React from 'react'
import Nav from '../components/Nav'
import GitHubAPI from '../services/GitHubAPI'
import '../styles/GithubStyle/Github.css'

function Github() {
  return (
    <div className='Github'>
      <Nav />
      {/* <GitHubPerfil /> */}
      <GitHubAPI />
    </div>
  )
}

export default Github