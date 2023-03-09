import React from 'react';
import './PaymentOptions.style';
import * as S from './PaymentOptions.style';

export default function PaymentOptions({ payments, actions }) {
  const { changeCurrentPaymentMethod } = actions;
  return (
    <S.PaymentOptionsBox>
      {PAYMENT_OPTIONS.map(({ id, option, src }) => (
        <Payments
          key={id}
          id={id}
          option={option}
          src={src}
          payments={payments}
          actions={{ changeCurrentPaymentMethod }}
        />
      ))}
    </S.PaymentOptionsBox>
  );
}

const Payments = ({ id, src, option, payments, actions }) => {
  const { paymentType } = payments;
  const { changeCurrentPaymentMethod } = actions;
  const isClicked = paymentType === option;

  return (
    <S.Option key={id}>
      <S.OptionBtn
        value={id}
        isClicked={isClicked}
        onClick={() => changeCurrentPaymentMethod(option)}
      >
        <img src={src} alt="Option Img" />
        {option}
      </S.OptionBtn>
    </S.Option>
  );
};

const PAYMENT_OPTIONS = [
  { id: 1, option: 'point', src: 'images/payment/deposit.png' },
  { id: 2, option: 'card', src: 'images/payment/card.png' },
  { id: 3, option: 'kakaoPay', src: 'images/payment/kakao.png' },
  { id: 4, option: 'naverPay', src: 'images/payment/naver.png' },
  { id: 5, option: 'payco', src: 'images/payment/payco.png' },
  { id: 6, option: 'tossPay', src: 'images/payment/toss.png' },
  { id: 7, option: 'phone', src: 'images/payment/phone.png' },
];
