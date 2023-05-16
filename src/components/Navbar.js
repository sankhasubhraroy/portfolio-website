import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <header>
            <div className="menu">
                <a href="#" className="link">
                    <span className="link-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm-60 60V456l320-240 320 240v480H530V686H430v250H160Zm320-353Z" /></svg>
                    </span>
                    <span className="link-title">Home</span>
                </a>
                <a href="#" className="link">
                    <span className="link-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M356 936H180q-24 0-42-18t-18-42V700q44-5 75.5-34.5T227 593q0-43-31.5-72.5T120 486V310q0-24 18-42t42-18h177q11-40 39.5-67t68.5-27q40 0 68.5 27t39.5 67h173q24 0 42 18t18 42v173q40 11 65.5 41.5T897 595q0 40-25.5 67T806 700v176q0 24-18 42t-42 18H570q-5-48-35.5-77.5T463 829q-41 0-71.5 29.5T356 936Zm-176-60h130q25-61 69.888-84 44.888-23 83-23T546 792q45 23 70 84h130V641h45q20 0 33-13t13-33q0-20-13-33t-33-13h-45V310H511v-48q0-20-13-33t-33-13q-20 0-33 13t-13 33v48H180v130q48.15 17.817 77.575 59.686Q287 541.555 287 593.223 287 644 257.5 686T180 746v130Zm329-330Z" /></svg>
                    </span>
                    <span className="link-title">Projects</span>
                </a>
                <a href="#" className="link">
                    <span className="link-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m379 713 44-44-93-93 92-92-44-44-136 136 137 137Zm202 0 137-137-137-137-44 44 93 93-93 93 44 44ZM180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Zm0-600v600-600Z" /></svg>
                    </span>
                    <span className="link-title">Skills</span>
                </a>
                <a href="#" className="link">
                    <span className="link-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M144 1016v-60h672v60H144Zm0-820v-60h672v60H144Zm336 416q50 0 84-34t34-84q0-50-34-84t-84-34q-50 0-84 34t-34 84q0 50 34 84t84 34ZM132 896q-24 0-42-18t-18-42V316q0-26 18-43t42-17h696q24 0 42 18t18 42v520q0 24-18 42t-42 18H132Zm88-60q51-63 121-94.5T479.5 710q68.5 0 140 31.5T740 836h88V316H132v520h88Zm94 0h334q-31-30-72.5-48T480 770q-54 0-94.5 18T314 836Zm166.158-284Q456 552 439.5 535T423 494q0-24 16.342-41t40.5-17Q504 436 520.5 453t16.5 41q0 24-16.342 41t-40.5 17ZM480 576Z" /></svg>
                    </span>
                    <span className="link-title">Contact</span>
                </a>
            </div>
        </header>
    )
}
