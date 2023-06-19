import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './ProjectSlide.css'
import TriangleIcon from '../../icons/TriangleIcon';
import SquareIcon from '../../icons/SquareIcon';
import BurgerIcon from '../../icons/BurgerIcon';

export default function ProjectSlide(props) {

    let [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    const toPreviousSlide = () => {
        if (count > 0) setCount(prevCount => prevCount - 1);
    }

    const toFirstSlide = () => {
        setCount(0)
    }

    const toNextSlide = () => {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div className='project-slide'>
            <span className='btn1' onClick={toPreviousSlide}>
                <TriangleIcon color={props.btnColor} />
            </span>
            <span className='btn2' onClick={toFirstSlide}>
                <SquareIcon color={props.btnColor} />
            </span>
            <span className='btn3' onClick={toNextSlide}>
                <BurgerIcon color={props.btnColor} />
            </span>

            <img src={props.slideLinks[count % props.slideLinks.length]} alt="Park-Now-Preview"></img>

        </div>
    )
}

ProjectSlide.propTypes = {
    slideLinks: PropTypes.array.isRequired,
    btnColor: PropTypes.string
}
ProjectSlide.defaultProps = {
    btnColor: "#777"
}
