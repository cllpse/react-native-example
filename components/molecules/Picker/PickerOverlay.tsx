import React, { useState } from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import { Picker as PickerShadowed, } from '@react-native-picker/picker';

import { Color, Size } from '../../styles/theme';

import Button, { ButtonType } from '../../atoms/Button';

import Text, { TextType } from '../../atoms/Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Color.DarkGrey90,
    zIndex: 999,
    paddingBottom: Size.BaseUnit * 4,
  },

  containerButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: Size.BaseUnit * 2,
  },

  containerPicker: {
    flex: 1,
    flexDirection: 'row',
  },

  picker: {
    flex: 1,
    flexGrow: 1,
  },
});

export interface IPickerData {
  label: string;
  value: string;
}

export interface IPickerOverlay {
  onDismiss: (selectedValue: string) => void;
  selectedValue: string;
  isVisible: boolean;
  title: string;
  data: Array<IPickerData>;
}

export const PickerOverlay = ({
  onDismiss,
  selectedValue,
  isVisible,
  title,
  data,
}: IPickerOverlay) => {
  const [value, setValue] = useState(selectedValue);

  if (isVisible) {
    return (
      <View style={styles.container}>
        <View style={styles.containerButton}>
          <Text
            type={TextType.Paragraph}
            colorForeground={Color.White}
          >
            {title}
          </Text>

          <Button
            onPress={() => { onDismiss(value); }}
            type={ButtonType.Solid}
            colorBackground={Color.Transparent}
            title="Done"
          />
        </View>

        <View style={styles.containerPicker}>
          <PickerShadowed
            mode="dropdown"
            selectedValue={value}
            style={styles.picker}
            onValueChange={(v: string) => { setValue(v); }}
          >
            {data.map(item => (
              <PickerShadowed.Item
                key={item.value}
                label={item.label}
                value={item.value}
                color={Color.White}
              />
            ))}
          </PickerShadowed>
        </View>
      </View>
    );
  }

  return null;
};
