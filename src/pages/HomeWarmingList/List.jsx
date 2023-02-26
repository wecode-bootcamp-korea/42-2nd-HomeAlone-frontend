import { useEffect, useState } from 'react';
import * as S from './List.Style';

export default function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('/data/HomeWarmingList.json')
      .then(response => response.json())
      .then(result => setList(result));
  }, []);

  return (
    <S.ListAllWrap>
      {list.map(list => {
        return (
          <S.ListWrap key={list.id}>
            <S.StyledLink to={`/home-warming/${list.id}`}>
              <S.ListImg src={list.roomImg} alt="homeimg" />
              <div>{list.title}</div>
              <S.UserInfo>
                <S.UserImg src={list.userImg} alt="userImg" />
                <div>{list.userId}</div>
              </S.UserInfo>
              <div>
                스크랩{list.scrap}.조회수{list.view}
              </div>
            </S.StyledLink>
          </S.ListWrap>
        );
      })}
    </S.ListAllWrap>
  );
}
