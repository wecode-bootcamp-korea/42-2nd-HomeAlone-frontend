import React from 'react';
import * as S from './SelectBox.style';

export default function SelectBox() {
  return (
    <S.Select name="email">
      {EMAIL_LIST.map(({ id, value, email }) => {
        return (
          <option key={id} value={value}>
            {email}
          </option>
        );
      })}
    </S.Select>
  );
}

const EMAIL_LIST = [
  { id: 1, value: 'naver', email: 'naver.com' },
  { id: 2, value: 'gmail', email: 'gmail.com' },
  { id: 3, value: 'duam', email: 'duam.net' },
  { id: 4, value: 'directInput', email: '직접입력' },
];
