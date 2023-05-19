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
            <h1>I'm Sankhasubhra Roy</h1>
            <h2>{props.designation[count % props.designation.length]}</h2>
            <p className='description'>I'm a passionate and dedicated full stack developer with a strong foundation in computer science. I have always been fascinated by the intricate world of software development. I have hands-on experience in several technologies, including <span>Java</span>, <span>Node.js</span>, <span>React</span>, <span>MySQL</span>, and <span>MongoDB</span>.</p>
            <p className='description'>As a full stack developer, I thrive in dynamic and challenging environments, and I am eager to contribute my skills to create innovative and robust applications. I am a firm believer in clean code, modular design, and continuous improvement.</p>
            <div className="attachment">
                <a href="#">
                    <span>Resume</span>
                </a>
                <a href="#">
                    <span>My Work</span>
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