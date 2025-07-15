import * as React from 'react';
import Svg, { G, Path, SvgProps } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props: SvgProps) {
  const { width, height, fill } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <G fill={fill} fillRule="evenodd">
        <Path d="M10.261 2l-5.26 5.26 5.26 5.262 2.121-2.121-1.639-1.64h5.721v-3h-5.72l1.638-1.64zM11.203 13.463l1.64 1.64H7.122v3h5.72l-1.64 1.64 2.122 2.121 5.26-5.26-5.26-5.262z" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
