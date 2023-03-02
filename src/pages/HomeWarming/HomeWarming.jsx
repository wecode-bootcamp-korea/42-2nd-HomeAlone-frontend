import React from 'react';
import * as S from './HomeWarming.Style';
import Comment from './Comment/Comment';
import SideBar from './SideBar/SideBar';

export default function HomeWarming() {
  return (
    <div>
      <S.TitleImg src="/images/HomeWarming/room.jpg" alt="title img" />
      <S.MainTextWrap>
        <SideBar />
        <S.TitleWrap>
          <S.CategoryTitle>온라인 집들이</S.CategoryTitle>
          <S.Title>포근한 집을 소개합니다.</S.Title>
          <S.UserInfoWrap>
            <S.UserImg src="/images/HomeWarming/userImg.png" alt="userimg" />
            <S.UserId>user1</S.UserId>
          </S.UserInfoWrap>
        </S.TitleWrap>
        <S.HomeImg src="/images/HomeWarming/room.jpg" alt="home img" />
        <S.Explanation>
          아직 입주한 지 이제 1달 정도 밖에 안되어서 많이 부족하지만, 예쁘게
          봐주시면 감사하겠습니다 :)
        </S.Explanation>
        <S.UserCard>
          <S.UserImg src="/images/HomeWarming/userImg.png" alt="userimg" />
          <S.TextWrap>
            <S.UserName>user1</S.UserName>
            <p>안녕하세요!</p>
          </S.TextWrap>
        </S.UserCard>
        <Comment />
      </S.MainTextWrap>
    </div>
  );
}
