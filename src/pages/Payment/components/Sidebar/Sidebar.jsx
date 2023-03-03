import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Sidebar.style';

export default function Sidebar() {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const ToModal = () => {
    setIsClicked(true);
  };

  const ToMain = () => {
    navigate('/');
  };

  return (
    <S.SidebarBox>
      <S.PriceBoxList>
        <S.PriceBox>
          <S.Title>결제금액</S.Title>
          <S.Price>
            <S.PriceTitle>총 상품 금액</S.PriceTitle>
            <p>원</p>
          </S.Price>
          <S.Price>
            <S.PriceTitle>배송비</S.PriceTitle>
            <p>원</p>
          </S.Price>
          <S.TotalPrice>
            <S.SubTitle>최종 결제 금액</S.SubTitle>
            <p>원</p>
          </S.TotalPrice>
        </S.PriceBox>
      </S.PriceBoxList>
      <S.PaymentBtn onClick={ToModal}>원 결제하기</S.PaymentBtn>
      {isClicked && (
        <S.PaymentModal isOpen={true}>
          <div>
            <S.ModalTitle>결제완료!</S.ModalTitle>
            <p>안전하게 배송해드릴게요 🚚</p>
          </div>
          <S.ModalBtn onClick={ToMain}>확인</S.ModalBtn>
        </S.PaymentModal>
      )}
    </S.SidebarBox>
  );
}
