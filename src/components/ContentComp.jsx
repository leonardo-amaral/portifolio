import React from 'react'
import Midias from './subComponents/Midias'
import BoxSkills from './subComponents/BoxSkills'
import '../styles/Content-content.css'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { SiAdobeindesign } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { FaRocket } from 'react-icons/fa'
import { BsDiscord } from 'react-icons/bs'
import { motion } from 'framer-motion'

function Content() {
  return (
    <div>
      <section className='content-style'>
        <div className='content-main'>
          <div className="skills-title">
            <h1 className='Skills'>Skills:</h1>
          </div>
          <BoxSkills />
        </div>
      </section>
    </div>
  )
}

export default Content