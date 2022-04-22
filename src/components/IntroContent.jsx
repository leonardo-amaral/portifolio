import React from 'react'
import '../styles/IntroContent.css'
import Person from '../assets/eu.png'
import { motion } from 'framer-motion'

function IntroContent() {
  return (
    <div>
      <section className='introPage'>
        <div className='div-mom'>
          <motion.div className='text'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}>
            <div className="text1">
              <h2 className='h2'>Hello, I am Fullstack developer my name is:</h2>
              <h1 className='name' id='name-border'>Leonardo De Almeida Amaral</h1>
            </div>
            <div className="text2">
              <h2 className='h2'>Who am I?</h2>
              <h1 className='name'>I am 17 years old, currently studying for Fullstack professional training.</h1>
            </div>
          </motion.div>
          <div className="image">
            <motion.img className='person' src={Person} alt="Eu"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, damping: 20 }}
              whileHover={{ scale: 0.9, transition: 1, damping: 20 }}
              whileTap={{ scale: 0.8, transition: 0.5 }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default IntroContent