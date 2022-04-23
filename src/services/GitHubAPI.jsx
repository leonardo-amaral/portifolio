import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/GithubStyle/GithubAPI.css'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import aos from 'aos'

function GitHubAPI() {

  aos.init({
    duration: 1000,
    easing: 'ease-in',
  })


  const [profile, setProfile] = useState([])
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/leonardo-amaral/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  useEffect(() => {
    fetch('https://api.github.com/users/leonardo-amaral')
      .then(response => response.json())
      .then(result => {
        setProfile(result)
      })
  }, [])






  return (
    <div className='GitHubAPI' data-aos="fade-up">
      <div className="profille">

        {
          profile != undefined &&
          (
            <div className="profile-content">
              <div className="content-git">
                <div className="img-git">
                  <img className='git-image' src={profile.avatar_url} alt="" />
                </div>
                <div className="profile-dados">
                  <h1 className='nome'>{profile.name}</h1>
                  <p>{profile.bio}</p>
                  <div className="midias-git">
                    <a className='midias-content' href={profile.blog}><FaLinkedin className='linkedin' />Linkedin</a>
                    <a className='midias-content' href={profile.html_url}><BsGithub className='githubb' />Ir para página Github oficial.</a>
                  </div>
                  <p>{profile.location}</p>
                </div>
              </div>
            </div>
          )
        }



      </div>
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