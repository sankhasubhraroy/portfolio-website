import React from 'react'
import './Switch.css'
import MoonIcon from '../../icons/MoonIcon';
import SunIcon from '../../icons/SunIcon';

export default function Switch() {

    const setLightMode = () => {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('currentMode', 'light');
        favicon.setAttribute('href', 'favicon.ico');
    }
    const setDarkMode = () => {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('currentMode', 'dark');
        favicon.setAttribute('href', 'favicon-dark.ico');
    }

    const currentMode = localStorage.getItem('currentMode');
    const favicon = document.getElementById('favicon');

    if (currentMode === 'dark') {
        setDarkMode();
    }

    const toggleMode = (event) => {
        if (event.target.checked) setDarkMode()
        else setLightMode()
    }

    return (
        <div className='mode-switch'>
            <label className="switch">
                <input type="checkbox" id='theme-toggle' defaultChecked={currentMode === 'dark'} onChange={toggleMode} />
                <span className="slider"></span>
                <span className="on">
                    <MoonIcon />
                </span>
                <span className="off">
                    <SunIcon />
                </span>
            </label>
        </div>
    )
}
