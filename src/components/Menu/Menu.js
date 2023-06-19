import React from 'react'
import './Menu.css'
import MenuItem from '../MenuItem/MenuItem'
import HomeIcon from '../../icons/HomeIcon'
import ProjectIcon from '../../icons/ProjectIcon'
import AboutIcon from '../../icons/AboutIcon'
import ContactIcon from '../../icons/ContactIcon'

export default function Menu() {
    return (
        <div className="menu">

            <MenuItem
                svg={<HomeIcon color='#4CBB17' />}
                link='/'
                linkTitle='Home'
                titleColor='#4CBB17'
            />

            <MenuItem
                svg={<ProjectIcon color='#fd5c63' />}
                link='projects'
                linkTitle='Projects'
                titleColor='#fd5c63'
            />

            <MenuItem
                svg={<AboutIcon color='#6050DC' />}
                link='about'
                linkTitle='About'
                titleColor='#6050DC'
            />

            <MenuItem
                svg={<ContactIcon color='#555555' />}
                link='contact'
                linkTitle='Contact'
                titleColor='#555555'
            />
        </div>
    )
}
