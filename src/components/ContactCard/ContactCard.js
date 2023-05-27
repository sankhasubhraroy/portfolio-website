import React from 'react'
import './ContactCard.css'
import SocialTab from '../SocialTab/SocialTab'

export default function ContactCard() {
    return (
        <div className="contact-card">
            <div className='cardHeader'>
                <div className="avatar">
                    <img src="https://i.ibb.co/xhjSXHf/contact-square.jpg" alt='avatar'></img>
                </div>
            </div>

            <h3>Sankhasubhra Roy</h3>
            <div className="location">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-map-pin" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
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
