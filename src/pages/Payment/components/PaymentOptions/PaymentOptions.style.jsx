import styled from 'styled-components';
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

  &:focus {
    background-color: #eefbfe;
    border: 3px solid ${theme.mainBlue};
  }

  img {
    width: 72.5px;
    height: 50px;
  }
`;
