import * as React from "react"
import Svg, { G, Path, SvgProps } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 24 24" {...props}>
      <G fill={props.fill} fillRule="evenodd">
        <Path d="M15.5 10a1.001 1.001 0 010-2 1.001 1.001 0 010 2M17 5.85V3.5h-3v2.35c-1.18.563-2 1.756-2 3.15s.82 2.587 2 3.15v8.35h3v-8.35c1.18-.563 2-1.756 2-3.15s-.82-2.587-2-3.15M8.5 16a1.001 1.001 0 010-2 1.001 1.001 0 010 2m1.5-4.15V3.5H7v8.35c-1.18.563-2 1.756-2 3.15s.82 2.587 2 3.15v2.35h3v-2.35c1.18-.563 2-1.756 2-3.15s-.82-2.587-2-3.15" />
      </G>
    </Svg>
  )
}

export default SvgComponent
