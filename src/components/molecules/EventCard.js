import React from "react"
// import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import "../../pcss/EventCard.css"

const EventCard = (props) => (
  <Fade>
    <div className="event-card">
      <div className="event-card__image">
        <img src={props.image} alt=""/>
      </div>
      <div className="event-card__content">
        <h6>{props.title}</h6>
        <div className="event-card__time">
          <span>{props.time}</span>
        </div>
        <p>{props.text}</p>
      </div>
    </div>
  </Fade>
)

export default EventCard
