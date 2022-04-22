import React from 'react'
import Nav from '../components/Nav'
import GitHubAPI from '../services/GitHubAPI'
import '../styles/GithubStyle/GithubAPI.css'

function Github() {
  return (
    <div className='Github'>
      <Nav />
      <GitHubAPI />
    </div>
  )
}

export default Github