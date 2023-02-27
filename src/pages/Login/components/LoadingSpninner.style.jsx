import styled from 'styled-components';
import { flex } from '../../../styles/mixin';

export const Spinner = styled.div`
  ${flex('center', 'center', 'column')}
  height: 100vh;
`;

export const LodingText = styled.span`
  padding: 20px;
`;
