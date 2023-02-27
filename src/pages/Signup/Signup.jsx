import React from 'react';
import { Link } from 'react-router-dom';
import Terms from './components/Terms/Terms';
import SelectBox from './components/SelectBox/SelectBox';
import * as S from './Signup.style';

export default function Signup() {
  return (
    <S.Section>
      <Link to="/">
        <S.LogoImg src="images/soomin/logo.png" alt="logo" />
      </Link>
      <div>
        <S.Title>회원가입</S.Title>
        <S.SocialSignup>
          <S.Contens>SNS계정으로 간편하게 회원가입</S.Contens>
          <Link>
            <S.SocialSignupImg
              src="https://cdn-icons-png.flaticon.com/512/3669/3669973.png"
              alt="signupLogo"
            />
          </Link>
        </S.SocialSignup>
        <S.SignupForm>
          <S.Text>이메일</S.Text>
          <div>
            <S.EmainInput type="email" placeholder="이메일" />
            &nbsp;@&nbsp;
            <SelectBox />
          </div>
          <S.CertificationBtn type="button">이메일 인증하기</S.CertificationBtn>
          <S.Text>비밀번호</S.Text>
          <S.Description>
            영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요
          </S.Description>
          <S.SingupInput type="password" placeholder="비밀번호" />
          <S.Text>비밀번호 확인</S.Text>
          <S.SingupInput type="password" placeholder="비밀번호 확인" />
          <S.Text>닉네임</S.Text>
          <S.Description>
            다른 유저와 겹치지 않도록 입력해주세요.(2~15자)
          </S.Description>
          <S.SingupInput type="text" placeholder="별명 (2~15자)" />
          <Terms />
          <S.SignupButton>회원가입하기</S.SignupButton>
          <S.Footer>
            이미 아이디가 있으신가요?
            <S.LoginLink to="/login">로그인</S.LoginLink>
          </S.Footer>
          <div />
        </S.SignupForm>
      </div>
    </S.Section>
  );
}
