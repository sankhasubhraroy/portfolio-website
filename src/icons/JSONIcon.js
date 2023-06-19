import React from 'react'

export default function JSONIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 256 256"
        >
            <defs>
                <linearGradient
                    id="linearGradient-1"
                    x1="15.791%"
                    x2="91.009%"
                    y1="14.737%"
                    y2="85.228%"
                >
                    <stop offset="0%" />
                    <stop offset="100%" stopColor="#FFF" />
                </linearGradient>
                <linearGradient
                    id="linearGradient-2"
                    x1="82.136%"
                    x2="-3.113%"
                    y1="85.237%"
                    y2="14.79%"
                >
                    <stop offset="0%" />
                    <stop offset="100%" stopColor="#FFF" />
                </linearGradient>
            </defs>
            <path
                fill="url(#linearGradient-1)"
                d="M127.783 190.56c56.637 77.208 112.064-21.55 111.982-80.94C239.67 39.404 168.5.16 127.737.16 62.309.159 0 54.232 0 128.216 0 210.45 71.425 256 127.737 256c-12.743-1.835-55.21-10.934-55.78-108.747-.385-66.154 21.58-92.585 55.688-80.958.764.283 37.622 14.823 37.622 62.32 0 47.296-37.484 61.944-37.484 61.944z"
            />
            <path
                fill="url(#linearGradient-2)"
                d="M127.717 66.241c-37.424-12.899-83.269 17.946-83.269 79.726C44.448 246.844 119.201 256 128.263 256 193.691 256 256 201.926 256 127.943 256 45.709 184.575.159 128.263.159c15.597-2.16 84.065 16.88 84.065 110.458 0 61.026-51.124 94.248-84.376 80.054-.764-.283-37.623-14.823-37.623-62.32 0-47.297 37.388-62.11 37.388-62.11z"
            />
        </svg>
    )
}