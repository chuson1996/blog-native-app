import styled from 'styled-components/native';
import { Text, Container } from '../../styles';

// You can inherit styled components like so. It keeps all the props of the parent component.
export const Title = styled(Text)`
  margin-bottom: 56px;
`;

export const LoginWrapper = styled(Container)`
  padding-horizontal: 57px;
  padding-top: 77px;
`;

export const FormContainer = styled.View`
  margin-bottom: 50px;
`;
