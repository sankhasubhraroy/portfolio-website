import React from 'react'
import './Projects.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import ProjectSlide from '../../components/ProjectSlide/ProjectSlide'
import Heading from '../../components/Heading/Heading'

export default function Projects() {
    return (
        <section className="Projects">
            <Heading
                svg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><g fillRule="evenodd" stroke="none" strokeWidth="1"><path fill="currentColor" d="M192 0l192 110.851v221.703L192 443.405 0 332.554V110.85L192 0zM42.666 157.654V307.92l128 73.9V231.555l-128-73.901zm298.667.001l-128 73.9V381.82l128-73.9V157.655zM192 49.267l-125.867 72.67L192 194.605l125.867-72.67L192 49.267z" transform="translate(64 34.347)"></path></g>
                </svg>}

                text='my projects'
            />
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
