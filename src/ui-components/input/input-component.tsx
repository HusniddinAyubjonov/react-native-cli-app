import React from 'react';
import { Text, TextInput, TextInputProps } from 'react-native';
import { formInputStyles } from './input-styles';

type FormInputProps = TextInputProps & {
  label?: string;
};

export function Input({
  label,
  placeholderTextColor = '#94a3b8',
  ...textInputProps
}: FormInputProps) {
  return (
    <>
      {label ? <Text style={formInputStyles.label}>{label}</Text> : null}
      <TextInput
        placeholderTextColor={placeholderTextColor}
        style={formInputStyles.input}
        {...textInputProps}
      />
    </>
  );
}
