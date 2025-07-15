import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props: SvgProps) {
  const { width, height, fill } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        d="M18 18.5c0 .55-.449 1-1 1-.551 0-1-.45-1-1 0-.551.449-1 1-1 .551 0 1 .449 1 1m-1-12c-.551 0-1-.45-1-1 0-.551.449-1 1-1 .551 0 1 .449 1 1 0 .55-.449 1-1 1m-10 0c-.551 0-1-.45-1-1 0-.551.449-1 1-1 .551 0 1 .449 1 1 0 .55-.449 1-1 1m1.5 8.85v-6.7A3.495 3.495 0 0010.15 7h3.7a3.495 3.495 0 001.65 1.65v6.7A3.495 3.495 0 0013.85 17h-3.7a3.495 3.495 0 00-1.65-1.65M7 17.5c.551 0 1 .449 1 1 0 .55-.449 1-1 1-.551 0-1-.45-1-1 0-.551.449-1 1-1m11.5-2.15v-6.7a3.49 3.49 0 002-3.15A3.5 3.5 0 0017 2a3.49 3.49 0 00-3.15 2h-3.7A3.49 3.49 0 007 2a3.5 3.5 0 00-3.5 3.5 3.49 3.49 0 002 3.15v6.7a3.49 3.49 0 00-2 3.15A3.5 3.5 0 007 22a3.49 3.49 0 003.15-2h3.7A3.49 3.49 0 0017 22a3.5 3.5 0 003.5-3.5 3.49 3.49 0 00-2-3.15"
        fill={fill}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default SvgComponent;
