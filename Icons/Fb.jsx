import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="m8.263 6.254.31-2.012H6.641V2.936c0-.55.27-1.087 1.134-1.087h.878V.136S7.857 0 7.096 0c-1.59 0-2.63.964-2.63 2.708v1.534H2.7v2.012h1.768v4.864h2.175V6.254h1.621Z"
        
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          
          transform="translate(.117)"
          d="M0 0h11.118v11.118H0z"
        />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
