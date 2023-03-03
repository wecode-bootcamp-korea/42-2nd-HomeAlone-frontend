import styled from 'styled-components';
import { flex } from '../../styles/mixin';
import { Link } from 'react-router-dom';

export const ListAllWrap = styled.div`
  ${flex('space-between', null, null)}
  margin-top: 50px;
  flex-wrap: wrap;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
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
`;

export const UserImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 70%;
  margin-right: 5px;
  overflow: hidden;
`;
