import React from 'react'
import './Navbar.css'
import Switch from '../Switch/Switch'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo-text">
                <Link to="/">Portfolio</Link>
            </div>
            <Switch />
        </nav>
    )
}
