import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './Project.css'

export default function Project() {
    return (
        <main>
            <section className="project">
                <ProjectCard
                    heading='ParkNow'
                    body='ParkNow is a web-based application designed to streamline and automate the process of managing vehicle parking by just one click. It provides a convenient and efficient solution for users, ensuring a smooth parking experience for all.'
                    isVisit={true}
                />
            </section>
        </main>
    )
}
