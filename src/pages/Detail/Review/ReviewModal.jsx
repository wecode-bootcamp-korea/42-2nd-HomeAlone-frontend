import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../../config/config';
import * as S from './ReviewModal.Style';

export default function ReviewModal({ setIsModalOpen, productDetail }) {
  const [upload, setUpload] = useState({
    rating: '',
    comment: '',
    img: '',
    productId: productDetail.productId,
  });

  const navigate = useNavigate();

  const getScore = e => {
    setUpload(prev => ({ ...prev, rating: e.target.value }));
  };

  const getReviewText = e => {
    setUpload(prev => ({ ...prev, comment: e.target.value }));
  };

  const saveImgFile = e => {
    const file = e.target.files[0];
    setUpload(prev => ({ ...prev, img: file }));
  };

  const reviewBtnClick = () => {
    const uploadForm = new FormData();
    uploadForm.append('rating', upload.rating);
    uploadForm.append('content', upload.comment);
    uploadForm.append('productId', upload.productId);
    uploadForm.append('img', upload.img);

    fetch(`${API.REVIEWS}`, {
      method: 'POST',
      headers: {
        enctype: 'multipart/form-data',
        Authorization: localStorage.getItem('token'),
      },
      body: uploadForm,
    })
      .then(response => response.json())
      .then(data => {
        if (localStorage.getItem('token') !== 'undefined') {
          setIsModalOpen(false);
        } else {
          alert('로그인이 필요합니다.');
          navigate('/login');
        }
      });
  };

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
          <S.ProductImg src={productDetail.productImage} alt="product" />
          <p>{productDetail.productName}</p>
        </S.ProductWrap>
        <S.EvaluationWrap>
          <S.Evaluation>점수평가</S.Evaluation>
          <S.ScoreWrap>
            <span>만족도</span>
            <S.Score onChange={getScore} value={upload.rating}>
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </S.Score>
          </S.ScoreWrap>
        </S.EvaluationWrap>
        <S.AddPictureWrap>
          <S.AddPictureTitle>사진첨부(선택)</S.AddPictureTitle>
          <S.Picture
            src={
              upload.img
                ? `${URL.createObjectURL(upload.img)}`
                : '/images/Detail/image.png'
            }
          />
          <S.AddpictureBtn htmlFor="productImg">사진 첨부하기</S.AddpictureBtn>
          <S.ImgUpload
            type="file"
            accept="image/*"
            id="productImg"
            onChange={saveImgFile}
          />
        </S.AddPictureWrap>
        <S.ReviewTextWrap>
          <S.ReviewTextTitle>리뷰 작성</S.ReviewTextTitle>
          <S.ReviewInput
            type="text"
            value={upload.reviewText}
            onChange={getReviewText}
            placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다."
          />
        </S.ReviewTextWrap>
        <S.CompletBtn onClick={reviewBtnClick}>완료</S.CompletBtn>
      </S.ModalWrap>
    </S.AllWarp>
  );
}
