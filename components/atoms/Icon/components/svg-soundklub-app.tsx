import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 24 24" {...props}>
      <Path
        d="M15.453 18.407a.974.974 0 01-.58-.208.981.981 0 01-.42-.792c0-.55.45-1 1-1 .221 0 .414.086.58.208.248.182.42.461.42.792 0 .551-.448 1-1 1M7 11.953a1.001 1.001 0 012 0 1.001 1.001 0 01-2 0M16.453 6.5c0 .33-.172.61-.42.792a.974.974 0 01-.58.208c-.55 0-1-.449-1-1 0-.33.172-.61.42-.793a.98.98 0 01.58-.207c.552 0 1 .45 1 1m-1 7.407a3.46 3.46 0 00-1.652.433l-2.368-1.733c.041-.212.067-.429.067-.654 0-.224-.026-.442-.067-.653l2.368-1.733a3.46 3.46 0 001.652.433 3.5 3.5 0 10-3.5-3.5c0 .224.025.442.066.654L9.652 8.886A3.462 3.462 0 008 8.453a3.5 3.5 0 100 7c.6 0 1.158-.165 1.652-.432l2.367 1.732c-.04.212-.066.43-.066.654a3.5 3.5 0 103.5-3.5"
        fill={props.fill}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default SvgComponent
