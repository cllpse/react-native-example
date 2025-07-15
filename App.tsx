import React, { useState } from 'react';

import { GestureResponderEvent } from 'react-native';

import { useFonts } from 'expo-font';

import { Color } from './components/styles/theme';

import Text, { TextType, TextStyle, TextDecorationLine, TextAlign } from './components/atoms/Text';
import Button, { ButtonType } from './components/atoms/Button';
import TextInput, { TextInputValidationScheme } from './components/atoms/TextInput';
import { PickerOverlay, PickerButton } from './components/molecules/Picker';
import Icon, { IconId } from './components/atoms/Icon';
import Switch from './components/atoms/Switch';
import Overlay from './components/molecules/Overlay';
import Device, { DeviceType, DeviceStatus } from './components/molecules/Device';

import Composition, {
  BackgroundColor,
  BackgroundSoundklub,
  BackgroundText,
  BackgroundOhno,
  LayoutXCenterYCenter,
  LayoutXCenterYCenterScroll,
  Spacer,
  SpacerSize,
  BackgroundCard,
} from './components/molecules/Composition';

import Drawer, { ButtonDevice } from './components/molecules/Drawer';

const Soundklub = () => {
  const [switchValue, setSwitchValue] = useState(false);
  const [pickerValue, setPickerValue] = useState('Value One');
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);

  const onPress = (event: GestureResponderEvent) => {
    console.log(event);

    setIsOverlayVisible(!isOverlayVisible);
  };

  const onDismiss = (value: string) => {
    setPickerValue(value);

    setIsPickerOverlayVisible(!isPickerOverlayVisible);
  };

  const [fontsLoaded] = useFonts({
    'GTAmerica-Bold': require('./assets/GT-America-Bold.otf'),
    'GTAmerica-CompressedBold': require('./assets/GT-America-Compressed-Bold.otf'),
    'Inter-Black': require('./assets/GT-America-Extended-Bold.otf'),
    'GTAmerica-Regular': require('./assets/GT-America-Regular.otf'),
    'GTAmerica-ExtendedBold': require('./assets/GT-America-Bold.otf')
  });

  if (!fontsLoaded) {
    return (<></>);
  }

  return (
    <>
      <Composition
        useSafeAreaView
        explodeHeight
      >
        <BackgroundColor color={Color.White} />

        {/* <BackgroundSoundklub color={Color.Black} /> */}

        {/* <BackgroundText
          text={`NO DEVICES\nREGISTERED\nYET`}
          colorBackground={Color.White}
          colorForeground={Color.WhiteSmoke}
        /> */}

        <BackgroundOhno
          text={`Oh no!\nSomething happened!`}
          colorBackground={Color.DarkGrey}
          colorTextForeground={Color.White}
          colorTextBackground={Color.Primary}
        />

        <LayoutXCenterYCenterScroll>
          <Spacer size={SpacerSize.LargeVertical} />

          <Spacer size={SpacerSize.LargeVertical} />

          <Button
            onPress={onPress}
            type={ButtonType.Solid}
            colorBackground={Color.FacebookBlue}
            colorForeground={Color.White}
            title="continue with Facebook"
            icon={(
              <Icon
                id={IconId.Facebook}
                color={Color.White}
              />
            )}
          />

          <Spacer size={SpacerSize.SmallVertical} />

          <Button
            onPress={onPress}
            type={ButtonType.Solid}
            colorBackground={Color.WhiteSmoke}
            colorForeground={Color.Black}
            title="continue with Google"
            icon={(
              <Icon
                id={IconId.Google}
                color={Color.White}
              />
            )}
          />

          <Spacer size={SpacerSize.SmallVertical} />

          <Button
            type={ButtonType.Solid}
            onPress={onPress}
            colorBackground={Color.Black}
            colorForeground={Color.White}
            title="continue with email and password"
          />

          <Spacer size={SpacerSize.SmallVertical} />

          <Button
            onPress={onPress}
            type={ButtonType.Naked}
            title="or create an account"
            colorForeground={Color.DarkGrey}
          />

          <Spacer size={SpacerSize.LargeVertical} />

          <PickerButton
            onPress={() => { setIsPickerOverlayVisible(!isPickerOverlayVisible) }}
            selectedValue={pickerValue}
            hasFocus={isPickerOverlayVisible}
            label="value"
            color={Color.DarkGrey}
            borderColor={Color.LightGrey}
          />

          <Spacer size={SpacerSize.SmallVertical} />

          <TextInput
            validationScheme={TextInputValidationScheme.Email}
            placeholderTextColor={Color.LightGrey}
            keyboardType="email-address"
            label="email"
            placeholder="you@gmail.com"
            color={Color.Black}
            borderColor={Color.LightGrey}
          />

          <Spacer size={SpacerSize.SmallVertical} />

          <TextInput
            placeholderTextColor={Color.LightGrey}
            secureTextEntry
            keyboardType="default"
            validationScheme={TextInputValidationScheme.Password}
            label="password"
            placeholder="secret"
            color={Color.Black}
            borderColor={Color.LightGrey}
            actionButton={
              <Button
                onPress={onPress}
                type={ButtonType.Solid}
                colorBackground={Color.Transparent}
                omitShadow
                icon={
                  <Icon
                    id={IconId.Camera}
                    color={Color.DarkGrey}
                  />
                }
              />
            }
          />

          <Spacer size={SpacerSize.SmallVertical} />

          <Switch
            onValueChanged={(v) => { setSwitchValue(v); }}
            value={switchValue}
            label={`By checking this box you accept\nour Terms of Service.`}
          />

          <Spacer size={SpacerSize.MediumVertical} />

          <Text
            type={TextType.Paragraph}
            textDecorationLine={TextDecorationLine.None}
            textStyle={TextStyle.Italic}
            colorForeground={Color.LightGrey}
          >
            By creating an account on SOUNDKLUB, SOUNDBOKS ApS are owed half of your salary
            from this day forth, and in perpetuity. ***
          </Text>

          <Spacer size={SpacerSize.LargeVertical} />

          <Spacer size={SpacerSize.LargeVertical} />

          <Composition>
            <BackgroundCard color={Color.White} />

            <LayoutXCenterYCenter>
              <Device
                color={Color.DarkGrey}
                type={DeviceType.NewSoundboks}
                status={DeviceStatus.Error}
                teamId="#214566"
              />

              <Spacer size={SpacerSize.MediumVertical} />

              <Button
                onPress={onPress}
                type={ButtonType.Solid}
                title="lock"
                colorForeground={Color.White}
                colorBackground={Color.DarkGrey}
                textAlign={TextAlign.Start}
                icon={(
                  <Icon
                    id={IconId.Locked}
                    color={Color.White}
                  />
                )}
              />

              <Spacer size={SpacerSize.SmallVertical} />

              <Button
                onPress={onPress}
                type={ButtonType.Solid}
                title="transfer ownership"
                colorForeground={Color.White}
                colorBackground={Color.DarkGrey}
                textAlign={TextAlign.Start}
                icon={(
                  <Icon
                    id={IconId.Transfer}
                    color={Color.White}
                  />
                )}
              />

              <Spacer size={SpacerSize.SmallVertical} />

              <Button
                onPress={onPress}
                type={ButtonType.Solid}
                title="warranty"
                colorForeground={Color.White}
                colorBackground={Color.DarkGrey}
                textAlign={TextAlign.Start}
                disabled
                icon={(
                  <Icon
                    id={IconId.Warranty}
                    color={Color.White}
                  />
                )}
              />
            </LayoutXCenterYCenter>
          </Composition>

          <Spacer size={SpacerSize.LargeVertical} />

          <Spacer size={SpacerSize.LargeVertical} />
        </LayoutXCenterYCenterScroll>
      </Composition>

      <Drawer
        title="Connected to SOUNDBOKS #125099"
      >
        <ButtonDevice onPress={onPress} title="#101010" />
        <ButtonDevice onPress={onPress} title="#501000" />
        <ButtonDevice onPress={onPress} title="#171400" />
        <ButtonDevice onPress={onPress} title="#303010" />
        <ButtonDevice onPress={onPress} title="#303010" />
        <ButtonDevice onPress={onPress} title="#303010" />
      </Drawer>

      <PickerOverlay
        onDismiss={onDismiss}
        selectedValue={pickerValue}
        isVisible={isPickerOverlayVisible}
        title="Choose a value"
        data={[
          { label: 'Label One', value: 'Value One' },
          { label: 'Label Two', value: 'Value Two' },
          { label: 'Label Three', value: 'Value Three' },
          { label: 'Label Four', value: 'Value Four' },
          { label: 'Label Five', value: 'Value Five' }
        ]}
      />

      <Overlay
        onDismiss={() => { setIsOverlayVisible(false); }}
        isVisible={isOverlayVisible}
        colorIcon={Color.White}
      >
        <Composition
          useSafeAreaView
          explodeHeight
        >
          <BackgroundColor color={Color.Primary} />

          <BackgroundSoundklub color={Color.White} />

          <LayoutXCenterYCenter>
            <Text
              type={TextType.Heading}
              colorForeground={Color.White}
            >
              Overlay
            </Text>
          </LayoutXCenterYCenter>
        </Composition>
      </Overlay>
    </>
  );
};

export default Soundklub;
