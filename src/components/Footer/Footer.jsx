import React from 'react';
import * as S from './Footer.style';

export default function Footer() {
  return (
    <S.Footer>
      <S.Service>
        <p>고객센터 {'>'}</p>
        <p>070-4323-4050</p>
        <button>카톡상담(평일 09:00~18:00)</button>
        <button>이메일 문의</button>
      </S.Service>
      <S.Info>
        <p>
          (주)나홀로집에 | 박준우 성은정 이수민 이종혁 황수영 | 서울시 강남구
          테헤란로 427 위워크
        </p>
        <img src="images/footer/footer.png" alt="Footer Img" />
      </S.Info>
    </S.Footer>
  );
}
