import styled from 'styled-components';
import { flex } from '../../styles/mixin';
import theme from '../../styles/theme';

export const PostingNav = styled.nav`
  ${flex('space-between', 'center', null)}
  width: 100vw;
  padding: 10px 120px;
`;

export const Logo = styled.img`
  width: 110px;
  height: 90px;
  cursor: pointer;
`;

export const PostingBtn = styled.button`
  padding: 11px 45px;
  width: 135px;
  height: 45px;
  background-color: ${theme.mainBlue};
  border-style: none;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;

export const PostingTitle = styled.div`
  padding: 15px 140px;
  border: 1px solid #eeeeee;
  font-weight: 600;
`;

export const Content = styled.div`
  ${flex('center', 'center', 'column')}
  gap: 20px;
  width: 100vw;
  padding: 10px 0px;
`;
