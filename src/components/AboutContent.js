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
        <p>I'm a Frontend Developer with experience in React.js, Redux, TypeScript, and modern UI development. I've built scalable web apps in telecom, fintech, and e-commerce domains, turning designs into clean, responsive interfaces and integrating APIs to deliver smooth user experiences. </p>
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