import React from 'react';
import * as S from './SearchBox.style';

export default function SearchBox({ filteredList, keyword }) {
  return (
    <S.SearchBoxWrapper>
      {filteredList.length >= 1 && keyword !== '' && (
        <>
          {filteredList.map(({ id, img, name, price }) => (
            <S.ToDetail key={id} to={`/detail/${id}`}>
              <S.List>
                <img src={img} alt="Product Img" />
                <S.Item>
                  <p>{name}</p>
                  <p>{price}원</p>
                </S.Item>
              </S.List>
            </S.ToDetail>
          ))}
        </>
      )}
    </S.SearchBoxWrapper>
  );
}
