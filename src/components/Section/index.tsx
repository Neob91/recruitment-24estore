import React from 'react';

import { sectionStyle } from './style';

interface OwnProps {
  title: string;
  children: React.ReactNode;
}

type Props = OwnProps;

export const Section: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={sectionStyle}>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
};
