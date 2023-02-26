import React from 'react';
import * as S from './HomeWarmingList.Style';
import Filter from './Filter/Filter';
import List from './List';

export default function HomeWarmingList() {
  return (
    <S.AllWrap>
      <S.HomeWarmingListWrap>
        <Filter />
        <div>
          <List />
        </div>
      </S.HomeWarmingListWrap>
    </S.AllWrap>
  );
}
