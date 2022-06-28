import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/GithubStyle/GithubAPI.css'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { Text } from '@chakra-ui/react'
import { Repositories } from '../components/subComponents/Repositories'
import { ImageRepositories } from '../components/subComponents/ImagesRepositories'
import ImagesRepo from '../utils/imagesRepo.json'

export default function GitHubAPI() {

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
              
            </div>
          )
        }



      </div>
      <div className="box-api">
          <Repositories />
      </div>
    </div>
  )
}