import React from 'react'

export default function RightArrowIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-right-circle"
        >
            <circle cx={12} cy={12} r={10} />
            <polyline points="12 16 16 12 12 8" />
            <line x1={8} y1={12} x2={16} y2={12} />
        </svg>
    )
}
