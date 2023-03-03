import React from 'react';
import './PaymentOptions.style';
import * as S from './PaymentOptions.style';

export default function PaymentOptions() {
  return (
    <S.PaymentOptionsBox>
      {PAYMENT_OPTIONS.map(option => (
        <S.Option key={option.id}>
          <S.OptionBtn>
            <img src={option.src} alt="Option Img" />
            <p>{option.option}</p>
          </S.OptionBtn>
        </S.Option>
      ))}
    </S.PaymentOptionsBox>
  );
}

const PAYMENT_OPTIONS = [
  { id: 1, option: '카드', src: 'images/payment/card.png' },
  { id: 2, option: '무통장입금', src: 'images/payment/deposit.png' },
  { id: 3, option: '카카오페이', src: 'images/payment/kakao.png' },
  { id: 4, option: '네이버페이', src: 'images/payment/naver.png' },
  { id: 5, option: '페이코', src: 'images/payment/payco.png' },
  { id: 6, option: '토스페이', src: 'images/payment/toss.png' },
  { id: 7, option: '핸드폰', src: 'images/payment/phone.png' },
];
