import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flex } from '../../styles/mixin';

export const Section = styled.section`
  ${flex('center', 'center', 'column')}
  padding: 50px;
  height: 100%;
`;
export const LogoImg = styled.img`
  width: 120px;
`;

export const Title = styled.h1`
  padding-top: 50px;
  font-weight: bolder;
`;

export const SocialSignup = styled.div`
  ${flex('', 'center', 'column')}
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.pageBackground};
`;

export const Contens = styled.p`
  margin-top: 20px;
  font-size: 12px;
  color: #828c94;
`;

export const SocialSignupImg = styled.img`
  width: 30px;
  margin-top: 10px;
`;

export const SignupForm = styled.form`
  ${flex(null, null, 'column')}
  width: 350px;
`;

export const EmainInput = styled.input`
  width: 160px;
  height: 40px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
`;

export const SingupInput = styled.input`
  height: 40px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
`;

export const CertificationBtn = styled.button`
  height: 45px;
  margin-top: 20px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  color: #c2c8cc;
  background-color: #f7f8fa;
  font-size: 15px;
  cursor: pointer;
`;

export const Text = styled.label`
  margin-top: 30px;
  font-weight: bolder;
`;

export const Description = styled.span`
  margin-top: 10px;
  font-size: 12px;
  color: #828c94;
`;

export const SignupButton = styled.button`
  height: 45px;
  margin-top: 30px;
  border-radius: 5px;
  color: #ffffff;
  border: none;
  background-color: #35c5f0;
  font-size: 15px;
  cursor: pointer;
`;

export const Footer = styled.footer`
  ${flex('center', '', '')}
  margin-top: 20px;
  padding-bottom: 30px;
  color: #424242;
  font-size: 13px;
`;

export const LoginLink = styled(Link)`
  color: #000000;
  cursor: pointer;
`;
