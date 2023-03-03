import styled from 'styled-components';
import { flex } from '../../../styles/mixin';

export const ReviewTitleWrap = styled.div`
  ${flex('flex-start', 'center', null)}
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: solid 1px #dbdbdb;
  padding-bottom: 10px;
`;

export const Title = styled.p`
  margin-right: 10px;
  font-size: 20px;
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

export const Average = styled.p`
  margin-right: 5px;
  color: #757575;
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
