/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./organisms/Header"
import InfoBanner from "./organisms/InfoBanner"
//import 'semantic-ui-css/semantic.min.css'
import "../pcss/Base.css"
import "../pcss/Footer.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <InfoBanner />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />      
      <main>{children}</main>
      <footer>
      </footer>  
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
