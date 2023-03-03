import React from 'react';
import ProductInfo from './ProductInfo/ProductInfo';
import Review from './Review/Review';
import * as S from './Detail.Style';

export default function Detail() {
  return (
    <S.AllWrap>
      <S.DetailAllWrap>
        <S.ProductWrap>
          <S.ProductImgWrap>
            <S.ProductImg src="/images/Detail/table.jpg" alt="table" />
          </S.ProductImgWrap>
          <ProductInfo />
        </S.ProductWrap>
        <S.ReviewWrap>
          <Review />
        </S.ReviewWrap>
      </S.DetailAllWrap>
    </S.AllWrap>
  );
}
