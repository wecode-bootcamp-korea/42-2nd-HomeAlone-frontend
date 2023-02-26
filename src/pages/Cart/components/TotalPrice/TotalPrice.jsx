import React from 'react';
import * as S from './TotalPrice.style';

export default function TotalPrice({
  totalPrice,
  totalCost,
  totalShippingFee,
  totalDiscount,
}) {
  return (
    <S.TotalPriceListBox>
      <S.TotalPriceList>
        <p>총 상품금액</p>
        <p>{totalPrice.toLocaleString()}원</p>
      </S.TotalPriceList>
      <S.TotalPriceList>
        <p>총 배송비</p>
        <p>+ {totalShippingFee.toLocaleString()}원</p>
      </S.TotalPriceList>
      <S.TotalPriceList>
        <p>총 할인금액</p>
        <p>- {totalDiscount.toLocaleString()}원</p>
      </S.TotalPriceList>
      <S.TotalPriceList>
        <S.TotalPrice>결제금액</S.TotalPrice>
        <S.TotalPrice>{totalCost.toLocaleString()}원</S.TotalPrice>
      </S.TotalPriceList>
    </S.TotalPriceListBox>
  );
}
