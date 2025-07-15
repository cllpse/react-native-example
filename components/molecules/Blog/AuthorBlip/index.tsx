import React from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

import RequestState from '../RequestState';

import {
  Size,
  Color,
  Radius,
  BorderWidth,
  Opacity,
} from '../../../styles/theme';

import Text, { TextType } from '../../../atoms/Text';
import Image, { ImageShape, ImageRatio } from '../Image';
import { Spacer, SpacerSize } from '../../Composition';

export interface IAuthorBlip {
  onPress: (event: GestureResponderEvent) => void;
  width: number;
  title: string;
  name: string;
  state: RequestState;
}

const styles = StyleSheet.create({
  touchableOpacity: {
  },

  container: {
    flexDirection: 'row',
  },

  placeholderContainer: {
    alignSelf: 'center',
    width: '50%',
    height: Size.BaseUnit * 4,
    borderStyle: 'solid',
    borderColor: Color.DarkGrey,
    borderWidth: BorderWidth.Base,
  },

  containerImage: {
    borderRadius: Radius.Full,
    overflow: 'hidden',
  },

  containerText: {
    justifyContent: 'center',
  },
});

const uri = 'https://images.unsplash.com/flagged/photo-1576182508934-2b408f64a71a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=40';

const AuthorBlip = ({
  onPress,
  width,
  title,
  name,
  state,
}: IAuthorBlip) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={Opacity.Translucent}
    style={styles.touchableOpacity}
  >
    <View style={styles.container}>
      <Image
        uri={uri}
        width={width}
        ratio={ImageRatio.Square}
        shape={ImageShape.Circle}
        state={state}
      />

      <Spacer size={SpacerSize.SmallHorizontal} />

      {state === RequestState.Done && (
        <View style={styles.containerText}>
          <Text type={TextType.Caption} colorForeground={Color.DarkGrey}>
            {title}
          </Text>

          <Spacer size={SpacerSize.TinyVertical} />

          <Text type={TextType.Paragraph} colorForeground={Color.DarkGrey}>
            {name}
          </Text>
        </View>
      )}

      {state === RequestState.Loading && (<View style={styles.placeholderContainer} />)}
    </View>
  </TouchableOpacity>
);

export default AuthorBlip;
