import styled from 'styled-components';
import { flex } from '../../../styles/mixin';

export const ReviewTitleWrap = styled.div`
  ${flex('space-between', 'center', null)}
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: solid 1px #dbdbdb;
  padding-bottom: 10px;
`;

export const ReviewCount = styled.div`
  ${flex('flex-start', 'center', null)}
`;

export const Title = styled.p`
  margin-right: 10px;
  font-size: 20px;
  margin-right: 10px;
`;

export const CountReview = styled.p`
  color: #009fcd;
  font-size: 20px;
  font-weight: 700;
`;

export const WriteReview = styled.button`
  border-style: none;
  color: #009fcd;
  background-color: white;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;

export const ReviewFilter = styled.p`
  display: flex;
  border-bottom: solid 1px #dbdbdb;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const Best = styled.p`
  margin-right: 10px;
  color: #757575;
  cursor: pointer;
`;

export const Recent = styled.p`
  margin-right: 5px;
  border-right: solid 1px #dbdbdb;
  padding-right: 5px;
  color: #757575;
  cursor: pointer;
`;

export const AverageTitle = styled.p`
  margin-right: 5px;
  color: #757575;
`;

export const Average = styled.p`
  color: #009fcd;
`;

export const ReviewDetail = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
`;
