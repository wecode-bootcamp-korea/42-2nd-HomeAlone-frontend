import { useEffect, useState } from 'react';
import PostReview from './PostReview';
import ReviewModal from './ReviewModal';
import API from '../../../config/config';
import * as S from './Review.Style';

export default function Review({ productDetail }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postReview, setPostReview] = useState([{}]);

  useEffect(() => {
    fetch(`${API.REVIEWS}?productId=1&sort=recent`, {
      method: 'GET',
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setPostReview(data.data);
      });
  }, []);

  const reviewScores = postReview.map(score => score.reviewRating);
  const averageScore =
    reviewScores.reduce((sum, score) => sum + score, 0) / reviewScores.length;
  return (
    <div>
      <S.ReviewTitleWrap>
        <S.ReviewCount>
          <S.Title>리뷰</S.Title>
          <S.CountReview>{postReview.length}건</S.CountReview>
        </S.ReviewCount>
        <S.WriteReview
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          리뷰쓰기
        </S.WriteReview>
        {isModalOpen && (
          <ReviewModal
            productDetail={productDetail}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </S.ReviewTitleWrap>
      <S.ReviewFilter>
        <S.Best>베스트순</S.Best>
        <S.Recent>최신순</S.Recent>
        <S.AverageTitle>리뷰평점</S.AverageTitle>
        <S.Average>{averageScore}점</S.Average>
      </S.ReviewFilter>
      <S.ReviewDetail>
        {postReview.map(reviewData => {
          return <PostReview key={reviewData.userId} reviewData={reviewData} />;
        })}
      </S.ReviewDetail>
    </div>
  );
}
