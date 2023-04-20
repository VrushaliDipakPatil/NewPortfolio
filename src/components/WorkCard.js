
import { NavLink } from "../../node_modules/react-router-dom/dist/index"
import "./WorkCardStyle.css"

import React from 'react'

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="true"/>
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
            <NavLink to={props.view} className="btn">View</NavLink>
            <NavLink to="ur/.com" className="btn">Source</NavLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard