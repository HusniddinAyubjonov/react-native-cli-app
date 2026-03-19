import React from 'react';
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from 'react-native';
import { buttonComponentStyles } from './button-style';

type ButtonVariant = 'primary' | 'danger';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const buttonStyleByVariant: Record<ButtonVariant, ViewStyle> = {
  primary: buttonComponentStyles.primaryButton,
  danger: buttonComponentStyles.dangerButton,
};

export function Button({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  style,
  textStyle,
}: ButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[
        buttonComponentStyles.button,
        buttonStyleByVariant[variant],
        disabled ? buttonComponentStyles.disabledButton : null,
        style,
      ]}
    >
      <Text style={[buttonComponentStyles.buttonText, textStyle]}>{title}</Text>
    </Pressable>
  );
}
