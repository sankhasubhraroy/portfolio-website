import React from 'react'
import { motion } from 'framer-motion'
import PhotoFrame from '../../components/PhotoFrame/PhotoFrame'
import SocialTab from '../../components/SocialTab/SocialTab'
import Intro from '../../components/Intro/Intro'
import './Home.css'

export default function Home() {
    return (
        <motion.section
            className='Home'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="left">
                <PhotoFrame />
                <SocialTab />
            </div>
            <div className="right">
                <Intro />
            </div>
        </motion.section>
    )
}
