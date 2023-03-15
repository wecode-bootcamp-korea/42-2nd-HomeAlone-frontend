import { useEffect, useState } from 'react';
import { FILTER_LIST } from './Filter';
import * as S from './FilterModal.Style';

export default function FilterModal({
  currentMenuId,
  setCurrentMenuId,
  setFilter,
  idx,
}) {
  const [detailItem, setDetailItem] = useState({
    [FILTER_LIST[idx].title]: '',
  });

  useEffect(() => {
    if (!Object.values(detailItem)[0]) return;
    setFilter(detailItem);
  }, [detailItem]);

  const addItem = e => {
    setDetailItem({ ...detailItem, [e.target.name]: e.target.value });
  };

  const navOnMouseLeave = () => {
    setCurrentMenuId();
  };

  return (
    <S.ModalAllWarp onMouseLeave={navOnMouseLeave}>
      <div>
        {FILTER_LIST.map(({ id, category }, idx) => {
          return (
            <div key={id}>
              {id === currentMenuId &&
                category.map(({ id, list }) => (
                  <S.FilterBtnWrap key={id}>
                    <S.FilterBtn
                      onClick={() => {
                        addItem({
                          target: { name: FILTER_LIST[idx].title, value: list },
                        });
                      }}
                      value={list}
                    >
                      {list}
                    </S.FilterBtn>
                  </S.FilterBtnWrap>
                ))}
            </div>
          );
        })}
      </div>
    </S.ModalAllWarp>
  );
}
