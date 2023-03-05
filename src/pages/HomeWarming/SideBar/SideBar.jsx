import { useEffect, useState } from 'react';
import API from '../../../config/config';
import * as S from './SideBar.Style';

export default function SideBar({ homeWarmingData, commentList, commentData }) {
  const [scrapBtn, setScrapBtn] = useState(homeWarmingData.isScrapped);
  const [controlBtn, setControlBtn] = useState(false);

  const clickScrapBtn = () => {
    setScrapBtn(prev => {
      return !prev;
    });
    setControlBtn(true);
  };

  useEffect(() => {
    if (scrapBtn && controlBtn) {
      fetch(`${API.SCRAPS}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          postId: homeWarmingData.id,
        }),
      }).then(res => {
        return res.json();
      });
    } else if (!scrapBtn && controlBtn) {
      fetch(`${API.SCRAPS}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          postId: homeWarmingData.id,
        }),
      }).then(res => {
        return res.json();
      });
    }
  }, [scrapBtn]);

  return (
    <S.SideButtonWrap>
      <S.Button>
        {scrapBtn ? (
          <S.ChangeBookMarkBtn
            src="/images/HomeWarming/bookmark.png"
            alt="bookmarkbtn"
            onClick={clickScrapBtn}
          />
        ) : (
          <S.BookMarkBtn
            src="/images/HomeWarming/bookmark.png"
            alt="bookmarkbtn"
            onClick={clickScrapBtn}
          />
        )}
        <S.BookMarkCount>{homeWarmingData.scrapCount}</S.BookMarkCount>
        <S.CommentBtn src="/images/HomeWarming/comment.png" alt="commentbtn" />
        <p>{commentData.length - 1}</p>
      </S.Button>
    </S.SideButtonWrap>
  );
}
