import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './Comment.Style';
import API from '../../../config/config';
import NewComment from './NewComment';

export default function Comment({ commentData, setCommentData, userInfo }) {
  const params = useParams();

  const [comment, setComment] = useState('');

  const navigate = useNavigate();

  const getComment = e => {
    setComment(e.target.value);
  };

  const addComment = () => {
    fetch(`${API.COMMENTS}/post/${params.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        content: comment,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (comment === '') {
          return alert('댓글을 입력 해 주세요');
        } else if (localStorage.getItem('token') === 'undefined') {
          alert('로그인이 필요합니다.');
          navigate('/login');
        }
        const result = [
          {
            commentId: commentData.length + 1,
            content: comment,
            profileImage: userInfo.profileImage,
            nickname: userInfo.nickname,
          },
          ...commentData,
        ];
        setCommentData(result);
        setComment('');
      });
  };

  const removeComment = id => {
    const removeComment = commentData.filter(comment => comment[0].id !== id);
    setCommentData(removeComment);
  };

  const btnColorChange = comment.length > 0;

  return (
    <S.CommentWrap>
      <S.Comment>
        댓글<S.CommentCount>{commentData.length - 1}</S.CommentCount>
      </S.Comment>
      <S.InputWrap>
        <S.UserImg src={userInfo.profileImage} alt="userimg" />
        <S.CommentInput
          placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다. :)"
          onChange={getComment}
          value={comment}
        />
        {btnColorChange ? (
          <S.ChangeColorCommentBtn type="button" onClick={addComment}>
            입력
          </S.ChangeColorCommentBtn>
        ) : (
          <S.CommentSubmit type="button" onClick={addComment}>
            입력
          </S.CommentSubmit>
        )}
      </S.InputWrap>
      <S.NewComment>
        <NewComment
          comment={comment}
          removeComment={removeComment}
          commentData={commentData}
          setCommentData={setCommentData}
          userInfo={userInfo}
        />
      </S.NewComment>
    </S.CommentWrap>
  );
}
