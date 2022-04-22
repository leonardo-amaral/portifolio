import React from 'react'
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
        <div className='content-main'>
          <h1 className='Skills'>Skills:</h1>
          <div className="boxes">
            <motion.div className='box-1'
              drag
              dragDirectionLock
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.5}
              whileTap={{ cursor: "grabbing" }}>
              <div className="title">
                <FaReact className='react-icon' />
                <h2 className='tag-box'>FrontEnd Development.</h2>
              </div>
              <p>HTML5, CSS3, JavaScript, ReactJS, TypeScript, Bootstrap.</p>
            </motion.div>
            <motion.div className='box-2'
              drag
              dragDirectionLock
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.5}
              whileTap={{ cursor: "grabbing" }}>
              <div className="title">
                <FaNodeJs className='node' />
                <h2 className='tag-box'>BackEnd Development.</h2>
              </div>
              <p>Node, PHP, Axios, TypeScript, VueJS, SQL, MySQL.</p>
            </motion.div>
            <motion.div className='box-3'
              drag
              dragDirectionLock
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.5}
              whileTap={{ cursor: "grabbing" }}>
              <div className="title">
                <SiAdobeindesign className='database' />
                <h2 className='tag-box'>Design.</h2>
              </div>
              <p>Abode Photoshop, Adobe Premier, Adobe After Effects, Sony Vegas, Cinema 4D.</p>
            </motion.div>
          </div>

          <div className="boxes">
            <motion.div className='box-1'
              drag
              dragDirectionLock
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.5}
              whileTap={{ cursor: "grabbing" }}>
              <div className="title">
                <FaReact className='react-icon' />
                <h2 className='tag-box'>FrontEnd Development.</h2>
              </div>
              <p>HTML5, CSS3, JavaScript, ReactJS, TypeScript, Bootstrap.</p>
            </motion.div>
            <motion.div className='box-2'
              drag
              dragDirectionLock
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.5}
              whileTap={{ cursor: "grabbing" }}>
              <div className="title">
                <FaNodeJs className='node' />
                <h2 className='tag-box'>BackEnd Development.</h2>
              </div>
              <p>Node, PHP, Axios, TypeScript, VueJS, SQL, MySQL.</p>
            </motion.div>
            <motion.div className='box-3'
              drag
              dragDirectionLock
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.5}
              whileTap={{ cursor: "grabbing" }}>
              <div className="title">
                <SiAdobeindesign className='database' />
                <h2 className='tag-box'>Design.</h2>
              </div>
              <p>Abode Photoshop, Adobe Premier, Adobe After Effects, Sony Vegas, Cinema 4D.</p>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Content