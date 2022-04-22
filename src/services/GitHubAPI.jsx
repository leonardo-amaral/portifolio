import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/GithubStyle/GithubAPI.css'
import aos from 'aos'

function GitHubAPI() {
  const [repositories, setRepositories] = useState([])

  aos.init({
    duration: 1000,
    easing: 'ease-in',
  })

  useEffect(() => {
    fetch('https://api.github.com/users/leonardo-amaral/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))

  })

  return (
    <div className='GitHubAPI' data-aos="fade-up">
      <div className="box-api">
        {
          repositories.map((repositories) => {
            return (
              <div className="repo-box" key={repositories.name}
              >
                <div className="box-items">
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