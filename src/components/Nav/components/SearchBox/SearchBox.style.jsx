import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { linkStyle } from '../../../../styles/mixin';
import { flex } from '../../../../styles/mixin';

export const SearchBoxWrapper = styled.div`
  position: fixed;
  width: 380px;
  top: 7%;
  left: 37%;
  margin-top: 5px;
  box-shadow: 2px 3px 5px 0px gray;
  background-color: white;
  z-index: 10;
  cursor: pointer;
`;

export const ToDetail = styled(Link)`
  ${linkStyle}
`;

export const List = styled.div`
  ${flex('space=between', 'center', null)}
  padding: 5px 10px;
  z-index: 1;
  gap: 10px;

  img {
    width: 40px;
    height: 40px;
  }
`;
