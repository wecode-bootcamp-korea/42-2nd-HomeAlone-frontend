import React from 'react';
import * as S from './HomeWarmingList.Style';
import List from './List/List';

export default function HomeWarmingList() {
  return (
    <S.AllWrap>
      <S.HomeWarmingListWrap>
        <div>
          <List />
        </div>
      </S.HomeWarmingListWrap>
    </S.AllWrap>
  );
}
