import * as React from 'react';
import Svg, { G, Path, SvgProps } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props: SvgProps) {
  const { width, height, fill } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <G fill={fill} fillRule="evenodd">
        <Path d="M5.5 2.47v1.499H2V19.97h21V3.969H11V2.47H5.5zM5 16.97h15v-10H5v10z" />
        <Path d="M12.5 10.47c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5m0 5.5a4 4 0 100-8 4 4 0 000 8" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
