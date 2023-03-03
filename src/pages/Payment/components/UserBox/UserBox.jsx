import React, { useState, useEffect } from 'react';
import * as S from './UserBox.style';

export default function UserBox() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('./data/users.json')
      .then(res => res.json())
      .then(data => setUsers(data[0]));
  }, []);

  return (
    <>
      {USER_INFO.map(info => (
        <S.InputBox key={info.id}>
          <S.UserLabel>{info.label}</S.UserLabel>
          {info.label === '이름' ? (
            <S.UserInput value={users.name} />
          ) : info.label === '이메일' ? (
            <S.UserInput value={users.email} />
          ) : (
            <S.UserInput value={users.phoneNumber} />
          )}
        </S.InputBox>
      ))}
    </>
  );
}

const USER_INFO = [
  { id: 1, label: '이름' },
  { id: 2, label: '이메일' },
  { id: 3, label: '전화' },
];
