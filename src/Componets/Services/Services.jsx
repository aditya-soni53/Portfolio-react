import React , { useContext } from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Aditya-Soni.pdf'
import { themeContext } from "../../Context";

const Services = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
            <span>services</span>
            <span>
               I have well-versed in Python,HTML,CSS,JavaScript,ReactJS,Bootstrap,MySql
               <br /> for backend I use RESTful APIs using frameworks like Flask or Django.
            </span>
            <a href={Resume} download >
              <button className="button s-button">Download CV</button>
            </a>
            
            <div className='blur s-blurl' style={{background:"#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className="cards">
        <div style={{left:'14rem'}}>
              <Card
              emoji={HeartEmoji}
              heading={'Backend Developer'}
              detail={"Python, Flask , Django"}  
              />
            </div>

            {/* second card */}

            <div style={{top:'12rem', left:'-4rem'}}>
              <Card
              emoji={Glasses}
              heading={'Frontend Developer'}
              detail={"Html, Css, JavaScript, React"}
              />
            </div>

            {/* third card */}
            <div style={{top:'19rem', left:'12rem'}}>
              <Card
              emoji={Humble}
              heading={'Data Base'}
              detail={"MySql"}
              />
            </div>

            <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services