import React from 'react'
import { motion } from 'framer-motion'
import './Projects.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import ProjectSlide from '../../components/ProjectSlide/ProjectSlide'
import Heading from '../../components/Heading/Heading'

export default function Projects() {
    return (
        <motion.section
            className="Projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Heading
                svg={<svg fill="currentColor" width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 3 6 L 3 14 L 8.6347656 14 L 12 19.908203 L 12 27 L 20 27 L 20 19 L 13.783203 19 L 10.9375 14 L 11 14 L 11 11 L 21 11 L 21 14 L 29 14 L 29 6 L 21 6 L 21 9 L 11 9 L 11 6 L 3 6 z M 5 8 L 9 8 L 9 12 L 5 12 L 5 8 z M 23 8 L 27 8 L 27 12 L 23 12 L 23 8 z M 14.417969 21 L 18 21 L 18 25 L 14 25 L 14 21.238281 L 14.417969 21 z" /></svg>}

                text='my projects'
            />
            <div className="partition">
                <ProjectCard
                    heading='ParkNow'
                    body='ParkNow is a web-based application designed to streamline and automate the process of managing vehicle parking by just one click. It provides a convenient and efficient solution for users, ensuring a smooth parking experience for all.'
                    isVisit={true}
                    visitLink='https://parknow.up.railway.app/'
                    githubLink='https://github.com/sankhasubhraroy/ParkNow.git'
                />
                <ProjectSlide
                    slideLinks={['https://i.ibb.co/h9LF7bj/parknow-1.png',
                        'https://i.ibb.co/kK5MVC4/parknow-2.png',
                        'https://i.ibb.co/nk92kQC/parknow-3.png',
                        'https://i.ibb.co/z4pQMMx/parknow-4.png',
                        'https://i.ibb.co/wRL7BfR/parknow-5.png'
                    ]}
                />
            </div>
        </motion.section>
    )
}
