import React, { useState, useEffect } from 'react';
import { API } from '../../config/config';
import * as S from './Main.style';

export default function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${API.POSTS}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setPosts(data.data));
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevBtn />,
    nextArrow: <NextBtn />,
  };

  return (
    <S.Main>
      <S.ToHomeWarming to="/home-warming/1">
        {posts[0] && (
          <S.MainHome>
            <S.MainTitle>{posts[0].title}</S.MainTitle>
            <S.MainImg src={posts[0].imageUrl} alt="Room Img" />
          </S.MainHome>
        )}
      </S.ToHomeWarming>
      <S.RoomTitle>온라인 집들이🏠</S.RoomTitle>
      <S.RoomWrapper>
        {posts && (
          <S.RoomBox {...settings}>
            {posts.map(({ id, imageUrl, roomStyle, title }) => {
              return (
                <S.ToHomeWarming key={id} to={`/home-warming/${id}`}>
                  <S.RoomItem>
                    <img src={imageUrl} alt="Room Img" />
                    <p>
                      <S.RoomStyle>{roomStyle} </S.RoomStyle>
                      {title}
                    </p>
                  </S.RoomItem>
                </S.ToHomeWarming>
              );
            })}
          </S.RoomBox>
        )}
      </S.RoomWrapper>
    </S.Main>
  );
}

function PrevBtn(props) {
  const { onClick } = props;
  return <S.PrevBtn onClick={onClick}>{'<'}</S.PrevBtn>;
}

function NextBtn(props) {
  const { onClick } = props;
  return <S.NextBtn onClick={onClick}>{'>'}</S.NextBtn>;
}
