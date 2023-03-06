import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../../config/config';
import * as S from './ProductInfo.Style';

export default function ProductInfo({ productDetail }) {
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  const plusBtn = () => {
    setQuantity(quantity + 1);
  };

  const minusBtn = () => {
    if (quantity <= 1) return;
    setQuantity(prev => prev - 1);
  };

  const cartBtnClick = () => {
    fetch(`${API.CARTS}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        data: { productId: productDetail.productId, quantity: quantity },
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (localStorage.getItem('token') !== 'undefined') {
          navigate('/cart');
        } else {
          alert('로그인이 필요합니다.');
          navigate('/login');
        }
      });
  };

  return (
    <S.ProductInfoWrap>
      <S.ProductName>{productDetail.productName}</S.ProductName>
      <S.Review>{productDetail.ratingAmount}개 리뷰</S.Review>
      <S.DiscountWrap>
        <S.productPrice>
          {Number(productDetail.productPrice).toLocaleString('ko-KR')}원
        </S.productPrice>
        <S.Discount>
          {Number(productDetail.discountPercentage).toLocaleString('ko-KR')}%
        </S.Discount>
      </S.DiscountWrap>
      <S.Price>
        {Number(productDetail.finalPrice).toLocaleString('ko-KR')}원
      </S.Price>
      <S.DeliveryWrap>
        <S.DeliveryTitle>배송비</S.DeliveryTitle>
        <p>
          {Number(productDetail.productShippingFee).toLocaleString('ko-KR')}원
        </p>
      </S.DeliveryWrap>
      <S.OptionWrap>
        <S.ExplainTitle>상품설명</S.ExplainTitle>
        <S.ExplainProduct>{productDetail.productDescription}</S.ExplainProduct>
        <S.QuantityWrap>
          <S.QuantityHandle>
            <S.QuantityMinus onClick={minusBtn} src="images/Detail/minus.png" />
            <S.Quantity>{quantity}</S.Quantity>
            <S.QuantityPlus onClick={plusBtn} src="images/Detail/plus.png" />
          </S.QuantityHandle>
          <S.TotalPrice>
            {Number(productDetail.finalPrice * quantity).toLocaleString(
              'ko-KR'
            )}
            원
          </S.TotalPrice>
        </S.QuantityWrap>
      </S.OptionWrap>
      <S.CartBtn onClick={cartBtnClick}>장바구니</S.CartBtn>
    </S.ProductInfoWrap>
  );
}
