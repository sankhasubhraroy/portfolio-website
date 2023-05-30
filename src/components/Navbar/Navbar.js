import React from 'react'
import './Navbar.css'
import Switch from '../Switch/Switch'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo-text">
                <span>Portfolio</span>
            </div>
            <Switch />
        </nav>
    )
}
