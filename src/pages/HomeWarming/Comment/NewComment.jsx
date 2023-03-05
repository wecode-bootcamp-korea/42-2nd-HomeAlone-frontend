import * as S from './NewComment.Style';

export default function NewComment({ comment, removeComment, commentData }) {
  return (
    <S.NewCommetAllWrap>
      {commentData &&
        commentData.map(commentArray => {
          return (
            <>
              <S.UserInfoWrap>
                <S.UserImg src={commentArray.profileImage} alt="userimg" />
                <S.UserName>{commentArray.nickname}</S.UserName>
              </S.UserInfoWrap>
              <S.CommentWrap>
                <p>{commentArray.content}</p>
                <S.RemoveCommentBtn onClick={() => removeComment(comment.id)}>
                  삭제
                </S.RemoveCommentBtn>
              </S.CommentWrap>
            </>
          );
        })}
    </S.NewCommetAllWrap>
  );
}
