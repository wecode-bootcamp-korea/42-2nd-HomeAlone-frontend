import styled from 'styled-components';
import { flex } from '../../../../styles/mixin';

export const TotalPriceListBox = styled.div`
  width: 300px;
  padding: 10px;
  border: 1px solid #ededed;
  border-radius: 5px;
  background-color: #ffffff;
  font-size: 13px;
`;

export const TotalPriceList = styled.div`
  ${flex('space-between', null, null)}
  display: flex;
  padding: 10px;
`;

export const TotalPrice = styled.p`
  font-weight: bolder;
  font-size: 18px;
`;
