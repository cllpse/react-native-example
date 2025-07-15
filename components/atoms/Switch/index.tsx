import React from 'react';

import {
  StyleSheet,
  View,
  Switch as SwitchShadowed,
} from 'react-native';

import {
  Color,
  Size,
} from '../../styles/theme';

import Text, { TextType } from '../Text';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'flex-start',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },

  labelContainer: {
    marginLeft: Size.BaseUnit * 2,
  },

  errorContainer: {
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    height: Size.BaseUnit * 3,
  },
});

export interface ISwitch {
  onValueChanged: (value: boolean) => void;
  value: boolean;
  label?: string;
  errorTextOverride?: string;
  disabled?: boolean;
}

const Switch = ({
  onValueChanged,
  value,
  label = undefined,
  errorTextOverride,
  disabled = false,
}: ISwitch) => (
  <>
    <View style={styles.container}>
      <SwitchShadowed
        value={value}
        onValueChange={(v) => { onValueChanged(v); }}
        disabled={disabled}
        trackColor={{
          true: Color.Primary,
          false: Color.Primary,
        }}
      />

      {label && (
        <View style={styles.labelContainer}>
          <Text
            type={TextType.Paragraph}
            colorForeground={errorTextOverride ? Color.Primary : Color.DarkGrey}
          >
            {label}
          </Text>
        </View>
      )}
    </View>

    <View style={styles.errorContainer}>
      {errorTextOverride && (
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

export default Switch;
