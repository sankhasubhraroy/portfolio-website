import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './ProjectSlide.css'

export default function ProjectSlide(props) {

    let [count, setCount] = useState(0);
    console.log(props.slideLinks)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='project-slide'>
            <span className='btn1'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={props.btnColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>
            </span>
            <span className='btn2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={props.btnColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
            </span>
            <span className='btn3'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={props.btnColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </span>

            <img src={props.slideLinks[count % props.slideLinks.length]} alt="Park-Now-Preview" border="0"></img>

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
