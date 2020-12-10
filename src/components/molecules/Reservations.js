import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import "../../pcss/Reservations.css"

const Reservations = () => (  
  <div className="reservations">
    <Fade>
    <h5 className="reservations__heading">Reservations Required</h5>
    <div className="reservations__text">
      <p>Once we reopen, due to the high volume of visitors, reservations will be required to visit the Temple.</p>
    </div>
    <Link to="/" className="link link--2">More Information</Link>
    </Fade>
  </div>  
)

export default Reservations
