import * as React from "react"
import {SVGProps} from "react"

const DisconnectIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="#33322F"
        {...props}
    >
        <path
            d="M12 3.5c-4.963 0-9 4.037-9 9v.001l5-4v3h7v2H8v3l-5-4c.001 4.963 4.037 8.999 9 8.999s9-4.037 9-9-4.037-9-9-9Z"
        />
    </svg>
)
export default DisconnectIcon
