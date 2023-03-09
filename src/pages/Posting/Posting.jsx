import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ContentForm from './components/ContentForm/ContentForm';
import { API } from '../../config/config';
import * as S from './Posting.style';

export default function Posting() {
  const [uploadInfo, setUploadInfo] = useState({
    title: '',
    img: '',
    description: '',
    type: '',
    productInfo: [
      {
        productId: 0,
      },
    ],
    marker: [
      {
        pixelRow: 0,
        pixelColumn: 0,
      },
    ],
  });

  const uploadForm = new FormData();
  uploadForm.append('title', uploadInfo.title);
  uploadForm.append('description', uploadInfo.description);
  uploadForm.append('type', uploadInfo.type);
  uploadForm.append('img', uploadInfo.img);
  uploadForm.append('productInfo', JSON.stringify(uploadInfo.productInfo));
  uploadForm.append('marker', JSON.stringify(uploadInfo.marker));

  const { title, description, img } = uploadInfo;

  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleImg = e => {
    e.preventDefault();

    const file = e.target.files[0];

    setUploadInfo(prev => ({ ...prev, img: file }));
  };

  const handleMarker = e => {
    e.preventDefault();
    setUploadInfo(prev => ({
      ...prev,
      marker: [
        {
          pixelRow: e.nativeEvent.offsetX,
          pixelColumn: e.nativeEvent.offsetY,
        },
      ],
    }));
  };

  const handleProductId = (e, product) => {
    setUploadInfo(prev => ({
      ...prev,
      productInfo: [
        {
          productId: e.target.value,
        },
      ],
    }));
  };

  const handleType = e => {
    setUploadInfo(prev => ({ ...prev, type: e.target.value }));
  };

  const handleDesc = e => {
    setUploadInfo(prev => ({
      ...prev,
      description: e.target.value,
    }));
  };

  const handleTitle = e => {
    setUploadInfo(prev => ({
      ...prev,
      title: e.target.value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();

    fetch(`${API.POSTS}`, {
      method: 'POST',
      headers: {
        enctype: 'multipart/form-data',
        authorization: token,
      },
      body: uploadForm,
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'success') {
          navigate('/home-warming-list');
        } else {
          alert('실패');
        }
      });
  };

  return (
    <>
      <S.PostingNav>
        <Link to="/">
          <S.Logo src="images/posting/logo.png" alt="Logo Img" />
        </Link>
        <S.PostingBtn onClick={onSubmit}>올리기</S.PostingBtn>
      </S.PostingNav>
      <S.PostingTitle>집들이 글쓰기</S.PostingTitle>
      <ContentForm
        handleType={handleType}
        img={img}
        handleImg={handleImg}
        uploadInfo={uploadInfo}
        handleMarker={handleMarker}
        handleProductId={handleProductId}
        title={title}
        handleTitle={handleTitle}
        description={description}
        handleDesc={handleDesc}
      />
    </>
  );
}
