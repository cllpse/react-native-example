import React, { ReactNode, useState } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
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
    backgroundColor: Color.Black85,
    flexDirection: 'column',
    position: 'absolute',
    right: 0,
    left: 0,
    zIndex: 999,
    borderTopLeftRadius: Radius.Large,
    borderTopRightRadius: Radius.Large,
  },

  containerTitle: {
    flex: 1,
    height: Size.BaseUnit * 9,
    alignItems: 'center',
    paddingTop: Size.BaseUnit,
    paddingBottom: Size.BaseUnit,
  },

  spline: {
    width: Size.BaseUnit * 4,
    height: Size.BaseUnit / 2,
    backgroundColor: Color.WhiteSmoke,
    borderRadius: Radius.Full,
    marginBottom: Size.BaseUnit,
  },

  containerChildren: {
    flex: 1,
    flexDirection: 'row',
    height: Size.BaseUnit * 14,
    paddingLeft: Size.BaseUnit * 2,
  },
});

export interface IDrawer {
  children?: ReactNode;
  title: string;
}

const Drawer = ({
  children = undefined,
  title,
}: IDrawer) => {
  const [isOpen, setIsOpen] = useState(false);

  const styleContainer = StyleSheet.flatten([
    styles.container,
    { bottom: isOpen ? 0 : 0 - Size.BaseUnit * 14 },
  ]);

  return (
    <View style={styleContainer}>
      <TouchableOpacity onPress={() => { setIsOpen(!isOpen); }} activeOpacity={Opacity.Opaque}>
        <View style={styles.containerTitle}>
          <View style={styles.spline} />

          <Text
            type={TextType.Button}
            colorForeground={Color.White}
            textAlign={TextAlign.Center}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.containerChildren}>
        {children}
      </View>
    </View>
  );
};

export default Drawer;
