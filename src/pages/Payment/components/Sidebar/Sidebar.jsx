import React, { useState } from 'react';
import * as S from './Sidebar.style';

export default function Sidebar({
  productPrice,
  shippingFee,
  totalPrice,
  payments,
  setPayments,
  onSubmit,
  isBtnDisabled,
}) {
  const [isClicked, setIsClicked] = useState(false);

  const toModal = () => {
    setIsClicked(true);
  };

  const onClose = () => {
    setIsClicked(false);
  };

  return (
    <S.SidebarBox>
      <S.PriceBoxList>
        <S.PriceBox>
          <S.Title>결제금액</S.Title>
          <S.PriceList>
            <S.PriceTitle>총 상품 금액</S.PriceTitle>
            <S.Price>{productPrice.toLocaleString()}원</S.Price>
          </S.PriceList>
          <S.PriceList>
            <S.PriceTitle>배송비</S.PriceTitle>
            <S.Price>{shippingFee.toLocaleString()}원</S.Price>
          </S.PriceList>
          <S.TotalPrice>
            <S.SubTitle>최종 결제 금액</S.SubTitle>
            <p>{totalPrice.toLocaleString()}원</p>
          </S.TotalPrice>
        </S.PriceBox>
      </S.PriceBoxList>
      <S.PaymentBtn onClick={toModal} disabled={isBtnDisabled ? false : true}>
        {totalPrice.toLocaleString()}원 결제하기
      </S.PaymentBtn>
      {isClicked && (
        <S.PaymentModal isOpen={true} ariaHideApp={false}>
          <div>
            <S.ModalTitle>결제완료!</S.ModalTitle>
            <p>안전하게 배송해드릴게요 🚚</p>
          </div>
          <S.BtnBox>
            <S.CloseBtn onClick={onClose}>취소</S.CloseBtn>
            <S.SubmitBtn onClick={onSubmit}>확인</S.SubmitBtn>
          </S.BtnBox>
        </S.PaymentModal>
      )}
    </S.SidebarBox>
  );
}
