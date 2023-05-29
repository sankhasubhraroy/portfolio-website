import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './Intro.css'

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
                <a href="#">
                    <span>Resume</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
                </a>
                <a href="#">
                    <span>My Works</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                </a>
            </div>
        </div>
    )
}


Intro.propTypes = {
    designation: PropTypes.array
}

Intro.defaultProps = {
    designation: ['Fullstack Developer', 'Java Developer', 'Self-taught Programmer', 'Creative Thinker']
}