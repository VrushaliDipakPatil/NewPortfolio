// @ts-nocheck
import { Link } from "../../node_modules/react-router-dom/dist/index"
import "./NavbarStyle.css"
import {FaBars , FaTimes} from "react-icons/fa"

import React, { useState } from 'react'

const Navbar = () => {

const[click, setClick]=useState(false);

const handleClick=()=>{
    setClick(!click);
}

// const[color, setcolor]= useState(false);
// const changeColor = () =>{
//     if(window.scrollY >= 1){
//         setcolor(true);
//     }else{
//         setcolor(false);
//     }
// }

// window.addEventListener('scroll', changeColor)

  return (
    // <div className= {color?"header-bg":"header"}>
        <div className="header">
        <Link to="/">
            <h1>Portfolio.</h1>
        </Link>
        <ul className={click?"nav-menu active":"nav-menu"}>
            <li>
                <Link to="/" >
                    Home
                </Link>
                </li>
                <li>
                <Link to="/project">
                    Projects
                </Link>
                </li>
                <li>
                <Link to="/about">
                    About
                </Link>
                </li>
                <li>
                <Link to="/contact">
                    Contact
                </Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click?  (<FaTimes size={20} style={{color: "#fff"}}/>) :
            (<FaBars size={20} style={{color: "#fff"}}/>)
            }
            
           

        </div>
    </div>
  )
}

export default Navbar