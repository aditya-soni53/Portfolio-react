import React , { useContext } from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from "../../Context"
import { Link } from 'react-scroll'
const Intor = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span  style={{ color: darkMode ? "white" : "" }}>Hey ! I Am</span>
                <span>Aditya Soni</span>
                <span>Frontend Developer with high level of experience in web Developer , production the quality work
                </span>
            </div>
            <Link activeClass="active" to="Contact" spy={true} smooth={true}>
                <button className="button i-button">Hire me</button>
            </Link>
            <div className="i-icons">
                <a href="https://github.com/aditya-soni53" target='_blank' rel="noreferrer"><img src={Github} alt="" /></a>
                <a href="https://www.linkedin.com/in/aditya-soni-894599203" target='_blank' rel="noreferrer"><img src={LinkedIn} alt="" /></a>
            </div>
        </div>

        <div className="i-right">
            <img src={vector1} alt="" />
            <img src={vector2} alt="" />
            <img src={boy} alt=""/>
            <img src={glassesimoji} alt=""/>
            <div style={{top:'-4%',left:'68%'}} className='floating-div'>
              <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
            </div>

            <div style={{top:'18rem',left:'0rem'}} className='floating-div'>
                <FloatingDiv image={thumbup} txt1='Best Design' />
            </div>

            {/* blur divs */}

            <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
            <div className='blur'style={{background:'#c1f5ff',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intor