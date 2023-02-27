import styled from 'styled-components';

export const Select = styled.select`
  width: 160px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
`;
