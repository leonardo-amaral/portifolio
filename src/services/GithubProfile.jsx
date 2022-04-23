import React from 'react'
import { useState, useEffect } from 'react'

function GithubProfile() {
  const [profile, setProfile] = useState([])


  useEffect(() => {
    fetch('https://api.github.com/users/leonardo-amaral')
      .then(response => response.json())
      .then(data => setProfile(data))
  })


  return (
    <div className='GithubProfile'>
      <div className='profile'>
        <img src="/" alt="/" />
        {
          profile.map((perfil) => {
            return (
              <div key={perfil.name}>
                <h1>{perfil.name}</h1>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default GithubProfile