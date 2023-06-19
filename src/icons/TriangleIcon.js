import React from 'react'

export default function TriangleIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke={props.color}
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-triangle"
        >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        </svg>
    )
}
