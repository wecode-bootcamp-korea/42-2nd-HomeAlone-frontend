import React from 'react';
import * as S from './AddressBox.style';

export default function AddressBox({ info }) {
  return (
    <S.InputBox>
      <S.UserLabel>{info.label}</S.UserLabel>
      <S.UserInput />
    </S.InputBox>
  );
}
