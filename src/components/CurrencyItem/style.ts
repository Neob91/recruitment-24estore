import { css } from 'emotion';

import { darkBlue, lightBlue } from '@/common/colors';

export const itemStyle = css`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  width: 400px;
  padding: 8px;
  border: 1px solid ${darkBlue};
  background-color: ${lightBlue};

  &:hover {
    background-color: ${darkBlue};
  }

  &:not(:last-child) {
    margin: 0 0 10px;
  }

  & > div:nth-child(1) {
    width: 80px;
  }

  & > div:nth-child(2) {
    flex-grow: 1;
  }

  & > div:nth-child(3) {
    text-align: right;
  }
`;

export const itemFavStyle = css`
  border-width: 2px;
  padding-left: 16px;

  &:before {
    content: '';
    position: absolute;
    left: 1px;
    top: 1px;
    bottom: 1px;
    width: 8px;
    background-color: ${darkBlue};
  }
`;
