import React from "react"
//import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import "../../pcss/Hero.css"

const Hero = (props) => (
  <div className="hero hero--internal" style={{ backgroundImage:`url(${props.bgImg})` }}>
    <div className="container">
      <div className="row">
        <div className="col col-1-2">
          <Fade>
            <div className="hero__content">
              <h1>{props.heading}</h1>
              <p>{props.subheading}</p>
            </div>
          </Fade>
        </div>
        <div className="col col-1-2"></div>
      </div>
    </div>
  </div>
)

export default Hero
