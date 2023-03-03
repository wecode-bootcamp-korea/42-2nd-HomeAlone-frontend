import styled from 'styled-components';
import { flex } from '../../../styles/mixin';
import { Link } from 'react-router-dom';

export const ListAllWrap = styled.div`
  ${flex('space-between', null, null)}
  margin-top: 50px;
  flex-wrap: wrap;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 700;
`;

export const ListWrap = styled.div`
  ${flex(null, 'center', 'column')}
  border-radius: 3px;
  width: 30%;
  margin-bottom: 30px;
  text-align: center;
  line-height: 1.5;
`;

export const ListImg = styled.img`
  border-radius: 6px;
  width: 110%;
  height: 250px;
`;

export const UserInfo = styled.div`
  ${flex('center', null, null)}
  font-weight: 350;
  color: #424242;
`;

export const UserImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 70%;
  margin-right: 5px;
  overflow: hidden;
`;

export const PostInfo = styled.div`
  font-weight: 350;
  color: #757575;
`;

export const PageBtnWrap = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 40px;
`;

export const PageBtn = styled.button`
  border: solid 1px white;
  background-color: white;
  font-size: larger;
  color: #757575;
  cursor: pointer;
`;
