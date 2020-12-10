import React from "react"
// import { Link } from "gatsby"
// import Fade from 'react-reveal/Fade';
import "../../pcss/BaseCard.css"
import iconOm from "../../images/icons/icon-om.svg" 

const BaseCard = (props) => (
  <div className="base-card" style={{ backgroundImage:`url(${props.bgImg})` }}>
    <div className="base-card__content">
      <h5>{props.title}</h5>
      <p>{props.text}</p>
      <div className="base-card__decor-icon">
        <img src={iconOm} alt=""/>
      </div>
    </div>
  </div>
)

export default BaseCard
