import React from "react"
//import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import HeroInternal from "../components/organisms/HeroInternal"

import Layout from "../components/layout"
import SEO from "../components/seo"
import heroImage from "../images/backgrounds/about-hero.jpg"
import NewsletterBlock from "../components/organisms/NewsletterBlock"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <HeroInternal bgImg={heroImage} heading="About Us" subheading="Sankaṭ Mochan Hanumān Temple is part of  the learning community within Mount Madonna Center."/>

    <div className="footer-block footer-block--home">
      <div class="footer-block__content">
        <div class="container">
          <Fade>
            <NewsletterBlock/>
          </Fade>
        </div>
      </div>  
    </div>    
    
  </Layout>
)

export default SecondPage
