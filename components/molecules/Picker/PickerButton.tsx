import React from 'react';

import {
  GestureResponderEvent,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Color, Size, Opacity } from '../../styles/theme';

import Text, { TextType } from '../../atoms/Text';

import Icon, { IconId } from '../../atoms/Icon';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: Size.BaseUnit * 5.5,
    borderBottomWidth: 1,
    borderBottomColor: Color.WhiteSmoke,
  },

  containerError: {
    borderBottomColor: Color.Primary,
  },

  labelContainer: {
    marginRight: Size.BaseUnit * 2,
  },

  textSelectedValueContainer: {
    flexGrow: 1,
  },

  textSelectedValueContainerHasFocus: {
    opacity: Opacity.Translucent,
  },

  contentEndContainer: {},

  errorContainer: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-start',
    height: Size.BaseUnit * 3,
  },
});

export interface IPickerButton {
  onPress: (event: GestureResponderEvent) => void;
  label: string;
  selectedValue: string;
  hasFocus: boolean;
  color: Color,
  borderColor: Color;
  errorTextOverride?: string;
  disabled?: boolean;
}

export const PickerButton = ({
  onPress,
  label,
  selectedValue,
  hasFocus,
  color,
  borderColor,
  errorTextOverride = '',
  disabled = false,
}: IPickerButton) => {
  const textSelectedValueContainer = StyleSheet.flatten([
    styles.textSelectedValueContainer,
    hasFocus ? styles.textSelectedValueContainerHasFocus : { },
  ]);

  let containerStyle: any = StyleSheet.flatten([styles.container, { borderBottomColor: borderColor }]);

  if (errorTextOverride) containerStyle = StyleSheet.flatten([containerStyle, styles.containerError]);

  if (disabled) containerStyle = StyleSheet.flatten([containerStyle, { opacity: Opacity.Translucent }]);

  return (
    <>
      <TouchableOpacity
        style={containerStyle}
        onPress={disabled ? () => {} : onPress}
        activeOpacity={disabled ? Opacity.Translucent : Opacity.Opaque}
      >
        <View style={styles.labelContainer}>
          <Text
            type={TextType.Caption}
            colorForeground={errorTextOverride ? Color.Primary : color}
          >
            {label}
          </Text>
        </View>

        <View style={textSelectedValueContainer}>
          <Text
            type={TextType.Paragraph}
            colorForeground={color}
          >
            {selectedValue}
          </Text>
        </View>

        <View style={styles.contentEndContainer}>
          {!!errorTextOverride && <Icon id={IconId.X} color={Color.Primary} />}
        </View>
      </TouchableOpacity>

      <View style={styles.errorContainer}>
        {!!errorTextOverride && (
          <Text
            type={TextType.Caption}
            colorForeground={Color.Primary}
          >
            {errorTextOverride}
          </Text>
        )}
      </View>
    </>
  );
};
