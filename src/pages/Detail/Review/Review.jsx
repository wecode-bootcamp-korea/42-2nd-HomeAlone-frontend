import { useState } from 'react';
import * as S from './Review.Style';
import ReviewModal from './ReviewModal';

export default function Review() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <S.ReviewTitleWrap>
        <S.Title>리뷰 개수</S.Title>
        <S.WriteReview
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          리뷰쓰기
        </S.WriteReview>
        {isModalOpen && <ReviewModal setIsModalOpen={setIsModalOpen} />}
      </S.ReviewTitleWrap>
      <S.ReviewFilter>
        <S.Best>베스트순</S.Best>
        <S.Recent>최신순</S.Recent>
        <S.Average>리뷰평점</S.Average>
      </S.ReviewFilter>
      <S.ReviewDetail>
        <S.UserInfo>
          <S.UserImg src="/images/Detail/userImg.png" alt="userimg" />
          <S.UserName>user1</S.UserName>
          <p>점수</p>
        </S.UserInfo>
        <S.ProductName>상품이름</S.ProductName>
        <S.ProductImg src="/images/Detail/table.jpg" alt="productimg" />
        <S.ReviewText>리뷰내용</S.ReviewText>
        <S.SuggestionBtn>도움이 돼요</S.SuggestionBtn>
      </S.ReviewDetail>
    </div>
  );
}
