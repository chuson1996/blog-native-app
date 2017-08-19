/**
 * All components related to grid will be here: Container, Row, Column, Absolute View, ...
 */
import styled from 'styled-components/native';
import { backgroundColor } from './variables'

// Let's give our container some padding
export const Container = styled.View`
  flex: 1;
  padding-top: 10px;
  padding-horizontal: 15px;
  background-color: ${backgroundColor};
`;
