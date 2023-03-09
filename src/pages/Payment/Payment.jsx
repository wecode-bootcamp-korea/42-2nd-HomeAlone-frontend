import React, { useEffect, useState } from 'react';
import UserBox from './components/UserBox/UserBox';
import AddressBox from './components/AddressBox/AddressBox';
import Sidebar from './components/Sidebar/Sidebar';
import CartItem from './components/CartItem/CartItem';
import PaymentOptions from './components/PaymentOptions/PaymentOptions';
import { API } from '../../config/config';
import * as S from './Payment.style';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const [carts, setCarts] = useState([]);
  const [payments, setPayments] = useState({
    totalProductPrice: 0,
    totalDeliveryPrice: 0,
    deliveryName: '',
    deliveryReceiver: '',
    deliveryPhoneNumber: '',
    deliveryAddress: '',
    deliveryDetailAddress: '',
    deliveryMessage: '',
    paymentType: '',
  });

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`${API.ORDERS}/cart`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => setCarts(data.data));
  }, []);

  const productPrice = carts.reduce(
    (acc, current) => acc + Number(current.productPriceAmount),
    0
  );

  const shippingFee = carts.reduce(
    (acc, current) => acc + Number(current.shippingFeeAmount),
    0
  );

  const totalPrice = productPrice + shippingFee;

  const { paymentType } = payments;

  const changeCurrentPaymentMethod = option => {
    setPayments({
      ...payments,
      paymentType: option,
      totalProductPrice: productPrice,
      totalDeliveryPrice: shippingFee,
    });
  };

  const isBtnDisabled = paymentType !== '';

  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();

    if (payments.totalProductPrice && payments.totalDeliveryPrice) {
      fetch(`${API.ORDERS}/payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: token,
        },
        body: JSON.stringify({ payments }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.message === '결제가 완료됐습니다.') {
            navigate('/');
          } else {
            alert('실패');
          }
        });
    }
  };

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
            <AddressBox payments={payments} setPayments={setPayments} />
          </S.PaymentSection>
        </div>
        <div>
          <S.PaymentBoxTitle>주문상품</S.PaymentBoxTitle>
          <CartItem carts={carts} />
        </div>
        <div>
          <S.PaymentBoxTitle>결제 수단</S.PaymentBoxTitle>
          <PaymentOptions
            payments={payments}
            actions={{ changeCurrentPaymentMethod }}
          />
        </div>
      </S.PaymentBox>
      <Sidebar
        productPrice={productPrice}
        shippingFee={shippingFee}
        totalPrice={totalPrice}
        payments={payments}
        setPayments={setPayments}
        onSubmit={onSubmit}
        isBtnDisabled={isBtnDisabled}
      />
    </S.Payment>
  );
}
