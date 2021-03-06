import { css } from 'emotion';

import { darkBlue, lightBlue, veryDarkBlue } from '@/common/colors';

export const itemStyle = css`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  width: 100%;
  padding: 8px;
  border: 1px solid ${veryDarkBlue};
  border-radius: 4px;
  background-color: ${lightBlue};

  font-size: 14px;
  cursor: pointer;

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
  padding-left: 14px;

  &:before {
    content: '';
    position: absolute;
    left: 3px;
    top: 3px;
    bottom: 3px;
    width: 3px;
    background-color: ${veryDarkBlue};
    border-radius: 4px;
  }
`;
