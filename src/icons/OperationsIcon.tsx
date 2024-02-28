import * as React from "react"
import {SVGProps} from "react"

const OperationsIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="#1F1E1C"
        {...props}
    >
        <path
            d="M20 4.5H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-12c0-1.103-.897-2-2-2ZM5 9a.5.5 0 0 1 .5-.5h3A.5.5 0 0 1 9 9v2a.5.5 0 0 1-.5.5h-3A.5.5 0 0 1 5 11V9Zm6 7.5H5v-2h6v2Zm8 0h-6v-2h6v2Z"
        />
    </svg>
)
export default OperationsIcon
