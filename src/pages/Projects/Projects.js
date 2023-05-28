import React from 'react'
import './Projects.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import ProjectSlide from '../../components/ProjectSlide/ProjectSlide'

export default function Projects() {
    return (
        <section className="Projects">
            <h1 style={{ textAlign: 'center', fontFamily: 'Ubuntu Mono' }}>My Projects</h1>
            <div className="partition">
                <ProjectCard
                    heading='ParkNow'
                    body='ParkNow is a web-based application designed to streamline and automate the process of managing vehicle parking by just one click. It provides a convenient and efficient solution for users, ensuring a smooth parking experience for all.'
                    isVisit={true}
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
        </section>
    )
}
