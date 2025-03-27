import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    fill="#fff"
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M460-460H240v-40h220v-220h40v220h220v40H500v220h-40v-220Z" />
  </svg>
)
export { SvgComponent as Plus }
