import React from "react"
// import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import "../../pcss/FullWidthContent.css"
import iconArtTop from "../../images/icons/icon-art-top.svg"
import iconArtBottom from "../../images/icons/icon-art-bottom.svg" 

const FullWidthContent = () => (  
  <div className="full-width-content">
    <div className="container">
      <Fade>
        <div className="full-width-content__text">
          <div className="full-width-content__decor full-width-content__decor--top">
            <img src={iconArtTop} alt=""/>
          </div>
          <h3>Sankaṭ Mochan Hanumān Temple serves all people who seek a place of devotion, contemplation, and peace.</h3>
          <div className="full-width-content__decor full-width-content__decor--bottom">
            <img src={iconArtBottom} alt=""/>
          </div>
        </div>
      </Fade>
    </div>
  </div>  
)

export default FullWidthContent
