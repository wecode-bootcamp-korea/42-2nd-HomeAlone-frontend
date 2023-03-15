import React from 'react';
import * as S from './AddressBox.style';

export default function AddressBox({ payments, setPayments }) {
  const {
    deliveryName,
    deliveryReceiver,
    deliveryPhoneNumber,
    deliveryAddress,
    deliveryDetailAddress,
    deliveryMessage,
  } = payments;

  const handleDelivery = e => {
    setPayments(prev => ({
      ...prev,
      deliveryName: e.target.value,
    }));
  };

  const handleName = e => {
    setPayments(prev => ({
      ...prev,
      deliveryReceiver: e.target.value,
    }));
  };

  const handlePhone = e => {
    setPayments(prev => ({
      ...prev,
      deliveryPhoneNumber: e.target.value,
    }));
  };

  const handleAddress = e => {
    setPayments(prev => ({
      ...prev,
      deliveryAddress: e.target.value,
    }));
  };

  const handleDetailAddress = e => {
    setPayments(prev => ({
      ...prev,
      deliveryDetailAddress: e.target.value,
    }));
  };

  const handleMessage = e => {
    setPayments(prev => ({
      ...prev,
      deliveryMessage: e.target.value,
    }));
  };

  return (
    <>
      <S.InputBox>
        <S.UserLabel>배송지명</S.UserLabel>
        <S.UserInput value={deliveryName || ''} onChange={handleDelivery} />
      </S.InputBox>
      <S.InputBox>
        <S.UserLabel>받는 사람</S.UserLabel>
        <S.UserInput value={deliveryReceiver || ''} onChange={handleName} />
      </S.InputBox>
      <S.InputBox>
        <S.UserLabel>연락처</S.UserLabel>
        <S.UserInput
          value={deliveryPhoneNumber || ''}
          onChange={handlePhone}
          placeholder="- 제외"
        />
      </S.InputBox>
      <S.InputBox>
        <S.UserLabel>주소</S.UserLabel>
        <S.UserInput
          value={deliveryAddress || ''}
          onChange={handleAddress}
          placeholder="주소"
        />
      </S.InputBox>
      <S.InputBox>
        <S.UserLabel />
        <S.UserInput
          value={deliveryDetailAddress || ''}
          onChange={handleDetailAddress}
          placeholder="상세 주소"
        />
      </S.InputBox>
      <S.MessageBox onChange={e => handleMessage(e)}>
        <option value="none" hidden>
          배송 시 요청사항을 선택해 주세요
        </option>
        {MESSGAE_OPTIONS.map(({ id, option }) => (
          <option key={id} value={option}>
            {option}
          </option>
        ))}
      </S.MessageBox>
    </>
  );
}

const MESSGAE_OPTIONS = [
  { id: 1, option: '부재 시 문앞에 놓아 주세요' },
  { id: 2, option: '배송 전에 미리 연락 주세요' },
  { id: 3, option: '부재 시 경비실에 맡겨 주세요' },
  { id: 4, option: '부재 시 전화주시거나 문자 남겨 주세요' },
];
