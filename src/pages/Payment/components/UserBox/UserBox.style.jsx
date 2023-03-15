import styled from 'styled-components';
import { flex } from '../../../../styles/mixin';

const paymentColor = '#a4acb3';

export const InputBox = styled.div`
  ${flex(null, 'center', null)}
`;

export const UserLabel = styled.div`
  width: 100px;
  padding: 15px;
  color: ${paymentColor};
  font-weight: 400;
`;

export const UserInput = styled.input`
  width: 270px;
  padding: 10px;
  background-color: #fafafa;
  border: 1px solid ${paymentColor};
  border-radius: 4px;
  outline-style: none;
`;
