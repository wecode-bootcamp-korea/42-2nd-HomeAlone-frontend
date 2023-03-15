import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { flex } from '../../styles/mixin';

export const Nav = styled.nav`
  ${flex('space-between', 'center', null)}
  position: fixed;
  padding: 45px 120px;
  width: 100vw;
  height: 70px;
  background-color: white;
  border-bottom: 1px solid #eeeeee;
  z-index: 5;

  @media screen and (max-width: 770px) {
    ${flex('center', 'center', null)}
  }
`;

export const MenuBox = styled.div`
  ${flex('space-around', 'center', null)}
  gap: 20px;
`;

export const Menu = styled.div`
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 110px;
  height: 90px;
  cursor: pointer;
`;

export const MenuBtn = styled.button`
  background-color: white;
  border-style: none;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: ${theme.mainBlue};
  }
`;

export const IconBox = styled.div`
  ${flex('space-around', 'center', null)}
  gap: 20px;

  @media screen and (max-width: 770px) {
    display: none;
  }
`;

export const MemberBox = styled.div`
  ${flex('center', 'center', null)}
  position: relative;
  gap: 10px;
  padding: 10px;
  border: 1px solid #eeeeee;
  border-radius: 30px;
`;

export const MenuImg = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const IconImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Logout = styled.div`
  ${flex('flex-end', 'flex-end', 'column')}
  position: absolute;
  right: 12%;
  padding: 10px;
  margin-top: 5px;
  background-color: white;
  border: 1px solid #eeeeee;
  border-radius: 10px;
`;

export const LinkBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const LinkItem = styled(Link)`
  color: gray;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
`;

export const Split = styled.span`
  color: gray;
  font-size: 15px;
`;

export const Btn = styled.button`
  padding: 10px 15px;
  background-color: ${theme.mainBlue};
  border-style: none;
  border-radius: 4px;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;
