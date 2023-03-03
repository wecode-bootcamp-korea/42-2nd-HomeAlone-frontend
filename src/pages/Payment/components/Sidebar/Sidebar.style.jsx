import styled from 'styled-components';
import ReactModal from 'react-modal';
import { flex } from '../../../../styles/mixin';
import theme from '../../../../styles/theme';

export const SidebarBox = styled.div`
  ${flex(null, null, 'column')}
  position: sticky;
  top: 20%;
`;

export const PriceBoxList = styled.div`
  width: 360px;
  padding: 20px;
  border: 1px solid #eeeeee;
  border-radius: 4px;
`;

export const PriceBox = styled.div`
  ${flex(null, null, 'column')}
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

export const Price = styled.div`
  ${flex('space-between', null, null)}
`;

export const PriceTitle = styled.p`
  color: gray;
  font-weight: 400;
`;

export const TotalPrice = styled.div`
  ${flex('space-between', null, null)}
  padding-top: 20px;
  border-top: 1px solid #eeeeee;
`;

export const SubTitle = styled.h3`
  font-size: 17px;
  font-weight: 600;
`;

export const PaymentBtn = styled.button`
  margin-top: 20px;
  padding: 20px;
  background-color: ${theme.mainBlue};
  border-style: none;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;

  &:hover {
    filter: brightness(80%);
  }
`;

export const PaymentModal = styled(ReactModal)`
  ${flex('center', 'center', 'column')}
  position: absolute;
  top: 30%;
  left: 37%;
  gap: 30px;
  width: 360px;
  height: 250px;
  background-color: white;
  border: 1px solid #eeeeee;
  text-align: center;
`;

export const ModalTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 20px;
`;

export const ModalBtn = styled.button`
  padding: 10px 20px;
  background-color: ${theme.mainBlue};
  border-radius: 20px;
  border-style: none;
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    filter: brightness(80%);
  }
`;
