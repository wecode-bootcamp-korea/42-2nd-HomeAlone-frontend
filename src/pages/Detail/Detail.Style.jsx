import styled from 'styled-components';
import { flex } from '../../styles/mixin';

export const AllWrap = styled.div`
  ${flex('center', null, null)}
  height: auto;
  min-height: 100%;
  padding-bottom: 250px;
`;

export const DetailAllWrap = styled.div`
  ${flex(null, null, 'column')}
  width: 1000px;
  margin-top: 140px;
  margin-bottom: 120px;
`;

export const ProductWrap = styled.div`
  ${flex('center', null, null)}
  width: 100%;
`;

export const ProductImgWrap = styled.div`
  display: flex;
  width: 50%;
  height: 500px;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const ReviewWrap = styled.div`
  width: 100%;
  margin-top: 50px;
`;
