import styled from 'styled-components';
import { flex } from '../../../styles/mixin';

export const ProductInfoWrap = styled.div`
  margin-left: 30px;
  width: 50%;
`;

export const ProductName = styled.p`
  min-height: 43px;
  margin: 0 92px 0 0;
  font-size: 30px;
  line-height: 33px;
`;

export const Review = styled.p`
  margin-bottom: 20px;
  color: #009fcd;
  font-size: 20px;
`;

export const Discount = styled.p`
  margin-bottom: 20px;
  color: #757575;
`;

export const Price = styled.p`
  margin-right: 4px;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 900;
`;

export const DeliveryWrap = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const DeliveryTitle = styled.p`
  margin-right: 10px;
`;

export const ExplainProduct = styled.p`
  line-height: 1.5;
  margin-bottom: 10px;
`;

export const OptionWrap = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

export const Name = styled.p`
  margin: 10px;
`;

export const QuantityWrap = styled.div`
  ${flex('space-between', null, null)}
  margin-left: 10px;
  margin-right: 10px;
`;

export const QuantityHandle = styled.div`
  ${flex(null, 'center', null)}
`;

export const QuantityMinus = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

export const Quantity = styled.p`
  padding: 8px;
  border-radius: 4px;
  font-weight: 600;
  color: #35c5f0;
  background-color: white;
`;

export const QuantityPlus = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  cursor: pointer;
`;
export const TotalPrice = styled.p`
  font-weight: 600;
  font-size: 20px;
`;

export const CartBtn = styled.button`
  padding: 13px 10px 14px;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 4px;
  border-color: #35c5f0;
  background-color: #35c5f0;
  color: #fff;
  font-size: 17px;
  line-height: 26px;
  cursor: pointer;
`;
