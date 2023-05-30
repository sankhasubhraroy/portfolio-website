import React from 'react'
import './Switch.css'

export default function Switch() {

    const setLightMode = () => {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('currentMode', 'light');
    }
    const setDarkMode = () => {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('currentMode', 'dark');
    }

    const currentMode = localStorage.getItem('currentMode');

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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.529 15.93c-.16-.27-.61-.69-1.73-.49-.62.11-1.25.16-1.88.13a8.41 8.41 0 01-5.91-2.82c-1.3-1.45-2.1-3.34-2.11-5.38 0-1.14.22-2.24.67-3.28.44-1.01.13-1.54-.09-1.76-.23-.23-.77-.55-1.83-.11-4.09 1.72-6.62 5.82-6.32 10.21.3 4.13 3.2 7.66 7.04 8.99a10 10 0 002.89.55c.16.01.32.02.48.02 3.35 0 6.49-1.58 8.47-4.27.67-.93.49-1.52.32-1.79z"></path></svg>
                </span>
                <span className="off">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" version="1" viewBox="0 0 64 64" xmlSpace="preserve"><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><circle cx="32.003" cy="32.005" r="16.001"></circle><path d="M12.001 31.997c0-2.211-1.789-4-4-4H4c-2.211 0-4 1.789-4 4s1.789 4 4 4h4a3.998 3.998 0 004.001-4zM12.204 46.139l-2.832 2.833a4 4 0 005.657 5.656l2.833-2.832a4 4 0 10-5.658-5.657zM32.003 51.999c-2.211 0-4 1.789-4 4V60c0 2.211 1.789 4 4 4s4-1.789 4-4l-.004-4.001a3.994 3.994 0 00-3.996-4zM51.798 46.143c-1.559-1.566-4.091-1.566-5.653-.004a4 4 0 000 5.657l2.829 2.828c1.562 1.57 4.094 1.562 5.656 0s1.566-4.09 0-5.656l-2.832-2.825zM60.006 27.997l-4.009.008a3.984 3.984 0 00-3.992 3.992 3.99 3.99 0 003.992 4h4.001c2.219.008 4-1.789 4-4a3.99 3.99 0 00-3.992-4zM51.798 17.859l2.828-2.829a3.99 3.99 0 000-5.657 3.989 3.989 0 00-5.652-.004l-2.829 2.836a3.99 3.99 0 000 5.649c1.554 1.572 4.094 1.564 5.653.005zM32.003 11.995c2.207.016 4-1.789 4-3.992v-4c0-2.219-1.789-4-4-4a3.986 3.986 0 00-4 3.993l.008 4.008a3.984 3.984 0 003.992 3.991zM12.212 17.855a3.983 3.983 0 005.646-.004c1.574-1.551 1.566-4.09.008-5.649l-2.829-2.828a3.995 3.995 0 00-5.657 0 3.983 3.983 0 00-.012 5.653l2.844 2.828z"></path></g></svg>
                </span>
            </label>
        </div>
    )
}
