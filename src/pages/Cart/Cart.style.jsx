import styled from 'styled-components';
import { flex } from '../../styles/mixin';

const backgroundColor = '#f5f5f5';

export const CartList = styled.div`
  ${flex('center', null, null)}
  top: 90px;
  position: relative;
  padding-bottom: 250px;
  background-color: ${backgroundColor};
  min-height: 1px;
`;

export const CartListMain = styled.main`
  margin: 50px 20px 50px 0px;
`;

export const CartListBox = styled.ul`
  padding: 0px 20px;
`;

export const CartListAside = styled.aside`
  ${flex(null, null, 'column')}
`;

export const TotalPriceBox = styled.div`
  position: sticky;
  top: 170px;
  transition: top 0.1s ease 0s;
`;

export const TotalPriceButton = styled.button`
  width: 300px;
  height: 40px;
  margin-top: 20px;
  color: #ffffff;
  background-color: #35c5f0;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #31bbe5;
  }
  &:disabled {
    background-color: lightgray;
  }
`;

export const EmptyCart = styled.div`
  ${flex(null, 'center', 'column')}
  padding: 110px;
`;

export const EmptyCartImg = styled.img`
  width: 200px;
  padding-bottom: 20px;
`;

export const EmptyCartButton = styled.button`
  width: 220px;
  height: 50px;
  color: #ffffff;
  background-color: #35c5f0;
  border-radius: 6px;
  font-size: 17px;
  font-weight: bolder;
  border: none;

  &:hover {
    background-color: #31bbe5;
  }
`;
