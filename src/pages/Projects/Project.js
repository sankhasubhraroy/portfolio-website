import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo'
import './Project.css'

export default function Project() {
    return (
        <main>
            <section className="projects">
                <ProjectInfo
                    projectImg={<img src="https://i.ibb.co/dMddB29/Park-Now-Preview.jpg" alt="Park-Now-Preview" border="0"></img>}
                    projectTech={['CSS', 'HTML', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'JSON Web Token (JWT)', 'Nodemailer', 'Razorpay API']}
                />
            </section>
        </main>
    )
}
