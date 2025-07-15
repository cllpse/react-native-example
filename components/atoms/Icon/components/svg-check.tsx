import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.fill}
        d="M16.94 6.815l-6.128 6.127-3.75-3.75-2.123 2.121 5.873 5.872 8.249-8.249z"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default SvgComponent
