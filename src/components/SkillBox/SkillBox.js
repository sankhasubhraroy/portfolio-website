import React from 'react'
import PropTypes from 'prop-types'
import './SkillBox.css'

export default function SkillBox(props) {
    return (
        <div className="skill-box">
            <div className='hexagon'>
                <div className="skill-icon">
                    {props.skillIcon}
                    <p>{props.skillName}</p>
                </div>
            </div>
        </div>
    )
}

SkillBox.propTypes = {
    skillIcon: PropTypes.object.isRequired,
    skillName: PropTypes.string.isRequired,
}