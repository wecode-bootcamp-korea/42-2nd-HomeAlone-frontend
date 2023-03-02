import * as S from './Comment.Style';

export default function Comment() {
  return (
    <S.CommentWrap>
      <p>댓글갯수</p>
      <S.InputWrap>
        <S.UserImg src="/images/HomeWarming/userImg.png" alt="userimg" />
        <S.CommentInput placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다. :)" />
        <S.CommentSubmit type="button">입력</S.CommentSubmit>
      </S.InputWrap>
    </S.CommentWrap>
  );
}
