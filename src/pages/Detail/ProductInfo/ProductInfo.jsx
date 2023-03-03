import { useEffect, useState } from 'react';
import * as S from './ProductInfo.Style';

export default function ProductInfo() {
  const [productInfo, setProductInfo] = useState([{}]);
  const [quantity, setQuantity] = useState(1);

  const plusBtn = () => {
    setQuantity(quantity + 1);
  };

  const minusBtn = () => {
    if (quantity <= 1) return;
    setQuantity(prev => prev - 1);
  };

  useEffect(() => {
    fetch('/data/productsDetail.json')
      .then(res => res.json())
      .then(data => setProductInfo(data));
  }, []);

  return (
    <S.ProductInfoWrap>
      <S.ProductName>{productInfo[0].name}</S.ProductName>
      <S.Review>리뷰개수</S.Review>
      <S.Discount>할인가{productInfo[0].discount}</S.Discount>
      <S.Price>{productInfo[0].price}</S.Price>
      <S.DeliveryWrap>
        <S.DeliveryTitle>배송비</S.DeliveryTitle>
        <p>{productInfo[0].shippingFee}원</p>
      </S.DeliveryWrap>
      <S.ExplainProduct>{productInfo[0].description}</S.ExplainProduct>
      <S.OptionWrap>
        <S.Name>{productInfo[0].name}</S.Name>
        <S.QuantityWrap>
          <S.QuantityHandle>
            <S.QuantityMinus onClick={minusBtn} src="images/detail/minus.png" />
            <S.Quantity>{quantity}</S.Quantity>
            <S.QuantityPlus onClick={plusBtn} src="images/detail/plus.png" />
          </S.QuantityHandle>
          <S.TotalPrice>{productInfo[0].price * quantity}</S.TotalPrice>
        </S.QuantityWrap>
      </S.OptionWrap>
      <S.CartBtn>장바구니</S.CartBtn>
    </S.ProductInfoWrap>
  );
}
