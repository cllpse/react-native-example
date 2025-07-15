import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props: SvgProps) {
  const { width, height, fill } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        d="M12 7.052a2.635 2.635 0 012.632 2.632A2.635 2.635 0 0112 12.316a2.635 2.635 0 01-2.632-2.632A2.635 2.635 0 0112 7.052m2.307 7.764a5.635 5.635 0 003.325-5.132A5.638 5.638 0 0012 4.052a5.638 5.638 0 00-5.632 5.632 5.635 5.635 0 003.325 5.132 5.635 5.635 0 00-3.325 5.132h3A2.634 2.634 0 0112 17.317a2.634 2.634 0 012.632 2.631h3a5.635 5.635 0 00-3.325-5.132"
        fill={fill}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default SvgComponent;
