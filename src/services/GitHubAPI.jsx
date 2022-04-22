import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/GithubStyle/GithubAPI.css'

function GitHubAPI() {
  const [repositories, setRepositories] = useState([])


  useEffect(() => {
    fetch('https://api.github.com/users/leonardo-amaral/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))

  })

  return (
    <div className='GitHubAPI'>
      <div className="box-api">
        {
          repositories.map((repositories) => {
            return (
              <div className="repo-box">
                <div className="box-items"
                  key={repositories.name}
                >
                  <h1>{repositories.name}</h1>
                  <h3>{repositories.language}</h3>
                  <p>{repositories.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default GitHubAPI