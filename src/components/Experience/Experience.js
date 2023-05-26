import React from 'react'
import PropTypes from 'prop-types'
import './Experience.css'

export default function Experience(props) {
    return (
        <div className="ability">
            <h3>{props.expName}</h3>
            <p>{props.expBody}</p>
        </div>
    )
}

Experience.propTypes = {
    expName: PropTypes.string.isRequired,
    expBody: PropTypes.string.isRequired,
}