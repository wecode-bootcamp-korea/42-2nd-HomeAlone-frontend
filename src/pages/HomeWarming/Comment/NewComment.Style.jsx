import styled from 'styled-components';

export const NewCommetAllWrap = styled.div`
  margin-bottom: 20px;
`;

export const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImg = styled.img`
  margin-right: 10px;
  width: 35px;
  height: 35px;
  border-radius: 70%;
  overflow: hidden;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: large;
`;

export const CommentWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-left: 45px;
`;

export const RemoveCommentBtn = styled.button`
  border: solid 1px white;
  background-color: white;
  font-size: small;
  color: rgb(130, 140, 148);
  cursor: pointer;
`;
