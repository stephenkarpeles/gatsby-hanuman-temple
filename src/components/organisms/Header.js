import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../images/logo.svg" 
import "../../pcss/Base.css"
import "../../pcss/Header.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__container container container--large">
      <div className="header__logo">
        <Link to="/">
          <img alt="" src={logo}/>
        </Link>
      </div>
      <div className="header__nav">
        <ul>
          <li>
            <Link to="/">Events</Link>
          </li>
          <li>
            <Link to="/">Teachings</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Visit</Link>
          </li>
          <li>
            <Link to="/">Updates</Link>
          </li>
          <li>
            <Link to="/">Donate</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
