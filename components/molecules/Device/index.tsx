import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { Size, Color, Radius } from '../../styles/theme';
import Text, { TextType } from '../../atoms/Text';

// @ts-ignore
import SvgBatteryboks from './components/svg-batteryboks';
// @ts-ignore
import SvgNewsoundboks from './components/svg-newsoundboks';
// @ts-ignore
import SvgSoundboks2 from './components/svg-soundboks2';

const ensureHashCharacter = (s: string): string => (s[0] === '#' ? s : `#${s}`);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },

  label: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0 - Size.BaseUnit * 2.5,
    paddingTop: Size.BaseUnit / 1.5,
    paddingRight: Size.BaseUnit * 1.5,
    paddingBottom: Size.BaseUnit / 1.5,
    paddingLeft: Size.BaseUnit * 1.5,
    backgroundColor: Color.DarkGrey,
  },

  statusIndicator: {
    width: Size.BaseUnit,
    height: Size.BaseUnit,
    marginRight: Size.BaseUnit / 1.5,
    backgroundColor: 'cyan',
    borderRadius: Radius.Full,
  },
});

export enum DeviceType {
  NewSoundboks,
  Soundboks2,
  Batteryboks
}

export enum DeviceStatus {
  Unknown,
  Off,
  Disconnected,
  Connected,
  Locked,
  Error,
}

export interface IDevice {
  type: DeviceType;
  status: DeviceStatus;
  teamId: string;
  color: Color;
}

const Device = ({
  type,
  status,
  teamId,
  color,
}: IDevice) => {
  let Svg: any; // @cllpse: importing from generated js files (react-svgr.com/playground). No type needed.
  let indicatorColor = Color.LightGrey;

  switch (type) {
    case DeviceType.Batteryboks:
      Svg = SvgBatteryboks;
      break;

    case DeviceType.Soundboks2:
      Svg = SvgSoundboks2;
      break;

    case DeviceType.NewSoundboks:
      Svg = SvgNewsoundboks;
      break;

    default:
      break;
  }

  switch (status) {
    case DeviceStatus.Unknown:
    case DeviceStatus.Disconnected:
      indicatorColor = Color.LightGrey;
      break;

    case DeviceStatus.Connected:
      indicatorColor = Color.Green;
      break;

    case DeviceStatus.Error:
      indicatorColor = Color.Primary;
      break;

    default:
      break;
  }

  const styleStatusIndicator = StyleSheet.flatten([styles.statusIndicator, { backgroundColor: indicatorColor }]);

  return (
    <View style={styles.container}>
      <Svg height={Size.BaseUnit * 24} fill={color} />

      <View style={styles.label}>
        {type !== DeviceType.Batteryboks && (
          <View style={styleStatusIndicator} />
        )}

        <Text
          type={TextType.Caption}
          colorForeground={Color.White}
        >
          {ensureHashCharacter(teamId)}
        </Text>
      </View>
    </View>
  );
};

export default Device;
