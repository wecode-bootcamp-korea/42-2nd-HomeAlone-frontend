import * as S from './PostReview.Style';

export default function PostReview({ reviewData }) {
  return (
    <S.ReviewWrap>
      <S.UserInfo>
        <S.UserImg src={reviewData.userProfileImage} alt="userimg" />
        <S.UserName>{reviewData.userNickname}</S.UserName>
        <S.ScoreTitle>상품점수</S.ScoreTitle>
        <S.Score>{reviewData.reviewRating}</S.Score>
      </S.UserInfo>
      <S.ProductName>{reviewData.productName}</S.ProductName>
      <S.ProductImg src={reviewData.reviewImage} alt="productimg" />
      <S.ReviewText>{reviewData.reviewContent}</S.ReviewText>
      <S.SuggestionBtn>도움이 돼요</S.SuggestionBtn>
    </S.ReviewWrap>
  );
}
