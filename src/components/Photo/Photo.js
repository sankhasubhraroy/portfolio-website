import React from 'react'
import './Photo.css'
import aboutPhoto from '../../assets/about-image.png'

export default function Photo() {
    return (
        <div className="contact-photo">
            <span></span>
            <span></span>
            <span></span>
            <img src={aboutPhoto} alt="about" />
        </div>
    )
}