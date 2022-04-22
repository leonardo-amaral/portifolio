import React from 'react'
import useState from 'react'

function GithubProfile() {
  [profile, setProfile] = useState([])

  return (
    <div className='GithubProfile'>
      <div className='profile'>
        <img src="/" alt="/" />
      </div>
    </div>
  )
}

export default GithubProfile