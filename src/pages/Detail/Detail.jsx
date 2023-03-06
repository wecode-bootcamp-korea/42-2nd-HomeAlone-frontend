import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductInfo from './ProductInfo/ProductInfo';
import Review from './Review/Review';
import API from '../../config/config';
import * as S from './Detail.Style';

export default function Detail() {
  const [productDetail, setProductDetail] = useState({});

  const params = useParams();
  useEffect(() => {
    fetch(`${API.PRODUCTS}/detail/${params.id}`, {
      method: 'GET',
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setProductDetail(data.data);
      });
  }, [params.id]);

  return (
    <S.AllWrap>
      <S.DetailAllWrap>
        <S.ProductWrap>
          <S.ProductImgWrap>
            <S.ProductImg src={productDetail.productImage} alt="product" />
          </S.ProductImgWrap>
          <ProductInfo productDetail={productDetail} />
        </S.ProductWrap>
        <S.ReviewWrap>
          <Review productDetail={productDetail} />
        </S.ReviewWrap>
      </S.DetailAllWrap>
    </S.AllWrap>
  );
}
