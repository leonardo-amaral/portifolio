import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Nav.css'

function Nav() {
  return (
    <div>
      <header>
        <motion.nav
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}>
          <div className="items-logo">
            <motion.h1 className='logo'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5 }}
              transition={{ duration: 0.1 }}
            >Leo<h1 className='amaral'>Amaral</h1></motion.h1>
            <div className='items-nav'>
              <motion.a className='items' href="">Home</motion.a>
              <motion.a className='items' href="">Project</motion.a>
              <motion.a className='items' href="">About</motion.a>
              <motion.a className='items' href="">Skills</motion.a>
            </div>
          </div>
        </motion.nav>
      </header>
    </div>
  )
}

export default Nav