import React , { useContext } from 'react'
import './Experience.css'
import { themeContext } from "../../Context"

const Experience = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode

  return (
    <div className="experience" id="Experience">
        <div className="achievement">
          <div className="circle" style={{color: darkMode?'var(--orange)':''}}>0</div>
          <span>year</span>
          <span>Experience</span>
      </div>

      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>10+</div>
        <span>completed</span>
        <span>Projects</span>
      </div>

      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>0</div>
        <span>companies</span>
        <span>work</span>
      </div>
    </div>
  )
}

export default Experience