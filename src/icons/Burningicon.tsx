import * as React from "react"
import {SVGProps} from "react"

const BurningIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="#021229"
        {...props}
    >
        <path
            d="M15.78 16.34s2.86-2.84 3.83-3.84c3.07-3 1.54-9.18 1.54-9.18S15 1.79 12 4.86C9.66 7.14 8.14 8.72 8.14 8.72S4.3 7.92 2 10.22L14.25 22.5c2.3-2.33 1.53-6.16 1.53-6.16Zm-1.5-9a2 2 0 1 1 2.879 2.776A2 2 0 0 1 14.28 7.34ZM3 21.5a7.81 7.81 0 0 0 5-2l-3-3c-2 1-2 5-2 5Z"
        />
    </svg>
)
export default BurningIcon
