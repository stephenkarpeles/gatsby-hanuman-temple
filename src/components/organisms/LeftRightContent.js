import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import "../../pcss/LeftRightContent.css"
import image1 from "../../images/lr-image-1.png" 
import image2 from "../../images/lr-image-2.png" 

const LeftRightContent = () => (  
  <div className="left-right-content">
    <div className="container">
      <Fade>
        <div className="row">
        <div className="col col-5-12 col-left-right-image">
          <div className="left-right-content__image">
            <img src={image1} alt=""/>
          </div>
        </div>
        <div className="col col-1-2 col-left-right-text">
          <div className="left-right-content__text">            
            <p className="has-dropcap"><span>L</span>ocated in the Santa Cruz Mountains overlooking the Monterey Bay in central California, the Temple rests in the eart of Mount Madonna Center — a Yoga community inspired by the example of Master Yogi and silent monk, Sri Baba Hari Dass.</p>
            <Link to="/" className="link link--2">About Us</Link>
          </div>
        </div>
        </div>
      </Fade>

      <Fade>
        <div className="row row--reversed">
          <div className="col col-5-12 col-left-right-image">
            <div className="left-right-content__image">
              <img src={image2} alt=""/>
            </div>
          </div>
          <div className="col col-1-2 col-left-right-text">
            <div className="left-right-content__text">            
              <p className="has-dropcap">The mountaintop location provides a classic archetypal setting for a Hanumān Temple. It is presented in the traditional style of temples in North India — a place where Babaji lived and helped build a number of similar Hanumān Temples.</p>
              <Link to="/" className="link link--2">Visit the Temple</Link>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  </div>  
)

export default LeftRightContent
