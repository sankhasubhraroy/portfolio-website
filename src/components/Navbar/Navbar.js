import React from 'react'
import './Navbar.css'
import Switch from '../Switch/Switch'

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="logo-text">
                <span>Portfolio</span>
            </div>
            <Switch value={props.value} change={props.change} />
        </nav>
    )
}
