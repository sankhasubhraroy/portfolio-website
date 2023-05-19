import React from 'react'
import PropTypes from 'prop-types'
import './MenuItem.css'

export default function MenuItem(props) {

    const titleColor = { color: props.titleColor }

    return (
        <a href="#" className="link">
            <span className="link-icon">
                {props.svg}
            </span>
            <span className="link-title" style={titleColor}>{props.linkTitle}</span>
        </a >
    )
}

MenuItem.propTypes = {
    svg: PropTypes.object.isRequired,
    linkTitle: PropTypes.string.isRequired,
    titleColor: PropTypes.string.isRequired
}