import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import { API } from '../../config/config';

export default function KakaoRedirect() {
  const navigate = useNavigate();
  const location = useLocation();
  const KAKAO_CODE = location.search.split('=')[1];

  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          postToken(data.access_token);
        } else {
          alert('다시 로그인 해주세요!');
          navigate('/login');
        }
      });
  };

  const postToken = token => {
    fetch(`${API.LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('token', data.accessToken);
          navigate('/');
        } else {
          alert('다시 로그인 해주세요!');
          navigate('/login');
        }
      });
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, [location.search]);

  return (
    <div>
      <LoadingSpinner />
    </div>
  );
}
