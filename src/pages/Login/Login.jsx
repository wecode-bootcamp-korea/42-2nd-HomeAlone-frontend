import { Link } from 'react-router-dom';
import * as S from './Login.style';

export default function Login() {
  const KAKAO_OAUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = KAKAO_OAUTH_URL;
  };

  return (
    <S.Container>
      <S.LogoImg src="/images/soomin/logo.png" />
      <S.LoginForm>
        <S.UserInput type="text" placeholder="이메일" />
        <S.UserInput type="text" placeholder="비밀번호" />
        <S.LoginButton>로그인</S.LoginButton>
        <S.SignupLink to="/signup">회원가입</S.SignupLink>
        <S.Text>SNS계정으로 간편 로그인/회원가입</S.Text>
        <section>
          <Link onClick={handleLogin}>
            <S.LoginImg src="/images/soomin/withkakao.png" alt="kakaoLogin" />
          </Link>
        </section>
      </S.LoginForm>
    </S.Container>
  );
}
