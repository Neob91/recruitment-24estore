import { css } from 'emotion';

import { darkBlue, lightBlue, veryDarkBlue } from '@/common/colors';

export const sectionStyle = css`
  box-sizing: border-box;
  width: 416px;
  height: 600px;
  margin: 0 10px 10px 0;

  padding: 16px;
  border: 1px solid ${darkBlue};
  overflow: scroll;

  & > div:nth-child(1) {
    font-size: 16px;
    margin: 0 0 32px;
  }

  @media (max-width: 600px) {
    min-width: 0;
    width: 100%;
    height: 240px;
  }
`;
