import React from 'react';
import * as S from './ProductModal.Style';

export default function ProductModal({ homeWarmingData }) {
  return (
    <S.SearchedItem>
      <S.ItemBox>
        <S.ItemImg
          src={homeWarmingData.productInfo[0].productImageUrl}
          alt="Product Img"
        />
        <p>{homeWarmingData.productInfo[0].name}</p>
        <p>{homeWarmingData.productInfo[0].sellingPrice}원</p>
      </S.ItemBox>
    </S.SearchedItem>
  );
}
