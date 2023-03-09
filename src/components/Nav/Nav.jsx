import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from './components/Search/Search';
import * as S from './Nav.style';

export default function Nav() {
  const Token = localStorage.getItem('token');
  const navigate = useNavigate();

  const toPosting = () => {
    if (!Token) {
      alert('로그인이 필요한 서비스입니다. \n로그인하시겠습니까?');
      navigate('/login');
    } else if (Token) {
      navigate('/posting');
    }
  };

  const toLogout = () => {
    alert('로그아웃하시겠습니까?');
    localStorage.removeItem('token');
  };

  return (
    <S.Nav>
      <S.MenuBox>
        <Link to="/">
          <S.Logo src="images/nav/logo.png" alt="Logo Img" />
        </Link>
        <S.Menu>
          <Link to="/home-warming-list">
            <S.MenuBtn>커뮤니티</S.MenuBtn>
          </Link>
          <S.MenuBtn>쇼핑</S.MenuBtn>
        </S.Menu>
      </S.MenuBox>
      <Search />
      <S.IconBox>
        <Link to="/collections">
          <S.IconImg src="images/nav/scrap.png" alt="Scrap Img" />
        </Link>
        <Link to="/cart">
          <S.IconImg src="images/nav/cart.png" alt="Cart Img" />
        </Link>

        {Token ? (
          <>
            <S.MemberBox onClick={toLogout}>
              <S.MenuImg src="images/nav/menu.png" alt="Menu Img" />
              <S.IconImg src="images/nav/profile.png" alt="Profile Img" />
            </S.MemberBox>
            <S.Btn onClick={toPosting}>글쓰기</S.Btn>
          </>
        ) : (
          <>
            <S.LinkBox>
              <S.LinkItem to="/login">로그인</S.LinkItem>
              <S.Split> | </S.Split>
              <S.LinkItem to="/signup">회원가입</S.LinkItem>
            </S.LinkBox>
            <S.Btn onClick={toPosting}>글쓰기</S.Btn>
          </>
        )}
      </S.IconBox>
    </S.Nav>
  );
}
