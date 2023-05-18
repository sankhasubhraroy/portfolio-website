import React from 'react'
import PhotoFrame from '../../components/PhotoFrame/PhotoFrame'
import SocialTab from '../../components/SocialTab/SocialTab'
import Intro from '../../components/Intro/Intro'
import './Home.css'

export default function Home() {
    return (
        <main>
            <section className='hero'>
                <div className="left">
                    <PhotoFrame />
                    <SocialTab></SocialTab>
                </div>
                <div className="right">
                    <Intro />
                </div>
            </section>
        </main>
    )
}
