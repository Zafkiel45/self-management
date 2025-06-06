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
    <path d="m422-232 207-248H469l29-227-185 267h139l-30 208Zm-55.85 107.38 40-275.38h-170l299.23-431.54h18.47L514.62-520h200l-330 395.38h-18.47ZM471-470Z" />
  </svg>
)
export { SvgComponent as Bolt }
