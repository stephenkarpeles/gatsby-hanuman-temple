import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/organisms/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />    
    <Hero style={{ background: `green` }}/>    
  </Layout>
)

export default IndexPage
