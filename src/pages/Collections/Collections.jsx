import React, { useEffect, useState } from 'react';
import * as S from './Collections.style';

export default function Collections() {
  const [houseDataList, setHouseDataList] = useState([]);

  //TOFIX: mockData 연결 시 동작할 코드
  useEffect(() => {
    fetch('/data/houseWarming.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setHouseDataList(data.data);
      });
  }, []);

  return (
    <S.Main>
      <S.CollectionsMain>
        <div>
          <S.Title>스크랩 북</S.Title>
          <S.Profile>
            <S.ProfileImg
              src="https://cdn-icons-png.flaticon.com/512/3746/3746927.png"
              alt="profileImg"
            />
            <S.NicKName>hahahoho</S.NicKName>
          </S.Profile>
        </div>
        <S.HouseContentsBox>
          <S.ContentTitle>집들이({houseDataList.length})</S.ContentTitle>
          <S.ContentsBox>
            {houseDataList.length === 0 ? (
              <>
                <S.HeadContent>아직 스크랩한 콘텐츠가 없습니다.</S.HeadContent>
                <S.Content>
                  마음에 드는 콘텐츠를 발견하면 스크랩해보세요
                </S.Content>
              </>
            ) : (
              <S.HouseWarmingBox>
                {houseDataList.map(({ id, imageUrl }) => {
                  return (
                    <S.HouseWarmingLink to="/detail" key={id}>
                      <S.HouseWarmimgImg
                        src={imageUrl}
                        alt="houseWarmingCollection"
                      />
                      <S.HouseWarmingTitle>집들이</S.HouseWarmingTitle>
                    </S.HouseWarmingLink>
                  );
                })}
              </S.HouseWarmingBox>
            )}
          </S.ContentsBox>
        </S.HouseContentsBox>
      </S.CollectionsMain>
    </S.Main>
  );
}
