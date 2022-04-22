import React from 'react'
import '../../styles/CarouselStyle.css'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Images from '../../assets/RepoImages'

function Carousel() {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, []);

  return (
    <main>
      <motion.div ref={carousel} className='carousel'>
        <motion.div animate={{ y: 1 }} drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
          {Images.map(Images => {
            return (
              <motion.div className='item' key={Images}>
                <img src={Images} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </main>
  )
}

export default Carousel