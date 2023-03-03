import styled from 'styled-components';
import { flex } from '../../../../styles/mixin';

const paymentColor = '#a4acb3';

export const CartItem = styled.div`
  ${flex(null, 'center', null)};
  gap: 10px;
  width: 600px;
  height: 100px;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #eeeeee;
  border-radius: 4px;

  img {
    width: 64px;
    height: 64px;
    border-radius: 4px;
  }
`;

export const CartInfo = styled.div`
  ${flex(null, null, 'column')};
  gap: 10px;
`;

export const PriceInfo = styled.div`
  display: flex;
  gap: 10px;

  h1 {
    font-weight: 600;
  }

  p {
    color: ${paymentColor};
  }
`;
