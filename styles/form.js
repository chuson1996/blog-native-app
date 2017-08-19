/**
 * Things related to form goes here.
 * 
 * Oops, forgot to import React here. Any place that has jsx syntax should have React import.
 */
import React from 'react';
import styled, { css } from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';
import { blue } from './variables'

export const TextInput = styled.TextInput`
  padding-vertical: 5px;
`;

/**
 * Form fields should have spaces in between, about 24px height.
 */
export const FormControl = styled.View`
  margin-bottom: 24px;
`;
// This should do it.

// Oh i know why. I need to pass the rest of the props down to ButtonWrapper.
// It worked!

const ButtonWrapper = styled.View`
  padding-vertical: 20px;
  flex-direction: column;
  align-items: center;
  border-radius: 100px;
  ${({ info }) => info && css`
    background-color: ${blue};
  `}
`;
const ButtonText = styled.Text`
  color: white;
`;
export const Button = ({ title, onPress, ...rest }) => (
  <TouchableOpacity onPress={onPress}>
    <ButtonWrapper {...rest}>
      <ButtonText>{title}</ButtonText>
    </ButtonWrapper>
  </TouchableOpacity>
);