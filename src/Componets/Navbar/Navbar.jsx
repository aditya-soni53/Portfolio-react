import React from "react";
import './Navbar.css'
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Aditya</div>
        <Toggle/>
      </div>
      <div className="n-right">
            <div className="n-list">
                <ul>
                  <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                    <li>Home</li>
                  </Link>

                  <Link activeClass="active" to="Services" spy={true} smooth={true}>
                    <li>Services</li>
                  </Link>

                  <Link activeClass="active" to="Experience" spy={true} smooth={true}>
                    <li>Experience</li>
                  </Link>

                  <Link activeClass="active" to="Portfolio" spy={true} smooth={true}>
                    <li>Portfolio</li>
                  </Link>

                  <Link activeClass="active" to="Testimonials" spy={true} smooth={true}>
                    <li>Testimonials</li>
                  </Link>
                </ul>
            </div>
            <Link activeClass="active" to="Contact" spy={true} smooth={true}>
              <button className="button n-button">Contact</button>
            </Link>
      </div>
    </div>
  );
};
