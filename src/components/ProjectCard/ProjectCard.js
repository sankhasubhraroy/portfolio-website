import React from 'react'
import PropTypes from 'prop-types'
import './ProjectCard.css'
import WebIcon from '../../icons/WebIcon'
import GitHubIcon from '../../icons/GitHubIcon'

export default function ProjectCard(props) {
    return (
        <div className="project-card">
            <span></span>
            <div className="content">
                <h2 className='content-heading'>{props.heading}</h2>
                <p className="content-body">{props.body}</p>
                <div className="content-links">
                    {props.isVisit && <a href={props.visitLink} target='_blank' rel="noreferrer" className='visit-link'>
                        <WebIcon color={props.visitColor} />
                        <i style={{ color: props.visitColor }}>Visit</i>
                    </a>}
                    {props.isGithub && <a href={props.githubLink} target='_blank' rel="noreferrer" className='github-link'>
                        <GitHubIcon
                            height={18}
                            width={18}
                            color={props.githubColor} />
                        <i style={{ color: props.githubColor }}>GitHub</i>
                    </a>}
                </div>
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    heading: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    isVisit: PropTypes.bool,
    isGithub: PropTypes.bool,
    visitColor: PropTypes.string,
    githubColor: PropTypes.string,
    visitLink: PropTypes.string,
    githubLink: PropTypes.string
}

ProjectCard.defaultProps = {
    visitColor: "#fd5c63",
    githubColor: "#6e5494"
}