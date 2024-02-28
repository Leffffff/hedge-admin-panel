import * as React from "react"
import {SVGProps} from "react"

const CompassIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="#1F1E1C"
        {...props}
    >
        <path
            d="M12 2.5c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10Zm3 13-8 2 2-8 8-2-2 8Z"
        />
        <path d="M12 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
    </svg>
)
export default CompassIcon
