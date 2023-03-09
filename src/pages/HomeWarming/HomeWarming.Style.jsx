import styled from 'styled-components';
import { flex } from '../../styles/mixin';
import theme from '../../styles/theme';

export const TitleImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 600px;
  margin-top: 91px;
`;

export const MainTextWrap = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding: 0 16px;
  box-sizing: border-box;
`;

export const TitleWrap = styled.div`
  margin-top: 70px;
`;

export const CategoryTitle = styled.p`
  color: #656e75;
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 600;
`;

export const UserInfoWrap = styled.div`
  ${flex(null, 'center', null)}
  align-items: center;
  margin-bottom: 50px;
`;

export const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
`;

export const UserId = styled.div`
  font-weight: 900;
  margin-left: 10px;
`;

export const HomeImg = styled.img`
  position: relative;
  width: 100%;
`;

export const Explanation = styled.p`
  line-height: 2;
`;

export const UserCard = styled.div`
  display: flex;
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 2px solid #ededed;
  margin-top: 20px;
`;

export const TextWrap = styled.div`
  ${flex('space-around', null, 'column')}
  align-content: center;
  margin-left: 20px;
`;

export const UserName = styled.p`
  font-weight: 700;
`;

export const MarkerBox = styled.div`
  ${flex(null, 'center', 'column')}
  position: absolute;
  top: ${({ pixelColumn }) => pixelColumn}px;
  left: ${({ pixelRow }) => pixelRow}px;
  transform: translate(2000%, 5000%);
  gap: 10px;
  z-index: 3;
`;

export const PlusBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: ${theme.mainBlue};
  border-style: none;
  border-radius: 50%;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;
