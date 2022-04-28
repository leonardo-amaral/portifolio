import React from 'react'
import '../styles/Sobre.css'
import Eu from '../assets/EuReal.jpeg'

function Sobre() {
  return (
    <div className='Sobre'>
      <h1 className='sobre-min'>Sobre mim:</h1>
      <div className='content-sobre'>
        <div className="card-position">
          <div className="card-sobre">
            <div className="image-sobre">
              <img className='eu-sobre' src={Eu} alt="" />
            </div>
            <div className="text-sobre">
              <h1>Nome: Leonardo</h1>
              <h1>Idade: 17 Anos</h1>
              <h1>Nascimento: 24/05</h1>
              {/* <h1>Conato: leonardoalmeidamaral@gmail.com</h1> */}
            </div>
          </div>
        </div>
        <div className="card-info">
          <div className="info-sobre">
            <h1>leozin</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre