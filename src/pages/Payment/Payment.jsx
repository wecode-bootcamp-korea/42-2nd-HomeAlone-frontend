import React, { useEffect, useState } from 'react';
import UserBox from './components/UserBox/UserBox';
import AddressBox from './components/AddressBox/AddressBox';
import Sidebar from './components/Sidebar/Sidebar';
import CartItem from './components/CartItem/CartItem';
import PaymentOptions from './components/PaymentOptions/PaymentOptions';
import * as S from './Payment.style';

export default function Payment() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch('/data/carts.json')
      .then(res => res.json())
      .then(data => setCarts(data));
  }, []);

  return (
    <S.Payment>
      <S.PaymentBox>
        <h2>주문/결제</h2>
        <div>
          <S.PaymentBoxTitle>주문자</S.PaymentBoxTitle>
          <S.PaymentSection>
            <UserBox />
          </S.PaymentSection>
        </div>
        <div>
          <S.PaymentBoxTitle>배송지</S.PaymentBoxTitle>
          <S.PaymentSection>
            {ADDRESS_INFO.map(info => (
              <AddressBox key={info.id} info={info} />
            ))}
            <S.AddressInputBox>
              <S.PaymentLabel>주소</S.PaymentLabel>
              <S.AddressBox>
                <div>
                  <S.AddressBtn>주소찾기</S.AddressBtn>
                  <S.PostalCode type="text" />
                </div>
                <S.Address type="text" />
                <S.DetailAddress placeholder="상세주소 입력" />
              </S.AddressBox>
            </S.AddressInputBox>
          </S.PaymentSection>
        </div>
        <div>
          <S.PaymentBoxTitle>주문상품</S.PaymentBoxTitle>
          <CartItem carts={carts} />
        </div>
        <div>
          <S.PaymentBoxTitle>결제 수단</S.PaymentBoxTitle>
          <PaymentOptions />
        </div>
      </S.PaymentBox>
      <Sidebar />
    </S.Payment>
  );
}

const ADDRESS_INFO = [
  { id: 1, label: '배송지명' },
  { id: 2, label: '받는 사람' },
  { id: 3, label: '연락처' },
];
