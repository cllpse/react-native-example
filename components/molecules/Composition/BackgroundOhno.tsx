import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Color, Size } from '../../styles/theme';

// @ts-ignore
import SvgOhno from './components/svg-ohno';

import Text, { TextType, TextAlign } from '../../atoms/Text';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: Size.BaseUnit * 2,
    paddingRight: Size.BaseUnit * 2,
  },

  containerText: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export interface IBackgroundOhno {
  text: string;
  colorBackground: Color;
  colorTextForeground: Color;
  colorTextBackground: Color;
}

export const BackgroundOhno = ({
  text,
  colorBackground,
  colorTextForeground,
  colorTextBackground,
}: IBackgroundOhno) => (
  <View style={styles.container}>
    <SvgOhno fill={colorBackground} />

    <View style={styles.containerText}>
      <Text
        type={TextType.Highlight}
        colorForeground={colorTextForeground}
        colorBackground={colorTextBackground}
        textAlign={TextAlign.Center}
      >
        {text}
      </Text>
    </View>
  </View>
);

export default BackgroundOhno;
