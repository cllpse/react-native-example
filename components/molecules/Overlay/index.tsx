import React, { ReactNode } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { Size, Color, ShadowOverlay } from '../../styles/theme';

import Button from '../../atoms/Button';
import Icon, { IconId } from '../../atoms/Icon';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.DarkGrey90,
    alignSelf: 'stretch',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 999,
  },

  children: {
    backgroundColor: Color.DarkGrey,
    alignSelf: 'stretch',
    position: 'absolute',
    top: Size.BaseUnit * 8,
    right: Size.BaseUnit * 2,
    bottom: Size.BaseUnit * 8,
    left: Size.BaseUnit * 2,
  },

  button: {
    alignSelf: 'stretch',
    position: 'absolute',
    top: Size.BaseUnit * 8,
    right: Size.BaseUnit * 2,
  },
});

export interface IOverlay {
  children: ReactNode;
  onDismiss: () => void;
  isVisible: boolean;
  colorIcon?: Color,
}

const Overlay = ({
  children,
  onDismiss,
  isVisible,
  colorIcon = Color.Primary,
}: IOverlay) => {
  const styleChildren = StyleSheet.flatten([
    styles.children,
    ShadowOverlay,
  ]);

  if (isVisible) {
    return (
      <View style={styles.container}>
        <View style={styleChildren}>
          {children}
        </View>

        <View style={styles.button}>
          <Button
            onPress={onDismiss}
            colorBackground={Color.Transparent}
            omitShadow
            icon={<Icon id={IconId.X} color={colorIcon} />}
          />
        </View>
      </View>
    );
  }

  return null;
};

export default Overlay;
