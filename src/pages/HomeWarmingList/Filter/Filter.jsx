import { useEffect, useState } from 'react';
import * as S from './Filter.Style';
import FilterModal from './FilterModal';

export default function Filter() {
  const [currentMenuId, setCurrentMenuId] = useState(0);
  const [filterList, setFilterList] = useState({});
  const [filter, getFilter] = useState({});

  useEffect(() => {
    setFilterList({ ...filterList, ...filter });
  }, [filter]);

  const removeFilter = id => {
    const delFilter = Object.values(filterList).filter(
      filter => filter.id !== id
    );

    setFilterList(delFilter);
  };

  const navOnMouseLeave = () => {
    setCurrentMenuId(0);
  };

  const navOnMouseEnter = id => {
    setCurrentMenuId(id);
  };

  return (
    <>
      <S.FilterWrap>
        {FILTER_LIST.map(({ title, id }, idx) => {
          return (
            <div
              key={id}
              onMouseEnter={() => {
                navOnMouseEnter(id);
              }}
              onMouseLeave={navOnMouseLeave}
            >
              <S.Category>
                {title}
                <S.DownArrow src="images/HomeWarmingList/down-arrow.png" />
              </S.Category>

              {currentMenuId === id && (
                <FilterModal
                  setCurrentMenuId={setCurrentMenuId}
                  currentMenuId={currentMenuId}
                  getFilter={getFilter}
                  idx={idx}
                />
              )}
            </div>
          );
        })}
      </S.FilterWrap>
      <S.AddFilterList>
        {Object.values(filterList).map(filter => (
          <S.AddedFilter
            onClick={() => removeFilter(filter.id)}
            key={filter.id}
          >
            {Object.values(filter)}
          </S.AddedFilter>
        ))}
      </S.AddFilterList>
    </>
  );
}

export const FILTER_LIST = [
  {
    id: 1,
    title: '정렬',
    category: [
      {
        id: 1,
        list: '최신순',
      },
      {
        id: 2,
        list: '인기순',
      },
    ],
  },
  {
    id: 2,
    title: '스타일',
    category: [
      {
        id: 1,
        list: '모던',
      },
      {
        id: 2,
        list: '빈티지&레트로',
      },
      {
        id: 3,
        list: '러블리&로맨틱',
      },
    ],
  },
];
