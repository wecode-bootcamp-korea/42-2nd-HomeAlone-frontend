import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Filter from '../Filter/Filter';
import { API } from '../../../config/config';
import * as S from './List.Style';

export default function List() {
  const [list, setList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const category = location.search;

  console.log(list);

  const page = searchParams.get('page');
  const perPage = searchParams.get('perPage');

  useEffect(() => {
    fetch(`${API.POSTS}${location.search}&page=${page}&perPage=${perPage}`, {
      method: 'GET',
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setList(data.data);
      });
  }, [page, perPage]);

  const movePage = pageNumber => {
    searchParams.set('page', pageNumber);
    setSearchParams(searchParams);
  };

  return (
    <>
      <Filter searchParams={searchParams} setSearchParams={setSearchParams} />
      <S.ListAllWrap>
        {list.map(item => {
          return (
            <S.ListWrap key={item.id}>
              <S.StyledLink to={`/home-warming/${item.id}`}>
                <S.ListImg src={item.imageUrl} alt="homeimg" />
                <div>{item.title}</div>
                <S.UserInfo>
                  <S.UserImg src={item.profileImage} alt="userImg" />
                  <div>{item.nickname}</div>
                </S.UserInfo>
                <S.PostInfo>
                  스크랩{item.scrapCount}.댓글수{item.commentCount}
                </S.PostInfo>
              </S.StyledLink>
            </S.ListWrap>
          );
        })}
      </S.ListAllWrap>
      <S.PageBtnWrap>
        <S.PageBtn onClick={() => movePage(1)}>1.</S.PageBtn>
        <S.PageBtn onClick={() => movePage(2)}>2.</S.PageBtn>
        <S.PageBtn onClick={() => movePage(3)}>3.</S.PageBtn>
      </S.PageBtnWrap>
    </>
  );
}
