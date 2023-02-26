import { Link } from 'react-router-dom';
import { flex } from '../../../../styles/mixin';
import styled from 'styled-components';

const borderColor = '#edededs';
const textColor = '#757575';
const backgroundColor = '#f5f5f5';

export const ItemBox = styled.li`
  width: 700px;
  margin-bottom: 20px;
  border: 1px solid ${borderColor};
  border-radius: 5px;
  background-color: #ffffff;
`;

export const ItemTitle = styled.h1`
  text-align: center;
  padding: 13px;
`;

export const ItemBoxList = styled.article`
  border-top: 1px solid #dbdbdb;
`;

export const DtailLink = styled(Link)`
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  color: #000000;
`;

export const ItemList = styled.div`
  ${flex('space-between', null, null)}
  position: relative;
  margin-top: 30px;
`;

export const ItemDetail = styled.div`
  display: flex;
  padding: 15px;
`;

export const ItemInput = styled.input`
  margin-right: 15px;
`;

export const Deletbutton = styled.button`
  position: absolute;
  top: 0;
  right: 10px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const DeleteModal = styled.div`
  ${flex('center', 'center', 'column')}
  position: fixed;
  top: 50%;
  left: 50%;
  width: 290px;
  height: 130px;
  transform: translate(-50%, -50%);
  border: solid #dbdbdb 1px;
  border-radius: 10px;
  background-color: #ffffff;
  color: black;
  text-align: center;
`;

export const CloseButton = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const CencleButton = styled.button`
  width: 120px;
  height: 50px;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

export const DeletButton = styled.button`
  width: 120px;
  height: 50px;
  background-color: #35c5f0;
  border: 1px solid #35c5f0;
  border-radius: 5px;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
`;

export const DeletImg = styled.img`
  width: 8px;
  height: 8px;
  margin-right: 20px;
`;

export const ItemImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;

export const ItemContent = styled.div`
  padding: 15px;
`;

export const ItemShipping = styled.p`
  margin-top: 10px;
  font-size: 12px;
  color: #828c94;
`;

export const ItemOptions = styled.div`
  ${flex(null, null, 'column')}
  width: 630px;
  padding: 10px;
  margin: 10px 45px;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

export const Quantity = styled.h2`
  color: ${textColor};
`;

export const CountWrapper = styled.div`
  ${flex('space-between', null, null)}
  margin-top: 10px;
`;

export const ItemFooter = styled.footer`
  text-align: center;
  padding: 15px;
  color: ${textColor};
  border-top: 1px solid #dadde0;
`;

export const SelectBox = styled.div`
  ${flex('space-between', null, null)}
  width: 700px;
  margin-bottom: 5px;
`;

export const SelectBoxLabel = styled.label`
  margin-left: 10px;

  padding: 5px;
  color: ${textColor};
`;
export const SelectInput = styled.input`
  margin-right: 10px;
`;

export const SelectDeleteButton = styled.button`
  color: ${textColor};
  background-color: ${backgroundColor};
  cursor: pointer;
  border: none;
`;

export const DeleteModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(219 219 219 / 60%);
  z-index: 1;
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

export const Select = styled.select`
  width: 60px;
  color: #757575;
  border-color: #dbdbdb;
`;

export const SellingPrice = styled.span`
  font-weight: bolder;
`;
