import styled from 'styled-components';
import { flex } from '../../../styles/mixin';

export const CommentWrap = styled.div`
  margin-top: 40px;
  margin-bottom: 200px;
`;

export const Comment = styled.p`
  ${flex(null, 'center', null)};
  font-size: larger;
  font-weight: 700;
`;

export const CommentCount = styled.span`
  margin-left: 10px;
  font-size: larger;
  font-weight: 700;
  color: #35c5f0;
`;

export const InputWrap = styled.div`
  display: flex;
  margin-top: 15px;
  position: relative;
  margin-top: 50px;
`;

export const UserImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 70%;
  overflow: hidden;
  margin-right: 10px;
`;

export const CommentInput = styled.input`
  width: 100%;
  border: solid 1px rgb(218, 221, 224);
`;

export const CommentSubmit = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  background-color: white;
  color: rgb(218, 221, 224);
  cursor: pointer;
`;

export const ChangeColorCommentBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  background-color: white;
  color: #35c5f0;
  cursor: pointer;
`;

export const NewComment = styled.div`
  margin-top: 30px;
`;
