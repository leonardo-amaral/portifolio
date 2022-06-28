import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Nav.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

function Nav() {
  AOS.init();
  return (
    <div>
      <header data-aos="fade-down">
        <nav>
          <div className="items-logo">
            <motion.h1 className='logo'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.5 }}
              transition={{ duration: 0.1 }}
            >Leo<h1 className='amaral'>Amaral</h1></motion.h1>
            <div className='items-nav'>
              <Link to="/" className='items'>Home</Link>
              <Link to="/" className='items'>Skills</Link>
              <Link to="/" className='items'>About</Link>
              <Link to="/projects" className='items'>Project</Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav