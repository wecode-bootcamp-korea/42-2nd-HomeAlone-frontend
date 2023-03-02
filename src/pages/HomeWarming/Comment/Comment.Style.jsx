import styled from 'styled-components';

export const CommentWrap = styled.div`
  margin-top: 40px;
  margin-bottom: 60px;
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
