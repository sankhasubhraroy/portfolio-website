import React from 'react'
import './SocialTab.css'
import GitHubIcon from '../../icons/GitHubIcon'
import LinkedinIcon from '../../icons/LinkedinIcon'
import MailIcon from '../../icons/MailIcon'
import InstagramIcon from '../../icons/InstagramIcon'
import TwitterIcon from '../../icons/TwitterIcon'
import FacebookIcon from '../../icons/FacebookIcon'

export default function SocialTab() {
    return (
        <div className="social-tab">
            <a href="https://github.com/sankhasubhraroy" target='_blank' rel="noreferrer" className="btn">
                <GitHubIcon
                    height={24}
                    width={24}
                    color="#6e5494"
                />
            </a>
            <a href="https://www.linkedin.com/in/sankhasubhraroy/" target='_blank' rel="noreferrer" className="btn">
                <LinkedinIcon color="#0a66c2" />
            </a>
            <a href="mailto:sankha.roy.dev@gmail.com" target='_blank' rel="noreferrer" className="btn">
                <MailIcon color="#ea4335" />
            </a>
            <a href="https://www.instagram.com/sankha__roy/" target='_blank' rel="noreferrer" className="btn">
                <InstagramIcon color="#e1306c" />
            </a>
            <a href="https://twitter.com/sankha__roy" target='_blank' rel="noreferrer" className="btn">
                <TwitterIcon color="#1da1f2" />
            </a>
            <a href="https://www.facebook.com/the.sankharoy/" target='_blank' rel="noreferrer" className="btn">
                <FacebookIcon color="#1877f2" />
            </a>
        </div>
    )
}
