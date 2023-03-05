import styled from 'styled-components';
import { flex } from '../../../styles/mixin';

export const SearchedItem = styled.li`
  ${flex('space-between', 'center', null)}
  position: absolute;
  top: 30px;
  left: -39px;
  width: 375px;
  height: 70px;
  padding: 5px 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: white;
`;
export const ItemBox = styled.div`
  ${flex(null, 'center', null)}
  gap: 10px;
`;
export const ItemImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 22px;
`;
