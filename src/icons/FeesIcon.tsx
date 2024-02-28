import * as React from "react"
import {SVGProps} from "react"

const FeesIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="#1F1E1C"
        {...props}
    >
        <path
            d="M19 10.5H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2Zm-14-4h14v2H5v-2Zm2-4h10v2H7v-2Z"
        />
    </svg>
)
export default FeesIcon
