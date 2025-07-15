import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Color } from '../../styles/theme';

// @ts-ignore
import SvgSoundklub from './components/svg-soundklub';

export interface IBackgroundSoundklub {
  color: Color;
}

export const BackgroundSoundklub = ({ color }: IBackgroundSoundklub) => {
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <SvgSoundklub fill={color} />
    </View>
  );
};

export default BackgroundSoundklub;
