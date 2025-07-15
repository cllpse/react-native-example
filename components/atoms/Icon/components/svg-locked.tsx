import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props: SvgProps) {
  const { width, height, fill } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        d="M8.5 18h7v-5h-7v5zm2-10.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5V10h-3V7.5zm6 2.5V7.5C16.5 5.019 14.481 3 12 3a4.505 4.505 0 00-4.5 4.5V10h-2v11h13V10h-2z"
        fill={fill}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default SvgComponent;
