/**
 * All things related to Text goes here
 */
import styled, { css } from 'styled-components/native';
import { h1FontSize, h2FontSize, h3FontSize, h4FontSize } from './variables'

export const Text = styled.Text`
  ${({ h1 }) => h1 && css`
    font-size: ${h1FontSize};
  `}
  ${({ h2 }) => h2 && css`
    font-size: ${h2FontSize};
  `}
  ${({ h3 }) => h3 && css`
    font-size: ${h3FontSize};
  `}
  ${({ h4 }) => h4 && css`
    font-size: ${h4FontSize};
  `}
`;
