import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flex } from '../../styles/mixin';

const FontWeight = 'bolder';

export const Main = styled.div`
  ${flex(null, 'center', 'column')}
  padding-top: 140px;
`;

export const CollectionsMain = styled.main`
  ${flex(null, null, 'column')}
  width: 1000px;
`;

export const Title = styled.p`
  font-weight: ${FontWeight};
  font-size: 23px;
  padding-left: 20px;
`;

export const Profile = styled(Link)`
  ${flex(null, 'center', 'column')}
  text-decoration: none;
  color: #000000;
`;

export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const NicKName = styled.span`
  margin-top: 30px;
  font-size: 20px;
  font-weight: ${FontWeight};
`;

export const HouseContentsBox = styled.div`
  ${flex(null, 'center', 'column')}
  margin-top: 50px;
`;

export const ContentTitle = styled.p`
  padding: 8px;
  border-bottom: 2px solid #35c5f0;
  color: #35c5f0;
  font-weight: bolder;
  font-size: 18px;
`;

export const ContentsBox = styled.div`
  ${flex('center', 'center', 'column')}
  min-width: 850px;
  min-height: 600px;
  border-top: 1px solid #dadde0;
`;

export const HeadContent = styled.p`
  margin: 10px 0px 30px 0px;
  font-size: 25px;
`;

export const Content = styled.p`
  color: #828c94;
`;

export const HouseWarmingBox = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3%;
`;

export const HouseWarmingLink = styled(Link)`
  position: relative;
`;

export const HouseWarmimgImg = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 3px;

  &:hover {
    opacity: 0.8;
  }
`;

export const HouseWarmingTitle = styled.p`
  position: absolute;
  padding: 8px;
  top: 210px;
  right: 185px;
  font-size: 15px;
  font-weight: ${FontWeight};
  color: #ffffff;
  background-color: rgba(33, 38, 41, 0.8);
  border-radius: 4px;
`;
