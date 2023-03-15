import styled from 'styled-components';
import { flex } from '../../../styles/mixin';

export const ReviewWrap = styled.div`
  border-bottom: solid 1px #dbdbdb;
  padding-bottom: 30px;
  margin-bottom: 30px;
`;

export const ReviewDetail = styled.div`
  border-bottom: solid 1px #dbdbdb;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

export const UserInfo = styled.div`
  ${flex(null, 'center', null)}
  margin-bottom: 20px;
`;

export const UserImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 70%;
  overflow: hidden;
  margin-right: 5px;
`;

export const UserName = styled.p`
  margin-right: 5px;
`;

export const ScoreTitle = styled.p`
  margin-right: 5px;
`;

export const Score = styled.p`
  color: #35c5f0;
`;

export const ProductName = styled.p`
  margin-bottom: 10px;
  color: #757575;
`;

export const ProductImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const ReviewText = styled.p`
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const SuggestionBtn = styled.button`
  background-color: white;
  width: 114px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #35c5f0;
  color: #35c5f0;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;
