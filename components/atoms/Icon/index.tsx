import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Color, Size } from '../../styles/theme';

// @ts-ignore
import SvgSettingsApp from './components/svg-settings-app';
// @ts-ignore
import SvgSoundklubApp from './components/svg-soundklub-app';
// @ts-ignore
import SvgX from './components/svg-x';
// @ts-ignore
import SvgFacebook from './components/svg-facebook';
// @ts-ignore
import SvgGoogle from './components/svg-google';
// @ts-ignore
import SvgBack from './components/svg-back';
// @ts-ignore
import SvgCheck from './components/svg-check';
// @ts-ignore
import SvgDevice from './components/svg-device';
// @ts-ignore
import SvgFeed from './components/svg-feed';
// @ts-ignore
import SvgProfile from './components/svg-profile';
// @ts-ignore
import SvgCamera from './components/svg-camera';
// @ts-ignore
import SvgLocked from './components/svg-locked';
// @ts-ignore
import SvgTransfer from './components/svg-transfer';
// @ts-ignore
import SvgWarranty from './components/svg-warranty';

export enum IconId {
  SettingsApp,
  SoundklubApp,
  X,
  Facebook,
  Google,
  Back,
  Check,
  Device,
  Feed,
  Profile,
  Camera,
  Locked,
  Transfer,
  Warranty
}

export interface IIcon {
  id?: IconId;
  color: Color
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Icon = ({ id, color }: IIcon) => {
  let IconComponent: any; // @cllpse: importing from generated js files (react-svgr.com/playground). No type needed.

  switch (id) {
    case IconId.SettingsApp:
      IconComponent = SvgSettingsApp;
      break;

    case IconId.SoundklubApp:
      IconComponent = SvgSoundklubApp;
      break;

    case IconId.X:
      IconComponent = SvgX;
      break;

    case IconId.Facebook:
      IconComponent = SvgFacebook;
      break;

    case IconId.Google:
      IconComponent = SvgGoogle;
      break;

    case IconId.Back:
      IconComponent = SvgBack;
      break;

    case IconId.Check:
      IconComponent = SvgCheck;
      break;

    case IconId.Device:
      IconComponent = SvgDevice;
      break;

    case IconId.Feed:
      IconComponent = SvgFeed;
      break;

    case IconId.Profile:
      IconComponent = SvgProfile;
      break;

    case IconId.Camera:
      IconComponent = SvgCamera;
      break;

    case IconId.Locked:
      IconComponent = SvgLocked;
      break;

    case IconId.Transfer:
      IconComponent = SvgTransfer;
      break;

    case IconId.Warranty:
      IconComponent = SvgWarranty;
      break;

    default:
      break;
  }

  if (!IconComponent) {
    return null;
  }

  return (
    <View style={styles.container}>
      <IconComponent
        width={Size.BaseUnit * 3}
        height={Size.BaseUnit * 3}
        fill={color}
      />
    </View>
  );
};

export default Icon;
