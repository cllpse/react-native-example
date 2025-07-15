import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props: SvgProps) {
  const { width, height, fill } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        d="M17 20.75h-3v-3.407c0-.684.348-1.313.932-1.683a5.475 5.475 0 002.568-4.647c0-1.402-.53-2.716-1.449-3.711v5.21H7.949v-5.21a5.459 5.459 0 00-1.449 3.71c0 1.893.96 3.63 2.567 4.647.584.369.933.999.933 1.684v3.408H7V17.88a8.451 8.451 0 01-3.5-6.867 8.46 8.46 0 014.613-7.545 1.938 1.938 0 011.908.068c.581.354.928.972.928 1.653v4.324h2.102V5.186c0-.68.346-1.297.927-1.651a1.939 1.939 0 011.91-.066 8.454 8.454 0 014.612 7.544A8.451 8.451 0 0117 17.88v2.87z"
        fill={fill}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default SvgComponent;
