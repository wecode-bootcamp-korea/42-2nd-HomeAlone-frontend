import styled from 'styled-components';
import theme from '../../styles/theme';
import { flex } from '../../styles/mixin';
import { carouselBtn } from '../../styles/mixin';

export const Main = styled.main`
  ${flex('center', 'center', 'column')}
  height: auto;
  min-height: 100%;
  padding-top: 150px;
  padding-bottom: 250px;
`;

export const MainHome = styled.div`
  ${flex('center', 'center', null)}
  position: relative;
`;

export const MainTitle = styled.h1`
  position: absolute;
  top: 75%;
  left: 4%;
  color: white;
  font-size: 27px;
  font-weight: 600;
`;

export const MainImg = styled.img`
  width: 850px;
  height: 510px;
  margin-bottom: 100px;
  border-radius: 5px;
`;

export const RoomTitle = styled.p`
  width: 1100px;
  font-size: 20px;
  font-weight: 600;
  padding: 10px 10px 20px 10px;
`;

export const RoomWrapper = styled.div`
  ${flex('center', 'center', null)}
  position: relative;
  width: 1200px;
  overflow: hidden;
`;

export const PrevBtn = styled.button`
  ${carouselBtn}
  left: 2%;
`;

export const NextBtn = styled.button`
  ${carouselBtn}
  right: 2%;
`;

export const RoomBox = styled.div`
  display: flex;
  width: 1100px;
  gap: 20px;
  transition: all 0.5s ease-in-out;
  overflow: hidden;
`;

export const RoomList = styled.div`
  width: 260px;
  height: 240px;

  img {
    width: 260px;
    height: 200px;
    border-radius: 5px;
  }
`;

export const RoomStyle = styled.span`
  color: ${theme.mainBlue};
  font-weight: 600;
`;
