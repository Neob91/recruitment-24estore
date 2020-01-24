import { css } from 'emotion';

import { darkBlue, lightBlue, veryDarkBlue } from '@/common/colors';

export const sectionStyle = css`
  min-width: 400px;
  height: 600px;

  padding: 16px;
  border: 1px solid ${darkBlue};
  overflow: scroll;

  & > div:nth-child(1) {
    font-size: 16px;
    margin: 0 0 32px;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
