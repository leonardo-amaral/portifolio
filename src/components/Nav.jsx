import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Nav.css'
import Aos from 'aos'

function Nav() {
  return (
    <div>
      <header data-aos="fade-up">
        <motion.nav>
          <div className="items-logo">
            <motion.h1 className='logo'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5 }}
              transition={{ duration: 0.1 }}
            >Leo<h1 className='amaral'>Amaral</h1></motion.h1>
            <div className='items-nav'>
              <a className='items' href="">Home</a>
              <a className='items' href="">Project</a>
              <a className='items' href="">About</a>
              <a className='items' href="">Skills</a>
            </div>
          </div>
        </motion.nav>
      </header>
    </div>
  )
}

export default Nav