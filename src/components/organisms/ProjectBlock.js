import React from "react"
// import { Link } from "gatsby"
import "../../pcss/ProjectBlock.css"
import logoCenter from "../../images/logo-mm-center.png" 
import logoInstitute from "../../images/logo-mm-institute.png" 

const ProjectBlock = () => (
  <div className="project-block">
    <h5>A Mountaintop Community</h5>
    <p>The Temple resides within the Mount Madonna Center which is also home to the Mount Madonna Institute and a host of related projects.</p>
    <div class="project-block__logo-row">
      <div className="project-block__logo">
        <img src={logoCenter} alt=""/>
      </div>
      <div className="project-block__logo">
        <img src={logoInstitute} alt=""/>
      </div>
    </div>
  </div>
)

export default ProjectBlock
