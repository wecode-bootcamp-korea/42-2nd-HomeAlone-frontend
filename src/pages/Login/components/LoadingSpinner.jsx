import React from 'react';
import * as S from './LoadingSpninner.style';
import { ClockLoader } from 'react-spinners';

export default function LodingSpinner({ loading }) {
  const override = {
    display: 'flex',
    textAlign: 'center',
  };
  return (
    <S.Spinner>
      <ClockLoader
        color="#35c5f0"
        size={90}
        loading
        cssOverride={override}
        speedMultiplier={1}
      />
      <S.LodingText>🏠 잠시만 기다려 주세요 ❣</S.LodingText>
    </S.Spinner>
  );
}
