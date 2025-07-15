import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.fill}
        d="M15.94 5.94L12 9.878l-3.94-3.94L5.94 8.06 9.878 12l-3.94 3.94 2.121 2.12L12 14.123l3.94 3.939 2.12-2.121L14.123 12l3.939-3.94z"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default SvgComponent
