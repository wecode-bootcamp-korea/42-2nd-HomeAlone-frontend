import React from 'react';
import * as S from './CartItem.style';

export default function CartItem({ carts }) {
  return (
    <>
      {carts.map(item => (
        <S.CartItem key={item.id}>
          <img src={item.imageUrl} alt="Product Img" />
          <S.CartInfo>
            <p>{item.name}</p>
            <S.PriceInfo>
              <h1>{item.price}원</h1>
              <p>|</p>
              <p>{item.quantity}개</p>
            </S.PriceInfo>
          </S.CartInfo>
        </S.CartItem>
      ))}
    </>
  );
}
