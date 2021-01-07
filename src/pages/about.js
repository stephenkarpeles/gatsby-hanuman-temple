import React from "react"
//import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import HeroInternal from "../components/organisms/HeroInternal"
import Layout from "../components/layout"
import ImageGrid from "../components/organisms/ImageGrid"
import SEO from "../components/seo"
import NewsletterBlock from "../components/organisms/NewsletterBlock"
import heroImage from "../images/backgrounds/about-hero.jpg"
import iconArtTopRed from "../images/icons/icon-art-top-red.svg"
import iconArtTopYellow from "../images/icons/icon-art-top-yellow.svg"
import aboutImage from "../images/about-pic.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <HeroInternal bgImg={heroImage} heading="About Us" subheading="Sankaṭ Mochan Hanumān Temple is part of  the learning community within Mount Madonna Center."/>

    <Fade>
      <section className="bg-color-6 section-padding-lg">
        <div className="container">
          <div className="row section-padding-xs">
            <div className="col col-full-width">
              <h2 className="text-centered text-color-3">A Brief History</h2>
              <div className="img-centered">
                <img src={iconArtTopRed} alt=""/>
              </div>
            </div>
          </div>
          <div className="row section-padding-sm">
            <div className="col col-full-width">
              <div className="text-columns-2up">
                <p>The Sankaṭ Mochan Hanumān Temple was founded and built by Sri Baba Hari Dass and his students as a place of devotion and peace.</p>
                <p>In 2001, some of Babaji’s long-time students returned from India with a beautiful Hanumān murti — a symbolic icon depicting a deity in Hindu culture.</p>
                <p>When Babaji, a silent monk, saw the statue, he wrote on his chalkboard, “It needs a Temple.” He promptly walked to the existing ceremonial site for the Mount Madonna Center and drew out the location for the temple with his foot.</p>
                <p>The process of planning and building began immediately and culminated in 2003 with the performance of the Prāna Pratishṭa ceremony of “establishing the breath” within the sacred image.</p>
                <p>Located on the grounds of the Mount Madonna Center, an intentional community established in 1978 on 355 wooded acres, the Temple provides Ārati devotional services twice daily and Sindoor Pūja and Chālisā Pāṭh ceremonies every Tuesday before the full moon as well as other traditional Hindu ceremonies, musical and dance performances, yoga classes, and other learning opportunities.</p>
                <p>The Temple serves a wide community which includes the resident volunteers and staff at the Center, the many members and friends of the Hanuman Fellowship who are inspired by the teachings and example of Babaji, and the thousands of Hanumān devotees who have made their way up the mountain to visit the Temple over the years.</p>
                <p>The open air Temple and grounds await you on your path to Liberation.</p>
              </div>
            </div>
          </div>
          <div className="row row--justify-content-center section-padding-sm">
            <div className="col col-2-3">
              <div className="img-centered">
                <img className="img-shadow-1" src={aboutImage} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>

    <section className="bg-color-6"> 
      <ImageGrid/>
    </section>

    <section className="bg-color-3 section-padding-lg">
      <div className="container">
        <div className="row">
          <div className="col col-full-width">
            <h2 className="text-centered text-color-6">Related Activities</h2>
            <div className="img-centered">
              <img src={iconArtTopYellow} alt=""/>
            </div>
          </div>
        </div>
        <div className="row row--justify-content-center section-padding-sm">
          <div className="col col-2-3">
            <p className="font-size-xxxlg text-centered text-color-6">Inspired by the teachings of Baba Hari Das, his students established a number of projects both on the Mount Madonna Center campus and throughout the World.</p>
          </div>
        </div>
      </div>
    </section>

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
