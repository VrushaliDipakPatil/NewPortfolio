import { Link } from "../../node_modules/react-router-dom/dist/index"
import "./AboutContentStyle.css"
import TopImage from "../assets/topImg.jpg"
import bottomImage from "../assets/bottomImg.jpg";

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am a react front-end developer. I create responsive secure websites for my clients.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack-top">
<img src={TopImage} className="img" alt="true" />
          </div>
          <div className="img-stack-bottom">
<img src={bottomImage} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent