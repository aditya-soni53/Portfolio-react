import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Gitub from "@iconscout/react-unicons/icons/uil-github"
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin"

const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width:'100%'}} />
        <div className="f-content">
            <span>adityasoni53@gmail.com</span>
            <div className="f-icons">
                <a href="https://github.com/aditya-soni53" rel="noreferrer" target='_blank'> <Gitub color='white' size='3rem'/> </a>
                <a href="https://www.linkedin.com/in/aditya-soni-894599203" rel="noreferrer" target='_blank'> <Linkedin color='white' size='3rem'/> </a>
            </div>
        </div>
    </div>
  )
}

export default Footer