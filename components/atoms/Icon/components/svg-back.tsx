import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 24 24" {...props}>
      <Path
        fill={props.fill}
        d="M13.47 4.94L6.409 12l7.061 7.06 2.121-2.12L10.652 12l4.939-4.94z"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default SvgComponent
