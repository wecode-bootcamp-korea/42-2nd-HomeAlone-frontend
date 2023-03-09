import styled from 'styled-components';
import { flex } from '../../../../styles/mixin';
import theme from '../../../../styles/theme';

export const MarkerModalWrapper = styled.div`
  width: 375px;
  height: 150px;
`;

export const MarkerModalBox = styled.div`
  ${flex(null, 'center', 'column')}
  padding: 10px;
  width: 375px;
  height: 150px;
  background-color: white;
  border: 1px solid ${theme.borderColor};
  border-radius: 4px;
`;

export const SearchBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const SearchBar = styled.input`
  width: 280px;
  height: 40px;
  border: 1px solid ${theme.borderColor};
  border-radius: 4px;
  padding-left: 10px;
  font-size: 15px;

  &:focus {
    outline: 3px solid ${theme.mainBlue};
  }
`;

export const CloseBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: white;
  border-style: none;
  font-size: 15px;
  cursor: pointer;
`;

export const ProductModal = styled.div`
  ${flex(null, 'center', 'column')}
  width: 375px;
  height: 100px;
  background-color: white;
  border: 1px solid ${theme.borderColor};
  border-radius: 4px;
`;

export const SearchedList = styled.ul`
  position: relative;
  overflow-y: scroll;
`;

export const SearchedItem = styled.li`
  ${flex('space-between', 'center', null)}
  width: 375px;
  height: 60px;
  padding: 5px 20px;
  margin-top: 20px;
`;

export const ItemBox = styled.div`
  ${flex(null, 'center', null)}
  gap: 10px;
`;

export const ItemImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 22px;
`;

export const SelectBtn = styled.button`
  width: 55px;
  height: 32px;
  background-color: ${theme.mainBlue};
  border-style: none;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
