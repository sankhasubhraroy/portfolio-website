import React from 'react'
import './PhotoFrame.css'
import myPhoto from '../../assets/portfolio-image.png'

export default function PhotoFrame() {
    return (
        <div className="frame">
            <span></span>
            <span></span>
            <span></span>
            <div className="photo">
                <img src={myPhoto} alt="portfolio" border="0"></img>
            </div>
        </div>
    )
}
