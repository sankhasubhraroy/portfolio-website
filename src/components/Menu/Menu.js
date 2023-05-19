import React from 'react'
import './Menu.css'
import MenuItem from '../MenuItem/MenuItem'

export default function Menu() {
    return (
        <div className="menu">

            <MenuItem
                svg={<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M160 936V456l320-240 320 240v480H560V656H400v280H160Z" fill='#4CBB17' /></svg>}

                linkTitle='Home'
                titleColor='#4CBB17'
            />

            <MenuItem
                svg={<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M354 936H180q-24 0-42-18.5T120 873V697q44-5 75.5-34.5T227 590q0-43-31.5-72.5T120 483V307q0-23 18-41.5t42-18.5h176q11-40 38-65.5t67-25.5q39 0 70 25.5t42 65.5h176q23 0 41.5 18.5T809 307v176q40 11 65.5 42t25.5 70q0 40-25.5 67T809 700v176q0 24-18.5 42T749 936H575q-5-48-38-77.5T461 829q-38 0-70 29.5T354 936Z" fill='#fd5c63' /></svg>}

                linkTitle='Projects'
                titleColor='#fd5c63'
            />

            <MenuItem
                svg={<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m379 713 44-44-93-93 92-92-44-44-136 136 137 137Zm202 0 137-137-137-137-44 44 93 93-93 93 44 44ZM180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Z" fill='#6050DC' /></svg>}

                linkTitle='Skills'
                titleColor='#6050DC'
            />

            <MenuItem
                svg={<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m480 935-41-37q-106-97-175-167.5t-110-126Q113 549 96.5 504T80 413q0-90 60.5-150.5T290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.5T880 413q0 46-16.5 91T806 604.5q-41 55.5-110 126T521 898l-41 37Z" fill='#FF033E' /></svg>}

                linkTitle='Services'
                titleColor='#FF033E'
            />

            <MenuItem
                svg={<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 656q33 0 56.5-23.5T560 576q0-33-23.5-56.5T480 496q-33 0-56.5 23.5T400 576q0 33 23.5 56.5T480 656ZM320 816h320v-23q0-24-13-44t-36-30q-26-11-53.5-17t-57.5-6q-30 0-57.5 6T369 719q-23 10-36 30t-13 44v23Zm420 160H220q-24 0-42-18t-18-42V236q0-24 18-42t42-18h341l239 239v501q0 24-18 42t-42 18Z" fill='#333' /></svg>}

                linkTitle='Contact'
                titleColor='#333'
            />
        </div>
    )
}
