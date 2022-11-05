import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/GithubStyle/GithubAPI.css'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { Text } from '@chakra-ui/react'
import { Repositories } from '../components/subComponents/Repositories'
import { ImageRepositories } from '../components/subComponents/ImagesRepositories'
import ImagesRepo from '../utils/imagesRepo.json'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function GitHubAPI() {

  const [profile, setProfile] = useState([])
  const [repositories, setRepositories] = useState([])
  const [bgSize, setBgSize] = useState()

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

      console.log(profile)
  }, [])
  AOS.init({
    duration: 1000,
    easing: 'ease'
  });


  return (
    <div className='GitHubAPI' data-aos="fade-up">
      <div className="profille">

        {
          profile != undefined &&
          (
            <div className="profile-container" >
              <div className="profile-content" style={{ width: bgSize, padding: '2vw'}} onMouseEnter={() =>  setBgSize('55vw')}>
              <img style={{marginLeft: '7vw', borderRadius: '200px', border: '10px solid white'}} src={profile.avatar_url} />
                <h1 style={{ fontSize: '24px', width: '20vw', marginLeft: '10vw'}}>{profile?.name}</h1>
              </div>

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