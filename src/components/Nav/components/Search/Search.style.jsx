import styled from 'styled-components';

export const SearchInput = styled.input`
  position: fixed;
  width: 380px;
  left: 37%;
  padding: 10px;
  border: 1px solid #dadde0;
  border-radius: 4px;
  outline: none;

  &::placeholder {
    color: #dadde0;
    font-size: 15px;
  }

  &:hover {
    background-color: #eeeeee;
  }
`;
