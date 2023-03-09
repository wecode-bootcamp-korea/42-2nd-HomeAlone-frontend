import React from 'react';
import * as S from './SearchBox.style';

export default function SearchBox({ filteredList, keyword, handleSearch }) {
  return (
    <S.SearchBoxWrapper onClick={handleSearch}>
      {filteredList.length >= 1 && keyword !== '' && (
        <>
          {filteredList.map(({ productId, productImage, productName }) => (
            <S.ToDetail key={productId} to={`/detail/${productId}`}>
              <S.List>
                <img src={productImage} alt="Product Img" />
                <div>
                  <p>{productName}</p>
                </div>
              </S.List>
            </S.ToDetail>
          ))}
        </>
      )}
    </S.SearchBoxWrapper>
  );
}
