import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Color } from '../../../styles/theme';

// @ts-ignore
import SvgLogo from './components/svg-logo';

export interface ILogo {
  width: number,
  color: Color,
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Logo = ({ width, color }: ILogo) => (
  <View style={styles.container}>
    <SvgLogo
      width={width}
      height={width}
      fill={color}
    />
  </View>
);

export default Logo;
