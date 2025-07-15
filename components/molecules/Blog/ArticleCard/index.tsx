import React from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

import RequestState from '../RequestState';

import {
  Color,
  Opacity,
  Size,
  BorderWidth,
} from '../../../styles/theme';

import Text, { TextType } from '../../../atoms/Text';
import Image, { ImageRatio, ImageShape } from '../Image';
import { Spacer, SpacerSize } from '../../Composition';
import AuthorBlip from '../AuthorBlip';

export interface IArticleCardData {
  articleTitle: string;
  arcitleSummary: string;
  authorTitle: string;
  authorName: string;
}

export interface IArticleCard {
  onPress: (event: GestureResponderEvent) => void;
  onAuthorBlipPress: (event: GestureResponderEvent) => void;
  width: number;
  state: RequestState;
  data?: IArticleCardData;
}

const styles = StyleSheet.create({
  container: {
  },

  touchableOpacity: {
  },

  placeholderContainer: {
    width: '100%',
    height: Size.BaseUnit * 8,
    borderStyle: 'solid',
    borderColor: Color.DarkGrey,
    borderWidth: BorderWidth.Base,
  },
});

const uri = 'https://images.unsplash.com/photo-1575854372692-1155df194fae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=40';

const ArticleCard = ({
  onPress,
  onAuthorBlipPress,
  width,
  state,
  data,
}: IArticleCard) => {
  const styleTouchableOpacity = StyleSheet.flatten([styles.touchableOpacity, { width }]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={Opacity.Translucent}
      style={styleTouchableOpacity}
    >
      <View style={styles.container}>
        <Image
          uri={uri}
          width={width}
          shape={ImageShape.Square}
          ratio={ImageRatio.FourToThree}
          state={state}
        />

        <Spacer size={SpacerSize.MediumVertical} />

        {data && (
          <Text type={TextType.HeadingSmall} colorForeground={Color.DarkGrey}>
            {data.articleTitle}
          </Text>
        )}

        {!data && state === RequestState.Loading && (<View style={styles.placeholderContainer} />)}

        <Spacer size={SpacerSize.MediumVertical} />

        {data && (
          <Text type={TextType.Highlight} colorForeground={Color.DarkGrey}>
            {data.arcitleSummary}
          </Text>
        )}

        {!data && state === RequestState.Loading && (<View style={styles.placeholderContainer} />)}

        <Spacer size={SpacerSize.MediumVertical} />

        <AuthorBlip
          onPress={onAuthorBlipPress}
          width={width / 6}
          title={data?.authorTitle || ''}
          name={data?.authorName || ''}
          state={state}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ArticleCard;
