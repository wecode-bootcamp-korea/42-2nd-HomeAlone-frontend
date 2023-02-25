import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flex } from '../../styles/mixin';

const borderColor = '#dbdbdb';

export const Container = styled.div`
  ${flex('center', 'center', 'column')}
  height: 100vh;
  background-color: #fafafa;
`;

export const LogoImg = styled.img`
  width: 120px;
`;

export const LoginForm = styled.form`
  ${flex(null, 'center', 'column')}
  margin-top: 10px;
`;

export const UserInput = styled.input`
  width: 300px;
  height: 50px;
  padding: 15px;
  border: 1px solid ${borderColor};
  border-radius: 5px;
  color: #fafafa;
  font-size: 15px;
`;

export const LoginButton = styled.button`
  width: 300px;
  height: 50px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.mainBlue};
  border: none;
  color: #ffffff;
  font-weight: bolder;
  border-radius: 5px;
  font-size: 15px;
`;

export const SignupLink = styled(Link)`
  margin-top: 30px;
  text-decoration: none;
  font-size: 15px;
  color: #424242;
`;

export const Text = styled.p`
  width: 300px;
  text-align: center;
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid ${borderColor};
  color: #757575;
  font-size: 12px;
`;

export const LoginImg = styled.img`
  width: 40px;
  margin-top: 10px;
`;
