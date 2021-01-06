import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Fade from 'react-reveal/Fade';
import SEO from "../components/seo"
import Hero from "../components/organisms/Hero"
import BaseCard from "../components/molecules/BaseCard"
import EventCard from "../components/molecules/EventCard"
import FullWidthContent from "../components/organisms/FullWidthContent"
import LeftRightContent from "../components/organisms/LeftRightContent"
import NewsletterBlock from "../components/organisms/NewsletterBlock"
import SupportBlock from "../components/organisms/SupportBlock"
import ProjectBlock from "../components/organisms/ProjectBlock"
import Reservations from "../components/molecules/Reservations"
import participationImg1 from "../images/participation1.jpg"
import participationImg2 from "../images/participation2.jpg"
import participationImg3 from "../images/participation3.jpg"
import eventImg1 from "../images/event-image-1.jpg"
import eventImg2 from "../images/event-image-2.jpg"
import eventImg3 from "../images/event-image-3.jpg"
import iconArtTopRed from "../images/icons/icon-art-top-red.svg"
import heroImage from "../images/backgrounds/hero-tall.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />    
    <Hero bgImg={heroImage}/>
    
    <div className="base-card-row base-card-row--home"> 
      <div className="container flex-row flex-row--3-up">        
        <BaseCard bgImg={participationImg1} title="Events" text="Live streaming ceremonies and more" />
        <BaseCard bgImg={participationImg2} title="Teachings" text="Shared inspirations, thoughts, and perspectives" />
        <BaseCard bgImg={participationImg3} title="About Us" text="Our origins, purpose, and related activities" />        
      </div>
    </div>

    <FullWidthContent />
    <LeftRightContent />
    <Reservations />

    <div className="event-card-block event-card-block--home"> 
      <div className="event-card-block__intro">
        <h3>Upcoming Events</h3>
        <div className="event-card-block__decor event-card-block__decor--top">
          <img src={iconArtTopRed} alt=""/>
        </div>
        <p>Stay connected to Sankaṭ Mochan Hanumān Temple through our many streaming events. </p>
      </div>

      <div className="container flex-row flex-row--3-up">        
        <EventCard image={eventImg1} time="Daily 6:30am & 6:00pm" title="Ārati" text="A devotional service offered to one's chosen form of God is performed at Gaṇesh Temple and Hanumān Temple twice daily." />
        <EventCard image={eventImg2} time="Tuesday, Nov 24th" title="Sindoor Pūja" text="Every Tuesday before the full moon. Prior to Ārati, we start at 6am with Hanumān Pūja, with Hanumān Chālisā Pāṭh at 6:30." />
        <EventCard image={eventImg3} time="Tuesday, Dec 29th" title="Sindoor Pūja" text="Every Tuesday before the full moon. Prior to Ārati, we start at 6am with Hanumān Pūja, with Hanumān Chālisā Pāṭh at 6:30." />        
      </div>
      <div className="row row--justify-content-center">
        <div className="container">
          <div className="col col-full-width text-centered">
            <div className="event-btn-block">
              <Link to="/" className="btn btn--1">View All</Link>          
            </div>
          </div>  
        </div>
      </div>
    </div>   

    <div className="styled-background-1">
      <div className="styled-background-1__decor-top"></div>
      <div className="styled-background-1__decor-middle"></div>
      <div className="styled-background-1__content">
        <Fade>
          <NewsletterBlock/>
        </Fade>
      </div>
      <div className="styled-background-1__decor-bottom"></div>
    </div>

    <div className="footer-block footer-block--home">
      <div class="footer-block__content">
        <div class="container">
          <SupportBlock/>
          <Fade>
            <ProjectBlock/>
          </Fade>
        </div>
      </div>  
    </div>

  </Layout>
)

export default IndexPage
