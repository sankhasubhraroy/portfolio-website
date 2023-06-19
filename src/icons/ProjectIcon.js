import React from 'react'

export default function ProjectIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 512 512"
        >
            <g fillRule="evenodd" stroke="none" strokeWidth={1}>
                <path
                    fill={props.color}
                    d="M192 0l192 110.851v221.703L192 443.405 0 332.554V110.85L192 0zM42.666 157.654V307.92l128 73.9V231.555l-128-73.901zm298.667.001l-128 73.9V381.82l128-73.9V157.655zM192 49.267l-125.867 72.67L192 194.605l125.867-72.67L192 49.267z"
                    transform="translate(64 34.347)"
                />
            </g>
        </svg>
    )
}
