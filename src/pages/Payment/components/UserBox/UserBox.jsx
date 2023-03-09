import React, { useState, useEffect } from 'react';
import { API } from '../../../../config/config';
import * as S from './UserBox.style';

export default function UserBox() {
  const [users, setUsers] = useState([]);

  const { nickname, email } = users;

  const Token = localStorage.getItem('token');

  //TODO: mock data fetch
  // useEffect(() => {
  //   fetch('./data/users.json')
  //     .then(res => res.json())
  //     .then(data => setUsers(data[0]));
  // }, []);

  //TODO: api fetch
  useEffect(() => {
    fetch(`${API.ORDERS}/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: Token,
      },
    })
      .then(res => res.json())
      .then(data => setUsers(data.data[0]));
  }, []);

  return (
    <div>
      {users &&
        USER_INFO.map(({ id, label }) => (
          <S.InputBox key={id}>
            <S.UserLabel>{label}</S.UserLabel>
            {label === '이름' ? (
              <S.UserInput value={nickname || ''} readOnly />
            ) : (
              label === '이메일' && <S.UserInput value={email || ''} readOnly />
            )}
          </S.InputBox>
        ))}
    </div>
  );
}

const USER_INFO = [
  { id: 1, label: '이름' },
  { id: 2, label: '이메일' },
];
