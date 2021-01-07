import React from "react"
//import { Link } from "gatsby"
//import Fade from 'react-reveal/Fade';
import "../../pcss/ImageGrid.css"
import image1 from "../../images/image-grid/image1.jpg"
import image2 from "../../images/image-grid/image2.jpg"
import image3 from "../../images/image-grid/image3.jpg"
import image4 from "../../images/image-grid/image4.jpg"
import image5 from "../../images/image-grid/image5.jpg"
import image6 from "../../images/image-grid/image6.jpg"

const ImageGrid = () => (
  <div className="image-grid">
    <div className="image-grid__image">
      <img src={image1} alt=""/>
    </div>
    <div className="image-grid__image">
      <img src={image2} alt=""/>
    </div>
    <div className="image-grid__image">
      <img src={image3} alt=""/>
    </div>
    <div className="image-grid__image">
      <img src={image4} alt=""/>
    </div>
    <div className="image-grid__image">
      <img src={image5} alt=""/>
    </div>
    <div className="image-grid__image">
      <img src={image6} alt=""/>
    </div>
  </div>
)

export default ImageGrid
