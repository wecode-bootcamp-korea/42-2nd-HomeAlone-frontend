import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Login.style';

export default function Login() {
  return (
    <S.Container>
      <S.LogoImg src="images/soomin/logo.png" />
      <S.LoginForm>
        <S.UserInput type="text" placeholder="이메일" />
        <S.UserInput type="text" placeholder="비밀번호" />
        <S.LoginButton>로그인</S.LoginButton>
        <S.SignupLink to="/signup">회원가입</S.SignupLink>
        <S.Text>SNS계정으로 간편 로그인/회원가입</S.Text>
        <section>
          <Link to="">
            <S.LoginImg
              src="https://cdn-icons-png.flaticon.com/512/3669/3669973.png"
              alt="kakaoLogin"
            />
          </Link>
        </section>
      </S.LoginForm>
    </S.Container>
  );
}
