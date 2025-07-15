import React, { useState, ReactElement } from 'react';

import debounce from 'lodash/debounce';

import {
  TextInput as TextInputShadowed,
  View,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native';

import { Color, Size, Opacity } from '../../styles/theme';

import { IButton } from '../Button';

import Text, {
  TextType,
  FontFamily,
  FontSize,
} from '../Text';

import Icon, { IconId } from '../Icon';

export enum TextInputValidationScheme {
  None = '',
  NotEmpty = 'This field cannot be left blank.',
  Email = 'Invalid email address.',
  PhoneNumber = 'Invalid phone number',
  Password = 'Password is too weak. Use at least 8 characters.'
}

const validate = (s: string, scheme: TextInputValidationScheme): boolean => {
  switch (scheme) {
    case TextInputValidationScheme.None:
      return true;

    case TextInputValidationScheme.NotEmpty:
      return s.length > 0;

    case TextInputValidationScheme.Email:
      return /^\S+@\S+\.\S+$/.test(s);

    case TextInputValidationScheme.Password:
      return s.length > 7;

    default:
      return true;
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: Size.BaseUnit * 5.5,
    borderBottomWidth: 1,
    borderBottomColor: Color.WhiteSmoke,
  },

  textInput: {
    fontFamily: FontFamily.Paragraph,
    fontSize: FontSize.Paragraph,
  },

  containerError: {
    // backgroundColor: Color.Primary10,
    borderBottomColor: Color.Primary,
  },

  labelContainer: {
    marginRight: Size.BaseUnit * 2
  },

  textInputContainer: {
    flexGrow: 1,
  },

  contentEndContainer: {
    flexDirection: 'row',
  },

  errorContainer: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-start',
    height: Size.BaseUnit * 3,
  },
});

export interface ITextInput {
  /**
   * Shadowed TextInput onChange event.
   *
   * This function allows for checking validation on consumption by
   * passing internal state "isValid" and errors: "errorText" as parameters.
   */
  onChange?: (text: string, isValid: boolean, errorText: string) => void,

  /**
   * Enable password mode.
   */
  secureTextEntry?: boolean;

  /**
   * Custom action at flex-end of the TextInput.
   */
  actionButton?: ReactElement<IButton>;

  /**
   * Set schema for validating input.
   */
  validationScheme: TextInputValidationScheme,

  /**
   * Shadowed KeyboardTypeOptions.
   */
  keyboardType: KeyboardTypeOptions,

  /**
   * Label string.
   */
  label: string;

  /**
   * Color of the text
   */
  color: Color;

  placeholderTextColor: Color,

  /**
   * Bottom border color
   */
  borderColor: Color;

  /**
   * Placeholder string.
   */
  placeholder?: string;

  /**
   * Override error text. Takes precedence over internal validation messages.
   */
  errorTextOverride?: string;

  disabled?: boolean;
}

const TextInput = ({
  onChange,
  actionButton,
  secureTextEntry,
  validationScheme,
  keyboardType,
  label,
  color,
  placeholderTextColor,
  borderColor,
  placeholder = '',
  errorTextOverride = undefined,
  disabled = false,
}: ITextInput) => {
  const [isValid, setIsValid] = useState(true);
  const [hasInput, setHasInput] = useState(false);

  const onChangeText = (text: string) => {
    if (onChange) onChange(text, isValid, validationScheme);

    setHasInput(text.length > 0);

    setIsValid(validate(text, validationScheme));
  };

  let containerStyle: any = StyleSheet.flatten([styles.container, { borderBottomColor: borderColor }]);

  if (!isValid || errorTextOverride) {
    containerStyle = StyleSheet.flatten([containerStyle, styles.containerError]);
  }

  if (disabled) containerStyle = StyleSheet.flatten([containerStyle, { opacity: Opacity.Translucent }]);

  return (
    <>
      <View style={containerStyle}>
        <View style={styles.labelContainer}>
          <Text
            type={TextType.Caption}
            colorForeground={
              !isValid || errorTextOverride
                ? Color.Primary
                : color
            }
          >
            {label}
          </Text>
        </View>

        <View style={styles.textInputContainer}>
          <TextInputShadowed
            style={[styles.textInput, { color }]}
            keyboardAppearance="dark"
            onChangeText={debounce(onChangeText, 600)}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCapitalize={validationScheme === TextInputValidationScheme.Email ? 'none' : 'sentences'}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            selectionColor={Color.LightGrey}
            editable={!disabled}
          />
        </View>

        <View style={styles.contentEndContainer}>
          <>
            {!isValid || errorTextOverride ? (
              <Icon id={IconId.X} color={Color.Primary} />
            ) : (
              hasInput && (
                <Icon id={IconId.Check} color={Color.Green} />
              )
            )}

            {actionButton && actionButton}
          </>
        </View>
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

        {!isValid && !errorTextOverride && (
          <Text
            type={TextType.Caption}
            colorForeground={Color.Primary}
          >
            {validationScheme}
          </Text>
        )}
      </View>
    </>
  );
};

export default TextInput;
