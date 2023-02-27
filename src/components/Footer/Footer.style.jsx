import styled from 'styled-components';
import { flex } from '../../styles/mixin';

const bgColor = '#f7f9fa';
const borderColor = '#eeeeee';

export const Footer = styled.div`
  ${flex('center', 'center', null)};
  position: relative;
  transform: translateY(-100%);
  width: 100vw;
  height: 200px;
  padding: 30px;
  background-color: ${bgColor};
`;

export const Service = styled.div`
  ${flex(null, null, 'column')};
  gap: 10px;
  border-right: 1px solid ${borderColor};
  padding-right: 70px;
  margin-right: 70px;

  button {
    padding: 10px;
    background-color: ${bgColor};
    border: 1px solid ${borderColor};
    border-radius: 4px;
    text-align: left;
  }
`;

export const Info = styled.div`
  ${flex(null, null, 'column')};
  gap: 10px;

  img {
    width: 200px;
    height: 40px;
  }
`;
