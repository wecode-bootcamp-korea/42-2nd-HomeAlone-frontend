import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './HomeWarming.Style';
import API from '../../config/config';
import Comment from './Comment/Comment';
import SideBar from './SideBar/SideBar';
import ProductModal from './ProductModal/ProductModal';

export default function HomeWarming() {
  const [homeWarmingData, setHomeWramingData] = useState({});
  const [commentData, setCommentData] = useState([{}]);
  const [showPlusBtn, setShowPlusBtn] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [userInfo, setUserInfo] = useState([{}]);

  const params = useParams();

  useEffect(() => {
    fetch(`${API.COMMENTS}/post/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCommentData(data.data);
      });
  }, []);

  useEffect(() => {
    fetch(`${API.POSTS}/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setHomeWramingData(data.data);
        setUserInfo(data.user);
      });
  }, [params.id]);

  const handlePlusBtnHover = () => setShowPlusBtn(true);

  const handlePlusBtnLeave = () => {
    setShowPlusBtn(false);
    setShowProductModal(false);
  };

  const handlePlusBtnClick = () => {
    setShowProductModal(prev => !prev);
  };

  const pixelRow =
    homeWarmingData.productInfo && homeWarmingData.productInfo[0]?.pixelRow;
  const pixelColumn =
    homeWarmingData.productInfo && homeWarmingData.productInfo[0]?.pixelColumn;

  return (
    <div>
      <S.TitleImg src={homeWarmingData.postImageUrl} alt="title img" />
      <S.MainTextWrap>
        <SideBar homeWarmingData={homeWarmingData} commentData={commentData} />
        <S.TitleWrap>
          <S.CategoryTitle>온라인 집들이</S.CategoryTitle>
          <S.Title>{homeWarmingData.title}</S.Title>
          <S.UserInfoWrap>
            <S.UserImg src={homeWarmingData.profileImage} alt="userimg" />
            <S.UserId>{homeWarmingData.nickname}</S.UserId>
          </S.UserInfoWrap>
        </S.TitleWrap>
        <div
          onMouseEnter={handlePlusBtnHover}
          onMouseLeave={handlePlusBtnLeave}
        >
          <S.HomeImg src={homeWarmingData.postImageUrl} alt="home img" />

          {showPlusBtn && (
            <S.MarkerBox pixelRow={pixelRow} pixelColumn={pixelColumn}>
              <S.PlusBtn onClick={handlePlusBtnClick}>+</S.PlusBtn>
              {showProductModal && (
                <ProductModal homeWarmingData={homeWarmingData} />
              )}
            </S.MarkerBox>
          )}
        </div>
        <S.Explanation>{homeWarmingData.description}</S.Explanation>
        <S.UserCard>
          <S.UserImg src={homeWarmingData.profileImage} alt="userimg" />
          <S.TextWrap>
            <S.UserName>{homeWarmingData.nickname}</S.UserName>
            <p>안녕하세요!</p>
          </S.TextWrap>
        </S.UserCard>
        <Comment
          commentData={commentData}
          setCommentData={setCommentData}
          userInfo={userInfo}
        />
      </S.MainTextWrap>
    </div>
  );
}
