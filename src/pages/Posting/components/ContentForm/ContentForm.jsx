import React, { useState, useRef } from 'react';
import MarkerModal from '../MarkerModal/MarkerModal';
import * as S from './ContentForm.style';

export default function ContentForm({
  handleType,
  img,
  handleImg,
  uploadInfo,
  handleMarker,
  handleProductId,
  title,
  handleTitle,
  description,
  handleDesc,
}) {
  const [isTagClicked, setIsTagClicked] = useState(false);
  const [isCloseClicked, setIsCloseClicked] = useState(false);
  const [isSelectClicked, setIsSelectClicked] = useState(false);
  const [isProductInfoOpen, setIsproductInfoOpen] = useState(true);

  const onClickTag = e => {
    e.preventDefault();
    setIsTagClicked(prev => !prev);
    handleMarker(e);
  };

  const onClickClose = e => {
    setIsCloseClicked(false);
    setIsTagClicked(false);
    handleMarker(e);
  };

  const onClickPlusBtn = e => {
    e.preventDefault();
    setIsproductInfoOpen(prev => !prev);
  };

  const pixelRow = uploadInfo.productInfo[0]?.pixelRow;
  const pixelColumn = uploadInfo.productInfo[0]?.pixelColumn;

  return (
    <S.ContentFormBox>
      <S.ContentTitle>
        <p>원룸</p>
        <S.SelectBox onChange={e => handleType(e)}>
          <option value="none" hidden>
            스타일
          </option>
          {STYLE_OPTIONS.map(({ id, style }) => (
            <option key={id} value={style}>
              {style}
            </option>
          ))}
        </S.SelectBox>
      </S.ContentTitle>
      <S.Content>
        {!img ? (
          <S.Upload>
            <S.UploadLabel htmlFor="productImg">
              <S.UploadInput
                type="file"
                accept="image/*"
                id="productImg"
                onChange={handleImg}
              />
              <img src="/images/posting/photo.png" alt="Upload Img" />
              <h3>사진 올리기</h3>
            </S.UploadLabel>
          </S.Upload>
        ) : (
          <>
            <S.UploadedImg
              src={`${URL.createObjectURL(img)}`}
              name="img"
              alt="Room Img"
              onClick={e => onClickTag(e)}
            />

            {isTagClicked && (
              <S.MarkerBox pixelRow={pixelRow} pixelColumn={pixelColumn}>
                {!isCloseClicked && (
                  <>
                    <S.MarkerBtn onClick={e => onClickPlusBtn(e)}>
                      +
                    </S.MarkerBtn>
                    <MarkerModal
                      isSelectClicked={isSelectClicked}
                      isProductInfoOpen={isProductInfoOpen}
                      handleMarker={handleMarker}
                      setIsSelectClicked={setIsSelectClicked}
                      onClickClose={onClickClose}
                      handleProductId={handleProductId}
                      uploadInfo={uploadInfo}
                    />
                  </>
                )}
              </S.MarkerBox>
            )}

            <S.Tag>사진을 클릭하여 상품 태그를 등록하세요</S.Tag>
          </>
        )}
        <S.UploadBox>
          <S.UploadTitle
            value={title}
            type="text"
            placeholder="제목"
            onChange={handleTitle}
          />
          <S.UploadDesc
            placeholder="사진에 대해 설명해주세요"
            value={description}
            onChange={handleDesc}
          />
        </S.UploadBox>
      </S.Content>
    </S.ContentFormBox>
  );
}

const STYLE_OPTIONS = [
  { id: 1, style: 'modern' },
  { id: 2, style: 'vintage' },
  { id: 3, style: 'lovely' },
];
