import React from 'react'
import '../../styles/Midias.css'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { FaRocket } from 'react-icons/fa'
import { BsDiscord } from 'react-icons/bs'

export default function Midias() {
  return (
    <div>
      <div className='social-media'>
        <div className='icons-text'>
          <FaLinkedin className='linkedin' />
          <a href='https://www.linkedin.com/in/leonardo-almeida-amaral/' className='items-media'>Linkedin</a>
        </div>
        <div className='icons-text'>
          <BsGithub className='github' />
          <a href='https://github.com/leonardo-amaral' className='items-media'>Github</a>
        </div>
        <div className='icons-text'>
          <FaInstagram className='instagram' />
          <a href='https://www.instagram.com/nizoell/' className='items-media'>Instagram</a>
        </div>
        <div className='icons-text'>
          <FaRocket className='rocketseat' />
          <a href='https://app.rocketseat.com.br/me/leonardo-amaral-08604' className='items-media'>Rocketseat</a>
        </div>
        <div className='icons-text'>
          <BsDiscord className='discord' />
          <a href='
https://discord.com/users/296365283499573251s' className='items-media'>Discord</a>
        </div>
      </div>
    </div>
  )
}
