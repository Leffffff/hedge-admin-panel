import * as React from "react"
import {SVGProps} from "react"

const RingIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={31}
        fill="none"
        {...props}
    >
        <path
            stroke="#000"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M15.025 4.138a7.506 7.506 0 0 0-7.5 7.5v3.612c0 .762-.325 1.925-.712 2.575l-1.438 2.387c-.887 1.476-.275 3.113 1.35 3.663 5.388 1.8 11.2 1.8 16.588 0 1.512-.5 2.175-2.288 1.35-3.663l-1.438-2.387c-.375-.65-.7-1.813-.7-2.575v-3.613c0-4.124-3.375-7.5-7.5-7.5Z"
        />
        <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M17.337 4.5a8.442 8.442 0 0 0-4.625 0 2.482 2.482 0 0 1 2.313-1.575c1.05 0 1.95.65 2.312 1.575Z"
        />
        <path
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M18.775 24.325a3.761 3.761 0 0 1-3.75 3.75 3.763 3.763 0 0 1-2.65-1.1 3.763 3.763 0 0 1-1.1-2.65"
        />
    </svg>
)
export default RingIcon
