import styled from 'styled-components';
import { flex } from '../../../styles/mixin';

export const SideButtonWrap = styled.aside`
  ${flex(null, null, 'column')}
  position: relative;
  height: 0px;
  top: 110px;
  text-align: center;
`;

export const Button = styled.div`
  position: sticky;
  position: absolute;
  left: 120%;
`;

export const BookMarkBtn = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 70px;
  border: solid #dadce0 1px;
  padding: 10px;
`;

export const BookMarkCount = styled.p`
  margin-bottom: 20px;
`;

export const CommentBtn = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 70px;
  border: solid #dadce0 1px;
  padding: 10px;
`;
