import React from "react"
// import { Link } from "gatsby"
import "../../pcss/NewsletterBlock.css"
import iconFlowerLeft from "../../images/icons/icon-flower-left.png" 
import iconFlowerRight from "../../images/icons/icon-flower-right.png" 
import iconAccent from "../../images/icons/icon-accent-yellow.png" 

const NewsletterBlock = () => (
  <div className="news-block">
    <div class="news-block__inner">
      <div class="news-block__icon-1">
        <img src={iconFlowerLeft} alt=""/>
      </div>
      <div class="news-block__icon-2">
        <img src={iconAccent} alt=""/>
      </div>
      <div class="news-block__icon-3">
        <img src={iconFlowerRight} alt=""/>
      </div>
      <div class="news-block__text">
        <h6>Sign up for the Temple newsletter for event, teachings, and community news updates.</h6>
      </div>
      <div class="news-block__form">
        <form action="">
          <div class="news-block__form-row">
            <div class="news-block__form-field news-block__form-field--email">
              <input type="email" placeholder="email" />
            </div>
            <div class="news-block__form-field news-block__form-field--submit">
              <input type="submit" value="Submit"/>
            </div>
          </div>          
        </form>
      </div>
    </div>    
  </div>
)

export default NewsletterBlock
