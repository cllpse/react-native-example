import React from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

import {
  Size,
  Color,
  Radius,
  Opacity,
} from '../../styles/theme';

import Text, { TextType, TextAlign } from '../../atoms/Text';

const styles = StyleSheet.create({
  container: {
    width: Size.BaseUnit * 8,
    height: Size.BaseUnit * 8,
    justifyContent: 'center',
    backgroundColor: Color.WhiteSmoke,
    borderRadius: Radius.Full,
    marginRight: Size.BaseUnit * 3,
  },
});

export interface IButtonDevice {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
}

export const ButtonDevice = ({
  onPress,
  title,
}: IButtonDevice) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} activeOpacity={Opacity.Opaque}>
      <Text
        type={TextType.Caption}
        colorForeground={Color.Black}
        textAlign={TextAlign.Center}
      >
        {title}
      </Text>
    </TouchableOpacity>
  </View>
);
