import React from 'react'
import './ContactCard.css'
import SocialTab from '../SocialTab/SocialTab'
import contactPhoto from '../../assets/contact-image.png'
import LocationIcon from '../../icons/LocationIcon'

export default function ContactCard() {
    return (
        <div className="contact-card">
            <div className='cardHeader'>
                <div className="avatar">
                    <img src={contactPhoto} alt='avatar'></img>
                </div>
            </div>

            <h3>Sankhasubhra Roy</h3>
            <div className="location">
                <LocationIcon />
                <p>Asansol, West Bengal, India</p>
            </div>
            <div className="description">
                <p>If you have any project related queries, feel free to contact me directly!</p>
            </div>
            <div className="buttons">
                <a href="tel://8617456147">Call</a>
                <a href="mailto:sankha.roy.dev@gmail.com">Email</a>
            </div>

            <div className='contactFooter'>
                <SocialTab />
            </div>
        </div>
    )
}
