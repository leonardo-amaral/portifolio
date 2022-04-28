import React, { useEffect, useState } from 'react'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { SiAdobeindesign } from 'react-icons/si'
import '../../styles/BoxSkills.css'
import '../../utils/info.json'


function BoxSkills() {
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/src/utils/info.json")
      .then(response => response.json())
      .then(data => setInfo(data))
  }, [])


  return (
    <div className='box-main'>
      <div className="box">
        {
          info.map((info) => {
            return (
              <div className='info' key={info.title}>
                <h1 className='title-box'><FaReact className='react-icon' />{info.title}</h1>
                <h3 className='info-skills'>{info.skills}</h3>
                <h4 className='description'>{info.description}</h4>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BoxSkills