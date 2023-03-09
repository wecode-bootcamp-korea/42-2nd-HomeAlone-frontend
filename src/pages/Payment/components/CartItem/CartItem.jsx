import React from 'react';
import * as S from './CartItem.style';

export default function CartItem({ carts }) {
  return (
    <>
      {carts.map(
        ({ id, productImage, productName, productPriceAmount, quantity }) => (
          <S.CartItem key={id}>
            <img src={productImage} alt="Product Img" />
            <S.CartInfo>
              <p>{productName}</p>
              <S.PriceInfo>
                <h1>{Number(productPriceAmount).toLocaleString()}원</h1>
                <p>|</p>
                <p>{quantity}개</p>
              </S.PriceInfo>
            </S.CartInfo>
          </S.CartItem>
        )
      )}
    </>
  );
}
