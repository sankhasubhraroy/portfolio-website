import React from 'react'
import PropTypes from 'prop-types'
import './Heading.css'

export default function Heading(props) {
    return (
        <div className='heading'>
            <div className="icon">
                {props.svg}
            </div>
            <h1 style={{ textTransform: "uppercase" }}>{props.text}</h1>
        </div>
    )
}

Heading.propTypes = {
    svg: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
}