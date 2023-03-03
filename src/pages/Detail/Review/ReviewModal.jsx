import * as S from './ReviewModal.Style';

export default function ReviewModal({ setIsModalOpen }) {
  return (
    <S.AllWarp>
      <S.ModalWrap>
        <S.Title>리뷰 쓰기</S.Title>
        <S.Close
          onClick={() => setIsModalOpen(false)}
          src="/images/Detail/close.png"
          alt="close"
        />
        <S.ProductWrap>
          <S.ProductImg src="/images/Detail/table.jpg" alt="product" />
          <p>상품이름</p>
        </S.ProductWrap>
        <S.EvaluationWrap>
          <S.Evaluation>점수평가</S.Evaluation>
          <S.ScoreWrap>
            <span>만족도</span>
            <S.Score>
              <option>1점</option>
              <option>2점</option>
              <option>3점</option>
              <option>4점</option>
              <option>5점</option>
            </S.Score>
          </S.ScoreWrap>
        </S.EvaluationWrap>
        <S.AddPictureWrap>
          <S.AddPictureTitle>사진첨부(선택)</S.AddPictureTitle>
          <S.Picture />
          <S.AddpictureBtn>사진 첨부하기</S.AddpictureBtn>
        </S.AddPictureWrap>
        <S.ReviewTextWrap>
          <S.ReviewTextTitle>리뷰 작성</S.ReviewTextTitle>
          <S.ReviewInput placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다." />
        </S.ReviewTextWrap>
        <S.CompletBtn>완료</S.CompletBtn>
      </S.ModalWrap>
    </S.AllWarp>
  );
}
