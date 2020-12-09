import React from "react"
import { Link } from "gatsby"
import "../../pcss/InfoBanner.css"

const InfoBanner = () => (
  <div className="info-banner">
    <div className="container">
      <div className="info-banner__text">COVID-19 Status: The Temple and Mount Madonna Center are currently CLOSED to all visitors.</div>
      <div className="info-banner__link">
        <Link to="/info/" className="link link--1">More Info</Link>
      </div>
    </div>
  </div>
)

export default InfoBanner
