import React from 'react'
import PropTypes from 'prop-types'
import './ProjectCard.css'

export default function ProjectCard(props) {

    const visitColor = { color: props.visitColor }
    const githubColor = { color: props.githubColor }

    return (
        <div className="card">
            <span></span>
            <div className="content">
                <h2 className='content-heading'>{props.heading}</h2>
                <p className="content-body">{props.body}</p>
                <div className="content-links">
                    {props.isVisit && <a href="#" className='visit-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={props.visitColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        <i style={visitColor}>Visit</i>
                    </a>}
                    <a href="#" className='github-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={props.githubColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        <i style={githubColor}>GitHub</i>
                    </a>
                </div>
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    heading: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    isVisit: PropTypes.bool,
    visitColor: PropTypes.string,
    githubColor: PropTypes.string
}

ProjectCard.defaultProps = {
    visitColor: "#fd5c63",
    githubColor: "#6e5494"
}