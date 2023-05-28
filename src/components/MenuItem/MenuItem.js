import React from 'react'
import PropTypes from 'prop-types'
import './MenuItem.css'
import { Link } from 'react-router-dom'

export default function MenuItem(props) {

    const titleColor = { color: props.titleColor }

    return (
        <Link to={props.link} className="link">
            <span className="link-icon">
                {props.svg}
            </span>
            <span className="link-title" style={titleColor}>{props.linkTitle}</span>
        </Link>
    )
}

MenuItem.propTypes = {
    svg: PropTypes.object.isRequired,
    link: PropTypes.string.isRequired,
    linkTitle: PropTypes.string.isRequired,
    titleColor: PropTypes.string.isRequired
}