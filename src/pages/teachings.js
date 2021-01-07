import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import HeroInternal from "../components/organisms/HeroInternal"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsletterBlock from "../components/organisms/NewsletterBlock"
import heroImage from "../images/backgrounds/teachings-hero.jpg"
import iconBookYellow from "../images/icons/icon-book-yellow.svg"
import iconEyeYellow from "../images/icons/icon-eye-yellow.svg"
import iconMicYellow from "../images/icons/icon-mic-yellow.svg"
import iconPlayYellow from "../images/icons/icon-play-yellow.svg"
import iconAudioYellow from "../images/icons/icon-audio-yellow.svg"
import iconArtTopYellow from "../images/icons/icon-art-top-yellow.svg"
// import aboutLandscapeImage from "../images/about-temple-landscape.jpg"
import "../pcss/ContentSwitcher.css"
import "../pcss/Hero.css"
import "../pcss/Teachings.css"

const TeachingsPage = () => (
  <Layout>
    <SEO title="Teachings" />
    <HeroInternal bgImg={heroImage} heading="Teachings" subheading="Experience writings, wisdom, and peaceful practices inspired by Baba Hari Dass as well as ancient scriptures and timeless texts."/>

    <section className="bg-color-5">
      <div className="container">
        <div className="teachings-filter">
        <ul>
          <li>
            <Link to=""><img src={iconBookYellow} alt=""/> Articles</Link>
          </li>
          <li>
            <Link to=""><img src={iconEyeYellow} alt=""/> Classes</Link>
          </li>
          <li>
            <Link to=""><img src={iconMicYellow} alt=""/> Podcasts</Link>
          </li>
          <li>
            <Link to=""><img src={iconAudioYellow} alt=""/> Audio Teachings</Link>
          </li>
          <li>
            <Link to=""><img src={iconPlayYellow} alt=""/> Videos</Link>
          </li>
        </ul>
      </div>
        <div className="row">
          <div className="col col-7-12">
            <div className="featured-teaching">
              Test
            </div>
          </div>
        </div>
      </div>
      <div className="hero__base"></div>
    </section>

    <Fade>
        <section className="section-padding-md bg-color-3">
          <div className="container">
              <div className="row">
                  <div className="col col-full-width">
                      <h2 className="text-centered text-color-6">Support the Temple</h2>
                        <div className="img-centered">
                          <img src={iconArtTopYellow} alt=""/>
                        </div>
                  </div>
              </div>
              <div className="row row--justify-content-center section-padding-sm">
                  <div className="col col-2-3">
                      <p className="text-centered text-color-6 font-size-xxxlg">Your generosity helps us maintain the temple and grounds, supports the dedicated staff, and provides funds for expansion efforts and additional amenities. 10% of all donations go to the Sri Ram Ashram orphanage in Haridwar, India.</p>
                      <div className="text-centered section-padding-xs">
                          <Link to="" className="btn btn--1">Donate</Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </Fade>

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

export default TeachingsPage
