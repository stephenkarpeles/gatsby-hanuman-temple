import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import "../../pcss/Hero.css"

const Hero = (props) => (
  <div className="hero hero--alt" style={{ backgroundImage:`url(${props.bgImg})` }}>
    <div className="container">
      <Fade>
        <div className="hero__content">
          <h1>Welcome to<br/>Sankaṭ Mochan Hanumān<br/>Temple</h1>
          <Link to="/" className="btn btn--1">Visit Us</Link>
        </div>
      </Fade>
    </div>
    <div className="hero__base"></div>
  </div>
)

export default Hero
