import "./HeroImgStyle.css";
import IntroImage from "../assets/intri-img.jpg"
import React from 'react'
import { Link } from "../../node_modules/react-router-dom/dist/index";


const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img"
                    src={IntroImage} alt="IntroImage" />
            </div>
            <div className="content">
                <p>HI, I'M A</p>
                <h1>SOFTWARE DEVELOPER</h1>
                <div>
                    <Link to="/project" 
                    className="btn">
                        Projects
                    </Link>
                    <Link to="/contact" 
                    className="btn btn-light">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg