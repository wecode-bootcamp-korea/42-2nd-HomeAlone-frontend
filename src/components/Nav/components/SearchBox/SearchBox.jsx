import React from 'react';
import styled from 'styled-components';
import * as S from './SearchBox.style';

export default function SearchBox({ filteredList, keyword }) {
  return (
    <S.SearchBoxWrapper>
      {filteredList.length >= 1 && keyword !== '' && (
        <>
          {filteredList.map(product => (
            <S.List key={product.id}>
              <img src={product.img} alt="Product Img" />
              <S.Item>
                <p>{product.name}</p>
                <p>{product.price}원</p>
              </S.Item>
            </S.List>
          ))}
        </>
      )}
    </S.SearchBoxWrapper>
  );
}
