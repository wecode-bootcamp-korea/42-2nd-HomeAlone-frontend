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
  top: 38%;
  width: 45px;
  height: 45px;
  background-color: white;
  border-radius: 50%;
  border: 1px solid #eeeeee;
  box-shadow: 0 2px 5px rgb(63 71 77 / 15%);
  text-align: center;
  font-size: 35px;
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
  }
`;
