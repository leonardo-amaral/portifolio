import React from 'react'
import '../styles/Sobre.css'
import Eu from '../assets/EuReal.jpeg'

function Sobre() {
  return (
    <div className='Sobre'>
      <div className='content-sobre'>
        <h1 className='sobre-min'>Sobre mim:</h1>
        <div className="card-sobre">
          <div className="image-sobre">
            <img className='eu-sobre' src={Eu} alt="" />
          </div>
          <div className="text-sobre">
            <h1>Leonardo</h1>
            <div className="p">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi reprehenderit tempore cum neque nam iusto eius eveniet, veritatis delectus obcaecati pariatur ipsa fuga dolore harum molestiae officia iste earum quidem. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre