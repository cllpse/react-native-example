import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props: SvgProps) {
  const { width, height, fill } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        d="M6 13.49l5.748-5.747 1.843 1.843-5.75 5.749L6 15.338V13.49zm12.163 4.554c-.808-.536-1.812-1.202-3.699-1.202-1.886 0-2.89.666-3.697 1.202-.636.422-1.057.7-2.038.7-.729 0-1.148-.154-1.577-.408l1.934-.003 8.747-8.747L11.748 3.5 3 12.248v7.594c.249 0 .477.019.677.056.538.1.882.328 1.358.645.806.535 1.809 1.202 3.694 1.202 1.887 0 2.891-.666 3.697-1.202.636-.422 1.057-.701 2.038-.701.982 0 1.403.279 2.04.7.807.537 1.811 1.203 3.698 1.203v-3c-.982 0-1.403-.28-2.039-.701z"
        fill={fill}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default SvgComponent;
