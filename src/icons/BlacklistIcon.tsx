import * as React from "react"
import {SVGProps} from "react"

const BlacklistIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={25}
        fill="#33322F"
        {...props}
    >
        <path
            d="M16.813 4.919A.997.997 0 0 0 16 4.5H3a1 1 0 0 0-.813 1.581L6.771 12.5l-4.585 6.419A1 1 0 0 0 3 20.5h13a.997.997 0 0 0 .813-.419l5-7a.997.997 0 0 0 0-1.162l-5-7Z"
        />
    </svg>
)
export default BlacklistIcon
