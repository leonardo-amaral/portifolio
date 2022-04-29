import React, { useEffect, useState } from 'react'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { SiAdobeindesign } from 'react-icons/si'
import '../../styles/BoxSkills.css'
import Json from '../../utils/info.json'
import Carton from '../../assets/webdev.svg'


function BoxSkills() {
  // const [info, setInfo] = useState([])
  // console.log(Json)
  // useEffect(() => {
  //   fetch('../src/utils/info.json',
  //     Headers = {
  //       Accept: "application/json"
  //     }
  //   ).then(response => response.json())
  //     .then(data => setInfo(data))
  // }, [])

  return (
    <div className='box-main'>
      <div className="box">
        {
          Json.map((info) => {
            return (
              <div className='info' key={info.title}>
                <h1 className='title-box'><FaReact className='react-icon' />{info.title}</h1>
                <img className='image-skills' src={Carton} alt="" />
                <h3 className='info-skills'>{info.skills}</h3>
                <h4 className='description'>{info.description}</h4>
              </div>
            )
          })
        }
      </div>
    </div >
  )
}

export default BoxSkills