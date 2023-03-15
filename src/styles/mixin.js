import { css } from 'styled-components';

export const flex = (jc = 'center', ai = 'center', fd = 'row') => css`
  display: flex;
  justify-content: ${jc};
  align-items: ${ai};
  flex-direction: ${fd};
`;

export const linkStyle = css`
  color: black;
  text-decoration: none;
`;

export const carouselBtn = css`
  position: absolute;
  top: 32%;
  padding-top: 6px;
  width: 45px;
  height: 45px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgb(63 71 77 / 15%);
  text-align: center;
  font-size: 35px;
  z-index: 10;
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
  }
`;

export const modalBtn = css`
  padding: 10px 20px;
  border-radius: 20px;
  border-style: none;
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    filter: brightness(80%);
  }
`;
