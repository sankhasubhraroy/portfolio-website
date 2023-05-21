import React from 'react'
import PropTypes from 'prop-types'
import './ProjectInfo.css'

export default function ProjectInfo(props) {
    return (
        <div className="project-info">
            <span></span>
            <span></span>
            <span></span>
            <div className="info">
                <div className="info-bg">
                    {props.projectImg}
                </div>
                <div className="info-tech">
                    {props.projectTech.map(tech => <i key={tech}>{tech}</i>)}
                </div>
            </div>
        </div>
    )
}

ProjectInfo.propTypes = {
    projectImg: PropTypes.object.isRequired,
    projectTech: PropTypes.array.isRequired
}