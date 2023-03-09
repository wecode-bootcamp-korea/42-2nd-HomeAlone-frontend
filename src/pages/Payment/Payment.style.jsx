import styled from 'styled-components/macro';
import { flex } from '../../styles/mixin';
import theme from '../../styles/theme';

const paymentColor = '#a4acb3';

export const Payment = styled.div`
  ${flex('center', 'flex-start', null)};
  gap: 50px;
  height: auto;
  min-height: 100%;
  padding-top: 160px;
  padding-bottom: 250px;
`;

export const PaymentBox = styled.div`
  ${flex(null, null, 'column')};
  gap: 40px;
  width: 600px;

  h2 {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const PaymentBoxTitle = styled.p`
  width: 100%;
  padding: 10px 0px;
  border-bottom: 1px solid #eeeeee;
  color: gray;
  font-size: 20px;
  font-weight: 600;
`;

export const PaymentSection = styled.section`
  ${flex(null, null, 'column')}
  padding: 20px 0px 40px 0px;
  gap: 10px;
`;

export const InputBox = styled.div`
  ${flex(null, 'center', null)}
`;

export const PaymentLabel = styled.div`
  width: 100px;
  padding: 15px;
  color: ${paymentColor};
  font-weight: 400;
`;

export const AddressInputBox = styled.div`
  display: flex;
`;

export const AddressBox = styled.div`
  ${flex(null, null, 'column')}
  gap: 10px;
`;

export const AddressBtn = styled.button`
  width: 85px;
  padding: 10px;
  margin-right: 8px;
  background-color: white;
  border: 1px solid ${theme.mainBlue};
  border-radius: 4px;
  color: ${theme.mainBlue};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`;

export const PostalCode = styled.input`
  width: 177px;
  padding: 10px;
  border: 1px solid ${paymentColor};
  border-radius: 4px;
  outline-color: ${theme.mainBlue};
`;

export const Address = styled.input`
  width: 270px;
  padding: 10px;
  border: 1px solid ${paymentColor};
  border-radius: 4px;
  outline-color: ${theme.mainBlue};
`;

export const DetailAddress = styled.input`
  width: 270px;
  padding: 10px;
  border: 1px solid ${paymentColor};
  border-radius: 4px;
  outline-color: ${theme.mainBlue};
`;
