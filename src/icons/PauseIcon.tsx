import * as React from "react"
import {SVGProps} from "react"

const PauseIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="#1F1E1C"
        {...props}
    >
        <path
            d="M16 6.5H8c-3.296 0-5.982 2.682-6 5.986v.042A6.01 6.01 0 0 0 8 18.5h8c3.309 0 6-2.691 6-6s-2.691-6-6-6Zm0 9c-1.627 0-3-1.373-3-3s1.373-3 3-3 3 1.373 3 3-1.373 3-3 3Z"
        />
    </svg>
)
export default PauseIcon
