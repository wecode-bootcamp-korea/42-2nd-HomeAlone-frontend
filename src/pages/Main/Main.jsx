import React, { useState, useEffect } from 'react';
import * as S from './Main.style';

export default function Main() {
  const [posts, setPosts] = useState([]);

  //TODO: mock 데이터 연결
  useEffect(() => {
    fetch('/data/posts.json')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <S.Main>
      <S.MainHome>
        <S.MainImg src="/images/main/mainRoom.jpg" alt="Main Room Img" />
        <S.MainTitle>
          공간을 가꾸며 나를 가꿔요, 포근한 8평의 기록 🤍
        </S.MainTitle>
      </S.MainHome>
      <S.RoomTitle>온라인 집들이🏠</S.RoomTitle>
      <S.RoomWrapper>
        <S.PrevBtn>
          <span>{'<'}</span>
        </S.PrevBtn>
        <S.RoomBox>
          {posts.map(post => {
            return (
              <S.RoomList key={post.id}>
                <img src={post.imageUrl} alt="Room Img" />
                <p>
                  <S.RoomStyle>{post.roomStyle} </S.RoomStyle>
                  {post.title}
                </p>
              </S.RoomList>
            );
          })}
        </S.RoomBox>
        <S.NextBtn>
          <span>{'>'}</span>
        </S.NextBtn>
      </S.RoomWrapper>
    </S.Main>
  );
}
