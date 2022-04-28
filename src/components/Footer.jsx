import React from 'react'
import '../styles/Footer.css'
import { motion } from 'framer-motion'
import Midias from './subComponents/MidiasFooter'

function Footer() {
  return (
    <div>
      <footer>
        <div className="content-footer">
          <div className='contact-footer'>
            <h1 className='logo'
            >Leo<h1 className='amaral'>Amaral</h1></h1>
            <h1 className='email'>leonardoalmeidamaral@gmail.com</h1>
            <h1 className='numero-zap'>(11)997748165</h1>
          </div>
          <div className="copyright">
            <p className='copyright-text'>Todos os direitos reservados. Todos os textos, imagens e outros materiais são protegidos por direitos autorais e outros direitos.
              <br></br>  copyright © 2022</p>
          </div>
          <Midias />
        </div>
      </footer>
    </div>
  )
}

export default Footer