import styled, { css } from 'styled-components/macro';
import { flex } from '../../../../styles/mixin';
import theme from '../../../../styles/theme';

export const PaymentOptionsBox = styled.div`
  ${flex('center', 'center', null)};
  width: 600px;
  background-color: white;
  border: 1px solid #eeeeee;
`;

export const Option = styled.div``;

export const OptionBtn = styled.button`
  background-color: white;
  border-style: none;
  border-right: 1px solid #eeeeee;
  padding-bottom: 10px;
  cursor: pointer;
  border: ${({ isClicked }) => isClicked && css`2px solid #35C5F0`};
  background-color: ${({ isClicked }) => isClicked && css`#eefbfe`};

  img {
    width: 72.5px;
    height: 50px;
  }
`;
