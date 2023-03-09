import styled from 'styled-components';
import { flex } from '../../../../styles/mixin';
import theme from '../../../../styles/theme';

const uploadColor = '#dadce0';
const contentBorder = '#bdbdbd';

export const ContentFormBox = styled.form`
  ${flex(null, 'flex-start', 'column')}

  width: 1000px;
  padding-left: 200px;
`;

export const ContentTitle = styled.div`
  ${flex(null, 'center', null)}
  gap: 20px;
  width: 1000px;
  padding: 40px 0px;
`;

export const Content = styled.div`
  display: flex;
  gap: 40px;
`;

export const SelectBox = styled.select`
  width: 112px;
  height: 40px;
  padding: 0px 10px;
  border: 1px solid ${contentBorder};
  border-radius: 4px;
  outline: none;
`;

export const Upload = styled.div`
  ${flex('center', 'center', 'column')}
  width: 460px;
  height: 275px;
  background-color: #f7f8fa;
  border: 1px dashed ${uploadColor};

  &:hover {
    opacity: 60%;
  }
`;

export const UploadLabel = styled.label`
  margin-top: 10px;
  padding: 10px 20px;
  color: gray;
  font-weight: 600;
  cursor: pointer;
`;

export const UploadInput = styled.input`
  display: none;
`;

export const UploadBox = styled.div`
  ${flex(null, null, 'column')}
  gap: 15px;
`;

export const UploadTitle = styled.input`
  height: 50px;
  padding: 10px;
  border: 1px solid ${uploadColor};
  border-radius: 4px;
  font-size: 17px;

  &::placeholder {
    color: ${uploadColor};
  }

  &:focus {
    outline: 3px solid ${theme.mainBlue};
  }
`;

export const UploadDesc = styled.textarea`
  width: 460px;
  height: 210px;
  padding: 10px;
  border: 1px solid ${uploadColor};
  border-radius: 4px;
  overflow: hidden;
  overflow-wrap: break-word;
  resize: none;
  font-size: 17px;

  &::placeholder {
    color: ${uploadColor};
  }

  &:focus {
    outline: 3px solid ${({ theme }) => theme.mainBlue};
  }
`;

export const UploadedImg = styled.img`
  position: relative;
  width: 460px;
  height: 275px;
  object-fit: cover;
  border: 1px solid ${uploadColor};
  border-radius: 4px;
`;

export const Tag = styled.div`
  position: absolute;
  bottom: 31%;
  right: 55%;
  padding: 10px 15px;
  background-color: ${theme.mainBlue};
  border-style: none;
  border-radius: 32px;
  color: white;
  font-weight: 600;
`;

export const MarkerBox = styled.div`
  ${flex(null, 'center', 'column')}
  position : absolute;
  top: ${({ pixelColumn }) => pixelColumn}px;
  left: ${({ pixelRow }) => pixelRow}px;
  transform: translate(3%, 146%);
  gap: 10px;
  z-index: 3;
`;

export const MarkerBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: ${theme.mainBlue};
  border-style: none;
  border-radius: 50%;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;
