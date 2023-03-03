import styled from 'styled-components';
import { flex } from '../../../styles/mixin';

export const AllWarp = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
`;

export const ModalWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 40%;
  height: 95%;
  padding: 20px;
  transform: translate(-50%, -50%);
  border: solid #e6e6e6 2px;
  border-radius: 10px;
  background-color: white;
  color: black;
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: 60px;
  text-align: center;
  font-size: larger;
  font-weight: 700;
`;

export const Close = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 15px;
  top: 15px;
  cursor: pointer;
`;

export const ProductWrap = styled.div`
  ${flex(null, 'center', null)}
  align-items: center;
  margin-bottom: 40px;
`;

export const ProductImg = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border-radius: 5px;
`;

export const EvaluationWrap = styled.div`
  ${flex(null, 'flex-start', 'column')}
`;

export const Evaluation = styled.p`
  margin-bottom: 10px;
  font-size: large;
`;

export const ScoreWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Score = styled.select`
  width: 65px;
  margin-left: 5px;
`;

export const AddPictureWrap = styled.div`
  ${flex(null, 'center', 'column')}
  margin-top: 40px;
  align-items: flex-start;
  margin-bottom: 40px;
`;

export const AddPictureTitle = styled.p`
  margin-bottom: 10px;
`;

export const Picture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const AddpictureBtn = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: solid 2px #2ec7f2;
  color: #2ec7f2;
  background-color: white;
  font-size: 15px;
  cursor: pointer;
`;

export const ReviewTextWrap = styled(EvaluationWrap)`
  margin-bottom: 40px;
`;

export const ReviewTextTitle = styled.p`
  margin-bottom: 10px;
`;

export const ReviewInput = styled.input`
  padding-bottom: 80px;
  padding-left: 10px;
  padding-right: 10px;
  min-height: 110px;
  width: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  font-size: 15px;
`;

export const CompletBtn = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: #2ec7f2;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;
