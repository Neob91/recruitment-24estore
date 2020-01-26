import { css } from 'emotion';

export const appStyle = css`
  display: flex;
  flex-direction: row;

  padding: 20px;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;
