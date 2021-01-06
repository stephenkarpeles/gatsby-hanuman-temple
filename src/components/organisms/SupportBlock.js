import React from "react"
import { Link } from "gatsby"
import "../../pcss/SupportBlock.css"
import iconArtTopYellow from "../../images/icons/icon-art-top-yellow.svg"

const SupportBlock = () => (
  <div className="support-block">
    <h2>Support the Temple</h2>
    <div className="support-block__decor support-block__decor--top">
      <img src={iconArtTopYellow} alt=""/>
    </div>
    <p>Your generosity helps us maintain the temple and grounds, supports the dedicated staff, and provides funds for expansion efforts and additional amenities. 10% of all donations go to the Sri Ram Ashram orphanage in Haridwar, India.</p>
    <div class="support-block__btn-block">
      <Link to="/" className="btn btn--1">Donate</Link>
    </div>
  </div>
)

export default SupportBlock
