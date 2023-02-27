import * as S from './SideBar.Style';

export default function SideBar() {
  return (
    <S.SideButtonWrap>
      <S.Button>
        <S.BookMarkBtn
          src="/images/HomeWarming/bookmark.png"
          alt="bookmarkbtn"
        />
        <S.BookMarkCount>7</S.BookMarkCount>
        <S.CommentBtn src="/images/HomeWarming/comment.png" alt="commentbtn" />
        <p>7</p>
      </S.Button>
    </S.SideButtonWrap>
  );
}
