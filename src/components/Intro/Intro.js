import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './Intro.css'
import { Link } from 'react-router-dom'
import DownArrowIcon from '../../icons/DownArrowIcon';
import RightArrowIcon from '../../icons/RightArrowIcon';

export default function Intro(props) {

    let [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='intro'>
            <p className='hello'>Hello,</p>
            <p className='hello alt'>Hello, I'm</p>
            <h1>I'm Sankhasubhra Roy</h1>
            <h1 className='alt'>Sankhasubhra Roy</h1>
            <h2>{props.designation[count % props.designation.length]}</h2>
            <p className='description'>I'm a passionate and dedicated full stack developer with a strong foundation in computer science. I have always been fascinated by the intricate world of software development. I have hands-on experience in several technologies, including <span>Java</span>, <span>Node.js</span>, <span>React</span>, <span>MySQL</span>, and <span>MongoDB</span>.</p>
            <p className='description'>As a full stack developer, I thrive in dynamic and challenging environments, and I am eager to contribute my skills to create innovative and robust applications. I am a firm believer in clean code, modular design, and continuous improvement.</p>
            <div className="attachment">
                <a href="resume.pdf" target='_blank' rel="noreferrer">
                    <span>Resume</span>
                    <DownArrowIcon />
                </a>
                <Link to="projects">
                    <span>My Works</span>
                    <RightArrowIcon />
                </Link>
            </div>
        </div>
    )
}


Intro.propTypes = {
    designation: PropTypes.array
}

Intro.defaultProps = {
    designation: ['Full-Stack Developer', 'Java Developer', 'Self-taught Programmer', 'Creative Thinker']
}