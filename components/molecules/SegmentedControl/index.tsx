import React, { useState } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { Color, Opacity } from '../../styles/theme';

import Button, { ButtonType } from '../../atoms/Button';

import Icon, { IconId } from '../../atoms/Icon';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  lowOpacity: {
    opacity: Opacity.Translucent,
  },
});

export interface ISegmentedControlData {
  label: string;
  value: string;
  iconId: IconId;
}

export interface ISegmentedControl {
  data: Array<ISegmentedControlData>;
  onChange: (value: string) => void;
  initialValue: string;
  color: Color;
}

const SegmentedControl = ({
  data,
  onChange,
  initialValue,
  color,
}: ISegmentedControl) => {
  const [_initialValue, _setInitialValue] = useState(initialValue);

  return (
    <View style={styles.container}>
      {data.map(item => (
        <View key={item.value} style={_initialValue === item.value ? {} : styles.lowOpacity}>
          <Button
            onPress={() => { _setInitialValue(item.value); onChange(item.value); }}
            type={ButtonType.Solid}
            title={item.label}
            colorForeground={color}
            colorBackground={Color.Transparent}
            icon={<Icon id={item.iconId} color={color} />}
            omitShadow
          />
        </View>
      ))}
    </View>
  );
};

export default SegmentedControl;
