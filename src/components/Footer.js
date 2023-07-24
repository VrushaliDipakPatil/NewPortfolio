import "./FooterStyle.css";
// @ts-ignore
import { FaHome , FaPhone, FaMailBulk, FaLinkedin} from "react-icons/fa"
import { GoMarkGithub } from 'react-icons/go';
import React from 'react'

const Footer = () => {

    const openInNewTab = (url) => {
        window.open(url, '_self', 'noreferrer');
      };

    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20}
                            style={{ color: "#fff", marginRight: "2rem" }}
                        />
                        <div>
                        <p>Pune, India</p>
                        
                    </div>
                    </div>
                    
                
                <div className="phone">
                    <h4>
                    <FaPhone size={20}
                            style={{ color: "#fff", marginRight: "2rem" }}
                        /> 8483042583
                    </h4>       
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20}
                            style={{ color: "#fff", marginRight: "2rem" }}
                        /> vrushalidipakpatil910@gmail.com
                    </h4>   
                </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>Result-driven software developer having experience in React typescript and javascript framework.
Detail-oriented, organized and meticulous employee.</p>
<div className="social" 
role="link"
onClick={() => openInNewTab('https://github.com/VrushaliDipakPatil')}
>
<GoMarkGithub  size={30}
                            style={{ color: "#fff", marginRight: "2rem" }}
                        />
</div>
                </div>
            </div>
        </div>
    )
}

export default Footer