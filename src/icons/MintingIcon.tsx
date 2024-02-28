import * as React from "react"
import {SVGProps} from "react"

const MintingIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="#021229"
        {...props}
    >
        <path
            d="M13 2.555v8.949h8.949c-.47-4.717-4.232-8.48-8.949-8.95v.001Zm4.969 17.953c2.189-1.637 3.694-4.14 3.98-7.004h-8.183l4.203 7.004Z"
        />
        <path
            d="M11 12.504v-9.95c-5.046.505-9 4.774-9 9.95 0 5.514 4.486 10 10 10a9.93 9.93 0 0 0 4.255-.964s-5.253-8.915-5.254-9.031L11 12.504Z"
        />
    </svg>
)
export default MintingIcon
